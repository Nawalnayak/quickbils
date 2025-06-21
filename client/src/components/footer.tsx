import { Logo } from "./logo";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[hsl(220,13%,6%)] text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-blob" style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 138, 86, 0.1) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          animationDelay: '2s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo showText={true} className="mb-6" />
            <p className="text-white/60 mb-6">
              Smart restaurant billing and QR menu platform for modern dining experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#features" className="hover:text-[hsl(24,100%,66%)] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[hsl(24,100%,66%)] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">API Documentation</a></li>
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Training</a></li>
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-white/60">
              <li><a href="#about" className="hover:text-[hsl(24,100%,66%)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,66%)] transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60">
            &copy; 2024 Quickbils. All rights reserved. Made with love for restaurants worldwide.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
