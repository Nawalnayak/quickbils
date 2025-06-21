import { QrCode, Utensils, ShoppingCart, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: "Scan QR Code",
      description: "Customers scan the QR code on their table to access the digital menu instantly"
    },
    {
      icon: Utensils,
      title: "Browse Menu",
      description: "Interactive digital menu with photos, descriptions, and real-time availability"
    },
    {
      icon: ShoppingCart,
      title: "Place Order",
      description: "Seamless ordering with customization options and special requests"
    },
    {
      icon: CreditCard,
      title: "Smart Payment",
      description: "Secure digital payments with UPI, cards, and automatic bill generation"
    }
  ];

  return (
    <section className="scroll-section bg-[hsl(220,13%,9%)] py-20 relative overflow-hidden" id="how-it-works">
      {/* Background Elements */}
      <div className="floating-blob" style={{
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255, 138, 86, 0.2) 0%, transparent 70%)',
        top: '20%',
        left: '80%',
        animationDelay: '1s'
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
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Simple steps to revolutionize your restaurant experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center mx-auto mb-6 glow-effect group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
