import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: 31 }, (_, i) => ({
    src: `/lovable-uploads/image-${i + 1}.jpg`,
  }));

  return (
    <div id="gallery" className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-glitzy-darkpurple mb-10">Gallery</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-3xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <img
                src={image.src}
                alt={`Cake ${index + 1}`}
                className="rounded-xl w-full h-64 md:h-96 lg:h-[30rem] object-cover cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setLightboxOpen(true);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={images}
      />
    </div>
  );
};

export default Gallery;
