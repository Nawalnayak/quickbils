import { Button } from "@/components/ui/button";
import { Play, Rocket, QrCode, Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="scroll-section gradient-bg relative overflow-hidden">
      {/* Background 3D Waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white rounded-full animate-float opacity-25" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-60 left-1/2 w-16 h-16 bg-white rounded-full animate-float opacity-15" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full animate-float opacity-20" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quickbils:<br />
              <span className="text-[hsl(45,100%,96%)]">Scan. Order. Pay.</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
              Smarter dining starts here. Transform your restaurant with our intelligent QR menu and billing system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="glassmorphism text-white px-8 py-4 rounded-full font-semibold hover:animate-pulse-glow transition-all duration-300 border border-white/30 bg-transparent">
                <Play className="w-4 h-4 mr-2" />
                Try Demo
              </Button>
              <Button className="bg-white text-[hsl(24,100%,66%)] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                <Rocket className="w-4 h-4 mr-2" />
                Join Now
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Phone & QR */}
          <div className="relative flex justify-center">
            {/* Floating Phone */}
            <div className="relative animate-float">
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-8 h-8 bg-[hsl(24,100%,66%)] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">Q</span>
                        </div>
                        <Smartphone className="w-6 h-6 text-gray-400" />
                      </div>

                      {/* Menu Items */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-full h-16 bg-gray-200 rounded-lg mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="w-full h-16 bg-gray-200 rounded-lg mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating QR Code */}
            <div className="absolute -top-10 -right-10 animate-rotate-slow">
              <div className="w-24 h-24 bg-white rounded-2xl p-3 shadow-xl">
                <div className="w-full h-full bg-black opacity-80 rounded-lg flex items-center justify-center">
                  <QrCode className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
