import { Button } from "@/components/ui/button";
import { UserPlus, Calendar, QrCode, Smartphone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="scroll-section bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-[hsl(210,24%,16%)] mb-8">
            Bring Speed & Simplicity<br/>
            <span className="text-[hsl(24,100%,66%)]">to Your Restaurant</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of restaurants already using Quickbils to enhance their operations and customer experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300">
              <UserPlus className="w-5 h-5 mr-3" />
              Register for Free
            </Button>
            <Button 
              variant="outline"
              className="glassmorphism text-[hsl(210,24%,16%)] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 border-[hsl(24,100%,66%)]"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Live Demo
            </Button>
          </div>

          {/* Animated Elements */}
          <div className="relative flex justify-center items-center">
            <div className="animate-float">
              {/* Modern smartphone with QR scanning interface */}
              <div className="w-48 h-72 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
                    <div className="p-4">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">Q</span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">
                          Welcome to Quickbils
                        </h3>
                        <p className="text-xs text-gray-600">
                          Scan. Order. Pay.
                        </p>
                      </div>

                      {/* QR Scanner Frame */}
                      <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <div className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                          <QrCode className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-gray-600">
                          Ready to scan menu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating QR Code */}
            <div className="absolute -top-8 -right-8 animate-rotate-slow">
              <div className="w-20 h-20 bg-[hsl(24,100%,66%)] rounded-2xl flex items-center justify-center shadow-xl">
                <QrCode className="text-white text-2xl w-8 h-8" />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -left-8 top-4 animate-float opacity-20" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-[hsl(32,100%,70%)] rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
