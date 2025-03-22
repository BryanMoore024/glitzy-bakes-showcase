
import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    image: "",
    rating: 5,
    text: "My daughter's birthday cake was beyond beautiful! Not only did it look amazing, but it tasted delicious too. Will definitely be ordering again for our next celebration!"
  },
  {
    id: 2,
    name: "Mike T.",
    image: "",
    rating: 5,
    text: "The WWE cake made for my son's birthday was perfect! He was so excited and it was the highlight of the party. Great attention to detail and amazing flavor."
  },
  {
    id: 3,
    name: "Amanda K.",
    image: "",
    rating: 5,
    text: "I ordered cupcakes for a work event and they were a huge hit! Beautiful designs and everyone commented on how delicious they were. Highly recommend!"
  },
  {
    id: 4,
    name: "David R.",
    image: "",
    rating: 5,
    text: "The Stitch-themed cake for my daughter was absolutely magical! It looked exactly like the reference image I sent. The cake itself was moist and the frosting was perfect - not too sweet."
  },
  {
    id: 5,
    name: "Lisa W.",
    image: "",
    rating: 5,
    text: "I can't thank Glitzy Bakes enough for the amazing 50th birthday cake. It was both stunning and delicious. Everyone at the party was impressed!"
  }
];

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-purple-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-glitzy-purple/10 text-glitzy-purple text-sm font-medium mb-4">
            Happy Customers
          </div>
          <h2 className="section-title">What People Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their Glitzy Bakes experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg p-8 relative opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 -right-4 bg-glitzy-pink text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-glitzy-purple/20 flex items-center justify-center text-glitzy-purple font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-glitzy-darkpurple">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://g.page/r/CYTr2vcQOFU0EAI/review" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
