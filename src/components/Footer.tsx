
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-glitzy-darkpurple text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4 flex items-center">
              <img 
                src="/lovable-uploads/b35e4891-5947-4afb-8641-d8938058afcf.png" 
                alt="Glitzy Bakes Logo" 
                className="h-20 w-auto bg-white rounded-full p-1" 
              />
            </div>
            <p className="text-gray-300 mb-4">
              Home baker creating beautiful edible art in the form of desserts. Building my portfolio and brand with passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-glitzy-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-glitzy-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-glitzy-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors">Gallery</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">Testimonials</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Custom Birthday Cakes</li>
              <li className="text-gray-300">Wedding Cakes</li>
              <li className="text-gray-300">Themed Cupcakes</li>
              <li className="text-gray-300">Special Event Desserts</li>
              <li className="text-gray-300">Corporate Orders</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-glitzy-pink mr-2">•</span>
                <a href="tel:6163308538" className="text-gray-300 hover:text-white transition-colors">
                  (616) 330-8538
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-glitzy-pink mr-2">•</span>
                <a href="mailto:ashv616@yahoo.com" className="text-gray-300 hover:text-white transition-colors break-all">
                  ashv616@yahoo.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-glitzy-pink mr-2">•</span>
                <span className="text-gray-300">
                  Bakery & Kitchen/cooking
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Glitzy Bakes. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-glitzy-pink mx-1" /> Love by James
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
