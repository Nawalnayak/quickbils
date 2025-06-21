import { Receipt } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(24,100%,66%)] to-[hsl(32,100%,70%)]" />
        
        {/* Rounded Q with floating bill icon */}
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-white font-bold text-xl">Q</span>
          <Receipt className="absolute -top-1 -right-1 w-3 h-3 text-white opacity-80" />
        </div>
      </div>
      {showText && (
        <span className="text-2xl font-bold text-[hsl(210,24%,16%)]">Quickbils</span>
      )}
    </div>
  );
}
