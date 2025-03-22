
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing framer-motion for animations
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: GalleryImage[] = [
    { id: 1, src: "/lovable-uploads/b8fa741d-8e69-49d3-9dc2-c51ab99b2a14.png", alt: "Barney cake with rainbow" },
    { id: 2, src: "/lovable-uploads/e2bccc4c-0920-4b44-a70a-a6d620773a35.png", alt: "Stitch themed cake" },
    { id: 3, src: "/lovable-uploads/ee3434b8-748b-4506-bed5-2552e4af8ec6.png", alt: "Number 10 cupcake arrangement with Stitch cake" },
    { id: 4, src: "/lovable-uploads/98a8ca4b-9331-4503-b853-7ae33c884fa8.png", alt: "Birthday cake with cupcakes" },
    { id: 5, src: "/lovable-uploads/6e12fb56-7d2b-4aaf-ac6b-ba4d0e0290b8.png", alt: "Stitch surfboard cake" },
    { id: 6, src: "/lovable-uploads/e3a4369a-5b8a-4213-b865-c69bca32ed5c.png", alt: "WWE wrestling ring cake" },
    { id: 7, src: "/lovable-uploads/6898c4c2-1bb1-45df-bb06-5241c10f63ea.png", alt: "Chocolate and caramel cupcakes" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when viewer is open
  };

  const closeImageViewer = () => {
    setViewerOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-glitzy-pink/10 text-glitzy-pink text-sm font-medium mb-4">
            Our Creations
          </div>
          <h2 className="section-title">Sweet Gallery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Each cake tells a story and brings joy to celebrations. Browse through our gallery of custom creations and find inspiration for your next special occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openImageViewer(index)}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Full screen image viewer */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageViewer}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-glitzy-pink transition-colors"
              onClick={closeImageViewer}
              aria-label="Close viewer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
              <p className="text-white text-sm">{currentImageIndex + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
