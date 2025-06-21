import { useState, useEffect } from "react";
import { User } from "lucide-react";

export function AboutSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      content: "Quickbils transformed our restaurant operations. Our customers love the QR menu system, and we've reduced order errors by 90%."
    },
    {
      name: "Priya Sharma",
      role: "Cafe Manager", 
      content: "The billing system is incredibly efficient. We can now serve more customers in less time while maintaining quality service."
    },
    {
      name: "Amit Patel",
      role: "Chain Restaurant Owner",
      content: "Managing multiple outlets has never been easier. The analytics help us make data-driven decisions across all locations."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="scroll-section gradient-bg py-20" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Quickbils</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-lg opacity-90">
                  To revolutionize the restaurant industry by making dining experiences seamless, 
                  efficient, and enjoyable for both customers and restaurant owners.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-lg opacity-90">
                  Empowering restaurants with cutting-edge technology that simplifies operations, 
                  reduces costs, and enhances customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Restaurant Empowerment</h3>
                <p className="text-lg opacity-90">
                  From small cafes to large restaurant chains, we provide scalable solutions 
                  that grow with your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`glassmorphism rounded-2xl p-8 transition-all duration-500 ${
                  currentTestimonial === index 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-50 scale-95'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <User className="text-[hsl(24,100%,66%)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white opacity-70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white opacity-90">{testimonial.content}</p>
              </div>
            ))}

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
