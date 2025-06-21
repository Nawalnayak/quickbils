import { Crown, Store, Smartphone, Users, Check } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: Crown,
      title: "Super Admin",
      description: "Manage multiple outlets, users, and comprehensive analytics from one dashboard",
      color: "from-purple-500 to-purple-600",
      items: [
        "Multi-outlet management",
        "Advanced analytics",
        "User role management"
      ]
    },
    {
      icon: Store,
      title: "Restaurant Admin",
      description: "Complete billing system with KOT management and order flow control",
      color: "from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)]",
      items: [
        "Billing & invoicing",
        "KOT management",
        "Order tracking"
      ]
    },
    {
      icon: Smartphone,
      title: "Staff App",
      description: "Mobile and tablet POS system for seamless order management",
      color: "from-green-500 to-green-600",
      items: [
        "Mobile POS",
        "Order notifications",
        "Table management"
      ]
    },
    {
      icon: Users,
      title: "Guest Experience",
      description: "Scan and pay experience with no app installation required",
      color: "from-blue-500 to-blue-600",
      items: [
        "No app required",
        "Instant access",
        "Secure payments"
      ]
    }
  ];

  return (
    <section className="scroll-section bg-gradient-to-br from-[hsl(220,13%,12%)] to-[hsl(220,13%,9%)] py-20 relative overflow-hidden" id="features">
      {/* Floating Background Elements */}
      <div className="floating-blob floating-blob-1"></div>
      <div className="floating-blob floating-blob-2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to run a modern restaurant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="glassmorphism-card rounded-2xl p-8 card-hover cursor-pointer glow-effect"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 10
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 glow-effect`}>
                  <IconComponent className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6">
                  {feature.description}
                </p>
                <ul className="text-sm text-white/60 space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[hsl(24,100%,66%)] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
