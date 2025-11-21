import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-lg flex items-center justify-center">
                <span className="text-white">🏔</span>
              </div>
              <span>TravelGeographic</span>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Your trusted travel partner in Shimla. Luxury vehicles, expert guides, and unforgettable Himalayan experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1A2zNsSYMz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6B8E23] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/travelgeographic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6B8E23] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about-us" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Our Fleet</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Cabs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SUVs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tempo Traveller</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hotel Bookings</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">4x4 Expeditions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2025 TravelGeographic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
