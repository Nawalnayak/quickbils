import { Button } from "@/components/ui/button";
import { Check, Crown, Store, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Store,
      description: "Perfect for small cafes and restaurants",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      outlets: "1 outlet",
      color: "from-green-500 to-green-600",
      features: [
        "QR Menu System",
        "Basic Billing",
        "Order Management",
        "Customer Support",
        "Mobile App Access",
        "Basic Analytics"
      ]
    },
    {
      name: "Pro",
      icon: Crown,
      description: "Ideal for growing restaurant chains",
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      outlets: "3 outlets",
      color: "from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)]",
      popular: true,
      features: [
        "Everything in Starter",
        "Menu Builder",
        "Advanced Analytics",
        "Staff Management",
        "Inventory Tracking",
        "Multi-outlet Support",
        "Custom Branding",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      icon: Building,
      description: "For large restaurant chains and enterprises",
      monthlyPrice: 3999,
      yearlyPrice: 39990,
      outlets: "Unlimited outlets",
      color: "from-purple-500 to-purple-600",
      features: [
        "Everything in Pro",
        "GST Invoicing",
        "Advanced Reporting",
        "API Access",
        "White Label Solution",
        "Dedicated Support",
        "Custom Integrations",
        "Enterprise Security"
      ]
    }
  ];

  return (
    <section className="scroll-section bg-gradient-to-br from-[hsl(220,13%,9%)] to-[hsl(220,13%,12%)] py-20 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="floating-blob" style={{
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(255, 178, 102, 0.15) 0%, transparent 70%)',
        top: '30%',
        right: '10%',
        animationDelay: '2s'
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your restaurant's needs
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center glassmorphism-card rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? 'bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly 
                  ? 'bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? 'year' : 'month';
            
            return (
              <motion.div
                key={index}
                className={`relative glassmorphism-card rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-[hsl(24,100%,66%)] ring-opacity-50' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 glow-effect`}>
                    <IconComponent className="text-white text-2xl w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">₹{price.toLocaleString()}</span>
                    <span className="text-white/60">/{period}</span>
                  </div>
                  <p className="text-[hsl(24,100%,66%)] font-medium">{plan.outlets}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4,
                        delay: (index * 0.1) + (featureIndex * 0.05)
                      }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-[hsl(24,100%,66%)] mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white glow-effect'
                      : 'glassmorphism-card text-white border border-white/20 hover:border-[hsl(24,100%,66%)]'
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-4">
            Need a custom solution? Contact our sales team for enterprise pricing.
          </p>
          <Button 
            variant="outline" 
            className="glassmorphism-card text-white border-white/20 hover:border-[hsl(24,100%,66%)] px-8 py-3 rounded-full"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}