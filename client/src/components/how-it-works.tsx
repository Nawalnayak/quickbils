import { QrCode, Utensils, ShoppingCart, CreditCard } from "lucide-react";

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
    <section className="scroll-section bg-white py-20" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,24%,16%)] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to revolutionize your restaurant experience
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(210,24%,16%)] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
