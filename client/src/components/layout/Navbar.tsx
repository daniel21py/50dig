import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chi Siamo", href: "/#about" },
    { label: "Servizi", href: "/#services" },
    { label: "Prenota", href: "/#calendar" },
    { label: "Contatti", href: "/#contact" }
  ];

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 z-50 border-b border-[#7FFF00]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-xl font-bold text-[#7FFF00]">Soluzioni AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#7FFF00] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact">
              <Button className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90">
                Inizia Ora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-[#7FFF00]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-white/80 hover:text-[#7FFF00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4 bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90">
                Inizia Ora
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}