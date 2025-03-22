
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 glassmorphism border-b border-white/20' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b35e4891-5947-4afb-8641-d8938058afcf.png" 
              alt="Glitzy Bakes Logo" 
              className="h-14 w-auto" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="btn-primary">
              Order Now
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-glitzy-purple hover:text-glitzy-pink transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`
          md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out shadow-lg
          ${mobileMenuOpen ? 'max-h-[500px] border-b border-white/20' : 'max-h-0'}
        `}
      >
        <div className="px-4 py-3 space-y-3">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-glitzy-black hover:text-glitzy-pink transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-glitzy-black hover:text-glitzy-pink transition-colors">About</button>
          <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-glitzy-black hover:text-glitzy-pink transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-glitzy-black hover:text-glitzy-pink transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-glitzy-black hover:text-glitzy-pink transition-colors">Contact</button>
          <Button onClick={() => scrollToSection('contact')} className="w-full btn-primary">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
