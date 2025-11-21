'use client';

import { Button } from './ui/button';
import { Search } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'ur[](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1684823930343-26a531403928?w=1920&q=80"
            alt="Shimla Landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Explore the Adventures with<br className="hidden sm:block" />
            <span className="text-cyan-300">TravelGeographic</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted travel partner in Shimla. Experience luxury travel with our fleet of premium cabs, SUVs, and tempo travellers
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            {/* Start Your Journey – exactly your original style */}
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-xl"
            >
              Start Your Journey
            </Button>

            {/* Explore Destinations – 100% original style + correct scroll */}
            <Button
              onClick={scrollToDestinations}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold backdrop-blur-sm"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator – unchanged */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}