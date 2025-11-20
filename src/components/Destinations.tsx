import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Users } from 'lucide-react';
import { DestinationModal } from './DestinationModal';

const destinations = [
  {
    id: 1,
    title: 'Shimla City Tour',
    location: 'Shimla, HP',
    image: 'https://images.unsplash.com/photo-1680965982416-bec3aa2bed43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGltbGElMjBtYWxsJTIwcm9hZHxlbnwxfHx8fDE3NjEyODg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹2,999',
    duration: '1-2 Days',
    groupSize: '1-7 People',
    tag: 'Popular'
  },
  {
    id: 2,
    title: 'Manali Adventure',
    location: 'Manali, HP',
    image: 'https://images.unsplash.com/photo-1565610468500-adc61f362be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hbGklMjBoaW1hY2hhbHxlbnwxfHx8fDE3NjEyODg0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹8,999',
    duration: '3-4 Days',
    groupSize: '1-12 People',
    tag: 'Adventure'
  },
  {
    id: 3,
    title: 'Kullu Valley Escape',
    location: 'Kullu, HP',
    image: 'https://images.unsplash.com/photo-1690123725232-e9ea6c0feff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWxsdSUyMHZhbGxleXxlbnwxfHx8fDE3NjEyODg0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹7,499',
    duration: '2-3 Days',
    groupSize: '1-10 People',
    tag: 'Nature'
  },
  {
    id: 4,
    title: 'Dharamshala Spiritual',
    location: 'Dharamshala, HP',
    image: 'https://images.unsplash.com/photo-1680505303171-992ef799db43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaGFyYW1zaGFsYSUyMHRlbXBsZXxlbnwxfHx8fDE3NjEyODg0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹9,999',
    duration: '3-4 Days',
    groupSize: '1-8 People',
    tag: 'Cultural'
  },
  {
    id: 5,
    title: 'Spiti Valley Expedition',
    location: 'Spiti, HP',
    image: 'https://images.unsplash.com/photo-1684823930343-26a531403928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjEyODg0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹24,999',
    duration: '7-10 Days',
    groupSize: '4-12 People',
    tag: 'Adventure'
  },
  {
    id: 6,
    title: 'Kasauli Weekend',
    location: 'Kasauli, HP',
    image: 'https://images.unsplash.com/photo-1649594540637-837ba4901b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXNhdWxpJTIwaGlsbHN0YXRpb258ZW58MXx8fHwxNzYxMjg4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹4,999',
    duration: '1-2 Days',
    groupSize: '1-7 People',
    tag: 'Relaxation'
  }
];

export function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (destination: typeof destinations[0]) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the beauty of India with our best value for money packages and luxury transportation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-900">{destination.tag}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-gray-900 text-xl mb-4">{destination.title}</h3>
                
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <div className="text-[#6B8E23] text-2xl">{destination.price}</div>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(destination)}
                    className="text-[#6B8E23] hover:text-[#556B2F] transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <DestinationModal 
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
