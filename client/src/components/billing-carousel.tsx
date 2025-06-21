import { useState, useEffect } from "react";

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
    <section className="scroll-section bg-gradient-to-br from-white to-[hsl(45,100%,96%)] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,24%,16%)] mb-6">
            Smart Billing System
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate smart bills in seconds with GST compliance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {invoiceTypes.map((invoice, index) => (
            <div 
              key={index} 
              className={`glassmorphism rounded-2xl p-6 transition-all duration-500 ${
                currentSlide === index ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                {/* Invoice Preview */}
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg">Restaurant Name</h4>
                      <p className="text-sm text-gray-600">Invoice #QB-2024-001</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>Date: {new Date().toLocaleDateString()}</p>
                      <p>Time: {new Date().toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Butter Chicken x2</span>
                    <span>₹480.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Naan x3</span>
                    <span>₹120.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lassi x2</span>
                    <span>₹100.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t pt-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>₹700.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>GST (5%):</span>
                    <span>₹35.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹735.00</span>
                  </div>
                </div>

                {/* QR Code placeholder for UPI type */}
                {index === 1 && (
                  <div className="mt-4 pt-4 border-t text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs">QR</span>
                    </div>
                    <p className="text-xs text-gray-600">Scan to Pay</p>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-[hsl(210,24%,16%)] mb-2">
                  {invoice.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {invoice.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {invoice.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-[hsl(24,100%,66%)]/10 text-[hsl(24,100%,66%)] px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                  ? 'bg-[hsl(24,100%,66%)] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
