import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-lg flex items-center justify-center">
              <span className="text-white">🏔</span>
            </div>
            <span className="text-gray-900">TravelGeographic</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('destinations')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              Destinations
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              Reviews
            </button>

            {/* BLOG PAGE LINK */}
            <button onClick={() => scrollToSection('blog')} className="text-gray-600 hover:text-[#6B8E23] transition-colors font-semibold">
              Blog
            </button>

            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#6B8E23] transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 9218009211</span>
            </div>
            <Button onClick={() => scrollToSection('contact')}>Book Now</Button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3 font-semibold">
            <button onClick={() => scrollToSection('home')} className="py-2">Home</button>
            <button onClick={() => scrollToSection('destinations')} className="py-2">Destinations</button>
            <button onClick={() => scrollToSection('services')} className="py-2">Services</button>
            <button onClick={() => scrollToSection('about')} className="py-2">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="py-2">Reviews</button>
            <button onClick={() => scrollToSection('blog')} className="py-2">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="py-2">Contact</button>

            <div className="flex items-center gap-2 text-gray-600 py-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </div>

            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
