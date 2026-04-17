import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
            >
              About
            </a>
            <Button className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white px-6 py-2 rounded-full glow-effect transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#features"
                className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-[hsl(24,100%,66%)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button className="bg-gradient-to-r from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)] text-white rounded-full w-full glow-effect">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
