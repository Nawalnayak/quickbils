import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function BillingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const invoiceTypes = [
    {
      title: "GST Compliant",
      description: "Professional invoices with automatic GST calculations and compliance",
      features: ["GST Details", "HSN Codes", "Tax Breakdown", "Professional Format"]
    },
    {
      title: "UPI Integrated",
      description: "Seamless payment integration with UPI QR codes on every bill",
      features: ["UPI QR Code", "Multiple Payment Options", "Instant Verification", "Digital Receipts"]
    },
    {
      title: "Digital Ready",
      description: "Modern digital receipts with itemized billing and customer details",
      features: ["Digital Format", "Itemized Billing", "Customer Database", "Email Integration"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % invoiceTypes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="scroll-section bg-gradient-to-br from-[hsl(220,13%,12%)] to-[hsl(220,13%,9%)] py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-blob" style={{
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 202, 147, 0.1) 0%, transparent 70%)',
        top: '10%',
        left: '70%',
        animationDelay: '3s'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Billing System
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Generate smart bills in seconds with GST compliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {invoiceTypes.map((invoice, index) => (
            <motion.div 
              key={index} 
              className={`glassmorphism-card rounded-2xl p-6 transition-all duration-500 ${
                currentSlide === index ? 'scale-105 glow-effect' : 'hover:glow-effect'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="glassmorphism rounded-xl p-6 mb-4">
                {/* Invoice Preview */}
                <div className="border-b border-white/10 pb-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-white">Restaurant Name</h4>
                      <p className="text-sm text-white/60">Invoice #QB-2024-001</p>
                    </div>
                    <div className="text-right text-sm text-white/60">
                      <p>Date: {new Date().toLocaleDateString()}</p>
                      <p>Time: {new Date().toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Butter Chicken x2</span>
                    <span>₹480.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Naan x3</span>
                    <span>₹120.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Lassi x2</span>
                    <span>₹100.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-white/10 pt-2">
                  <div className="flex justify-between text-sm text-white/80">
                    <span>Subtotal:</span>
                    <span>₹700.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/80">
                    <span>GST (5%):</span>
                    <span>₹35.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-white">
                    <span>Total:</span>
                    <span>₹735.00</span>
                  </div>
                </div>

                {/* QR Code placeholder for UPI type */}
                {index === 1 && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <div className="w-16 h-16 glassmorphism-card rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs text-[hsl(24,100%,66%)]">QR</span>
                    </div>
                    <p className="text-xs text-white/60">Scan to Pay</p>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {invoice.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm">
                  {invoice.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {invoice.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-[hsl(24,100%,66%)]/20 text-[hsl(24,100%,66%)] px-2 py-1 rounded-full text-xs glassmorphism"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {invoiceTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-[hsl(24,100%,66%)] scale-125 glow-effect' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
