import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="scroll-section gradient-bg py-20 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="floating-blob floating-blob-1"></div>
      <div className="floating-blob floating-blob-2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Quickbils</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-lg text-white/80">
                  To revolutionize the restaurant industry by making dining experiences seamless, 
                  efficient, and enjoyable for both customers and restaurant owners.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-lg text-white/80">
                  Empowering restaurants with cutting-edge technology that simplifies operations, 
                  reduces costs, and enhances customer satisfaction.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-3">Restaurant Empowerment</h3>
                <p className="text-lg text-white/80">
                  From small cafes to large restaurant chains, we provide scalable solutions 
                  that grow with your business.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Testimonials */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className={`glassmorphism-card rounded-2xl p-8 transition-all duration-500 ${
                  currentTestimonial === index 
                    ? 'opacity-100 scale-100 glow-effect' 
                    : 'opacity-50 scale-95'
                }`}
                animate={{
                  scale: currentTestimonial === index ? 1 : 0.95,
                  opacity: currentTestimonial === index ? 1 : 0.5
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center mr-4 glow-effect">
                    <User className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/90">{testimonial.content}</p>
              </motion.div>
            ))}

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-[hsl(24,100%,66%)] glow-effect' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
