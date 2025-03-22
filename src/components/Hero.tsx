
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-glitzy-lightpink/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-glitzy-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-glitzy-gold/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-4 py-1 rounded-full bg-glitzy-pink/10 text-glitzy-pink text-sm font-medium">
              Beautiful Custom Cakes
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glitzy-darkpurple leading-tight">
              Turning Sweet Moments Into <span className="text-glitzy-pink">Edible Art</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Handcrafted custom cakes and desserts for every special occasion. Each creation is designed with love and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('gallery')} className="btn-primary">
                View Gallery
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="btn-outline">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-full shadow-xl overflow-hidden animate-float">
              <img 
                src="/lovable-uploads/b8fa741d-8e69-49d3-9dc2-c51ab99b2a14.png" 
                alt="Featured Cake" 
                className="w-full h-full object-cover transform scale-[0.85] hover:scale-90 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white rounded-full shadow-lg overflow-hidden animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="/lovable-uploads/e2bccc4c-0920-4b44-a70a-a6d620773a35.png" 
                alt="Cupcake" 
                className="w-full h-full object-cover transform scale-90 hover:scale-95 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-10 -right-6 w-32 h-32 bg-white rounded-full shadow-lg overflow-hidden animate-float" style={{ animationDelay: '1.5s' }}>
              <img 
                src="/lovable-uploads/ee3434b8-748b-4506-bed5-2552e4af8ec6.png" 
                alt="Specialty Cake" 
                className="w-full h-full object-cover transform scale-90 hover:scale-95 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-glitzy-darkpurple hover:text-glitzy-pink transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </button>
    </section>
  );
};

export default Hero;
