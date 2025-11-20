import { Button } from './ui/button';
import { Search } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Replace this URL with your actual Shimla snowing GIF */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)',
            // Replace the above URL with your Shimla snowing GIF URL
            // Example: backgroundImage: 'url(/path/to/shimla-snowing.gif)'
          }}
        >
          {/* Fallback image for when GIF is loading */}
          <img 
            src="https://images.unsplash.com/photo-1684823930343-26a531403928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjEyODg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Shimla Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-white text-5xl md:text-7xl">
            Explore the Adventures with TravelGeographic
          </h1>
          <p className="text-white/90 text-xl md:text-2xl">
            Your trusted travel partner in Shimla. Experience luxury travel with our fleet of premium cabs, SUVs, and tempo travellers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={scrollToContact} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Search className="w-5 h-5 mr-2" />
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
