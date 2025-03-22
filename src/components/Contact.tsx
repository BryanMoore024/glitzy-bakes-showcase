
import { useState } from 'react';
import { Mail, Phone, Globe, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-glitzy-pink/10 text-glitzy-pink text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to order your custom cake or have questions? Reach out to us and we'll be happy to help make your special occasion even sweeter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-3xl bg-pink-50 p-8 space-y-6">
              <h3 className="text-2xl font-bold text-glitzy-darkpurple">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Phone className="w-5 h-5 text-glitzy-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium text-glitzy-darkpurple">Phone</h4>
                    <a href="tel:6163308538" className="text-gray-600 hover:text-glitzy-pink transition-colors">
                      (616) 330-8538
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-glitzy-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium text-glitzy-darkpurple">Email</h4>
                    <a href="mailto:ashv616@yahoo.com" className="text-gray-600 hover:text-glitzy-pink transition-colors">
                      ashv616@yahoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Globe className="w-5 h-5 text-glitzy-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium text-glitzy-darkpurple">Check us out on Facebook</h4>
                    <a href="https://www.facebook.com/profile.php?id=61557363174259" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-glitzy-pink transition-colors">
                      Glitzy Bakes
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Clock className="w-5 h-5 text-glitzy-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium text-glitzy-darkpurple">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium text-glitzy-darkpurple mb-3">Price Range</h4>
                <div className="flex items-center space-x-1 text-glitzy-gold">
                  <span className="text-lg font-semibold">$$$</span>
                </div>
              </div>
            </div>                   
          </div>
          
          <div className="lg:col-span-3 animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="rounded-3xl bg-white shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-glitzy-darkpurple mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg border-gray-200 focus:border-glitzy-pink focus:ring-glitzy-pink/20"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg border-gray-200 focus:border-glitzy-pink focus:ring-glitzy-pink/20"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-lg border-gray-200 focus:border-glitzy-pink focus:ring-glitzy-pink/20"
                      placeholder="Tell us about your cake requirements or any questions you have"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
