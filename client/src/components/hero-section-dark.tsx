import { Button } from "@/components/ui/button";
import { Play, Rocket, QrCode, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroSectionDark() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="scroll-section gradient-bg relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="floating-blob floating-blob-1"></div>
      <div className="floating-blob floating-blob-2"></div>
      <div className="floating-blob floating-blob-3"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quickbils:<br/>
              <span className="text-[hsl(46,85%,58%)]">Scan. Order. Pay.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Smarter dining starts here. Transform your restaurant with our intelligent QR menu and billing system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="glassmorphism text-white px-8 py-4 rounded-full font-semibold glow-effect transition-all duration-300 border border-white/30 bg-transparent">
                <Play className="w-4 h-4 mr-2" />
                Try Demo
              </Button>
              <Button className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white px-8 py-4 rounded-full font-semibold glow-effect transition-all duration-300">
                <Rocket className="w-4 h-4 mr-2" />
                Join Now
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Interactive Animation */}
          <div className="relative flex justify-center">
            {/* Glowing Table Base */}
            <motion.div 
              className="absolute bottom-0 w-80 h-6 bg-gradient-to-r from-transparent via-[hsl(24,100%,66%)]/30 to-transparent rounded-full blur-lg"
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Central QR Code with Glow Ring */}
            <motion.div 
              className="relative z-20 glow-ring"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <div className="w-32 h-32 glassmorphism-card rounded-3xl p-4 animate-pulse-glow">
                <div className="w-full h-full bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-2xl flex items-center justify-center">
                  <QrCode className="text-white text-4xl w-16 h-16" />
                </div>
              </div>
            </motion.div>

            {/* Floating Mobile Phone - Animated Entry */}
            <motion.div 
              className="absolute"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: -120, opacity: 1 }}
              transition={{ 
                duration: 2,
                delay: 1,
                ease: "easeOut"
              }}
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <div className="w-48 h-72 bg-gray-900 rounded-3xl p-2 shadow-2xl glow-effect">
                <div className="w-full h-full glassmorphism-card rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
                    <div className="p-4">
                      {/* Phone Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-6 h-6 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center glow-effect">
                          <span className="text-white text-xs font-bold">Q</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Menu Animation States */}
                      <motion.div 
                        className="space-y-3"
                        animate={{
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="glassmorphism-card rounded-lg p-3">
                          <div className="w-full h-12 bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-md mb-2"></div>
                          <div className="h-2 bg-white/80 rounded w-3/4 mb-1"></div>
                          <div className="h-2 bg-white/60 rounded w-1/2"></div>
                        </div>
                        <div className="glassmorphism-card rounded-lg p-3">
                          <div className="w-full h-12 bg-gradient-to-r from-[hsl(32,100%,70%)] to-[hsl(46,85%,58%)] rounded-md mb-2"></div>
                          <div className="h-2 bg-white/80 rounded w-2/3 mb-1"></div>
                          <div className="h-2 bg-white/60 rounded w-1/3"></div>
                        </div>
                      </motion.div>

                      {/* Order Status */}
                      <motion.div 
                        className="mt-6 text-center"
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                          Order Placed ✓
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-8 -right-8"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-16 h-16 glassmorphism-card rounded-2xl flex items-center justify-center glow-effect">
                <Smartphone className="text-[hsl(24,100%,66%)] text-xl w-6 h-6" />
              </div>
            </motion.div>

            {/* Animated Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[hsl(24,100%,66%)] rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}