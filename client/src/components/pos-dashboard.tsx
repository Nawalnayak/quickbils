import { BarChart3, Table, Receipt } from "lucide-react";
import { motion } from "framer-motion";

export function PosDashboard() {
  return (
    <section className="scroll-section bg-[hsl(220,13%,9%)] py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-blob floating-blob-3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Restaurant Dashboard
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Track every order. Print every bill. Manage everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Laptop Dashboard */}
            <div className="glassmorphism-card rounded-2xl p-4 glow-effect">
              <div className="bg-[hsl(220,13%,15%)] rounded-xl overflow-hidden">
                <div className="bg-[hsl(220,13%,12%)] p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Dashboard</h3>
                    <div className="flex space-x-4">
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm glassmorphism">
                        Active: 24
                      </div>
                      <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm glassmorphism">
                        Revenue: ₹45,680
                      </div>
                    </div>
                  </div>

                  {/* Table Grid */}
                  <div className="grid grid-cols-6 gap-3 mb-6">
                    {Array.from({ length: 18 }, (_, i) => (
                      <motion.div
                        key={i}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center text-sm font-medium glassmorphism-card
                          ${i % 4 === 0 ? 'bg-green-500/20 text-green-400' : 
                            i % 4 === 1 ? 'bg-blue-500/20 text-blue-400' : 
                            i % 4 === 2 ? 'bg-yellow-500/20 text-yellow-400' : 
                            'bg-white/5 text-white/60'}
                        `}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        T{i + 1}
                      </motion.div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div className="glassmorphism-card rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-white">Recent Orders</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/80">Table 12 - Order #1234</span>
                        <span className="text-green-400">₹850</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/80">Table 5 - Order #1235</span>
                        <span className="text-green-400">₹1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile View */}
            <motion.div 
              className="absolute -bottom-8 -right-8"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-48 bg-gray-900 rounded-2xl p-1 shadow-xl glow-effect">
                <div className="w-full h-full glassmorphism-card rounded-xl overflow-hidden">
                  <div className="p-3">
                    <div className="text-xs font-semibold mb-2 text-white">Staff App</div>
                    <div className="space-y-2">
                      <div className="bg-red-500/20 text-red-400 p-2 rounded text-xs glassmorphism">
                        New Order: T15
                      </div>
                      <div className="bg-yellow-500/20 text-yellow-400 p-2 rounded text-xs glassmorphism">
                        Ready: T8
                      </div>
                      <div className="bg-green-500/20 text-green-400 p-2 rounded text-xs glassmorphism">
                        Served: T12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Features */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Complete Restaurant Management</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect">
                  <BarChart3 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
                  <p className="text-white/70">Monitor sales, popular items, and customer patterns in real-time</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect">
                  <Table className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Table Management</h4>
                  <p className="text-white/70">Visual table layout with order status and occupancy tracking</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center glow-effect">
                  <Receipt className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Smart Billing</h4>
                  <p className="text-white/70">Automated GST calculations and professional invoice generation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
