import { Button } from "@/components/ui/button";
import { UserPlus, Calendar, QrCode, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="scroll-section bg-[hsl(220,13%,9%)] py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-blob" style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 138, 86, 0.2) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animationDelay: '0s'
      }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Bring Speed & Simplicity<br/>
              <span className="text-[hsl(24,100%,66%)]">to Your Restaurant</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join thousands of restaurants already using Quickbils to enhance their operations and customer experience.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white px-10 py-4 rounded-full text-lg font-semibold glow-effect transition-all duration-300">
              <UserPlus className="w-5 h-5 mr-3" />
              Register for Free
            </Button>
            <Button 
              variant="outline"
              className="glassmorphism-card text-white px-10 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-[hsl(24,100%,66%)] transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Live Demo
            </Button>
          </motion.div>

          {/* Animated Elements */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glow-ring"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Modern smartphone with QR scanning interface */}
              <div className="w-48 h-72 bg-gray-900 rounded-3xl p-2 shadow-2xl glow-effect">
                <div className="w-full h-full glassmorphism-card rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,13%,15%)] to-[hsl(220,13%,12%)]">
                    <div className="p-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect">
                          <span className="text-white text-sm font-bold">Q</span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-sm font-semibold text-white mb-2">
                          Welcome to Quickbils
                        </h3>
                        <p className="text-xs text-white/70">
                          Scan. Order. Pay.
                        </p>
                      </div>

                      {/* QR Scanner Frame */}
                      <div className="glassmorphism rounded-lg p-4 mb-4">
                        <div className="w-full h-24 border-2 border-dashed border-[hsl(24,100%,66%)]/50 rounded-lg flex items-center justify-center">
                          <QrCode className="w-8 h-8 text-[hsl(24,100%,66%)]" />
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-white/60">
                          Ready to scan menu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rotating QR Code */}
            <motion.div 
              className="absolute -top-8 -right-8 glow-ring"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-2xl flex items-center justify-center glow-effect">
                <QrCode className="text-white text-2xl w-8 h-8" />
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -left-8 top-4"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(32,100%,70%)] to-[hsl(46,85%,58%)] rounded-full flex items-center justify-center glow-effect">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* Additional floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[hsl(24,100%,66%)] rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
