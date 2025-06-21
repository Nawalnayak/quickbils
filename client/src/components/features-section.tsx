import { Crown, Store, Smartphone, Users, Check } from "lucide-react";

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
    <section className="scroll-section bg-gradient-to-br from-[hsl(45,100%,96%)] to-white py-20" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,24%,16%)] mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run a modern restaurant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="glassmorphism rounded-2xl p-8 card-hover cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(210,24%,16%)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[hsl(24,100%,66%)] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
