
import { Heart, Cake, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-glitzy-purple/10 text-glitzy-purple text-sm font-medium mb-4">
            About Glitzy Bakes
          </div>
          <h2 className="section-title">Creating Sweet Memories</h2>
          <p className="text-gray-600 mt-4">
            Home baker creating beautiful edible art in the form of desserts, building my portfolio and brand with passion and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/b35e4891-5947-4afb-8641-d8938058afcf.png" 
                alt="Glitzy Bakes Logo" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-glitzy-pink/5 rounded-full"></div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <div>
              <h3 className="text-2xl font-bold text-glitzy-darkpurple mb-4">Why Choose Glitzy Bakes?</h3>
              <p className="text-gray-600">
                At Glitzy Bakes, every creation is a masterpiece of flavor and design. I specialize in custom cakes that not only look amazing but taste incredible too. From birthday celebrations to special events, I'll help make your occasion unforgettable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-glitzy-pink/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-glitzy-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-glitzy-darkpurple mb-1">Made With Love</h4>
                  <p className="text-sm text-gray-600">Every detail crafted with care and passion</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-glitzy-purple/10 p-3 rounded-full">
                  <Cake className="w-6 h-6 text-glitzy-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-glitzy-darkpurple mb-1">Custom Designs</h4>
                  <p className="text-sm text-gray-600">Personalized to your unique vision</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-glitzy-gold/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-glitzy-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-glitzy-darkpurple mb-1">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Using only the finest ingredients</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-pink-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-glitzy-darkpurple mb-1">Timely Delivery</h4>
                  <p className="text-sm text-gray-600">Ready for your special moments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
