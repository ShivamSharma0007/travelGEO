import { useState } from 'react';
import { Card } from './ui/card';
import { Car, Hotel, Map, Mountain, Users, Compass } from 'lucide-react';
import { ServiceModal } from './ServiceModal';

const services = [
  {
    icon: Car,
    title: 'Luxury Fleet',
    description: 'Travel in comfort with our premium cabs, SUVs, and tempo travellers - perfect for individuals and groups'
  },

  // ⬇️ Added Below Luxury Fleet (your requirement)
  {
    icon: Hotel,
    title: 'Hotel Bookings',
    description: 'Handpicked accommodations from cozy homestays to luxury resorts across Himachal Pradesh'
  },
  {
    icon: Users,
    title: 'Group Packages',
    description: 'Customized tour packages for families, corporate outings, and adventure groups'
  },

  // ⬇️ Your remaining original services
  {
    icon: Map,
    title: 'City Tours',
    description: 'Explore Shimla\'s heritage sites, Mall Road, and scenic viewpoints with our expert local guides'
  },
  {
    icon: Mountain,
    title: 'Hill Station Tours',
    description: 'Venture beyond Shimla to Manali, Kullu, Kasauli, and other breathtaking Himalayan destinations'
  },
  {
    icon: Compass,
    title: '4x4 Expeditions',
    description: 'Off-road adventures to remote Himalayan destinations with our rugged 4x4 vehicles and expert drivers'
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete travel solutions for your Himachal adventure - from transport to accommodation and thrilling activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  onClick={() => handleLearnMore(service)}
                  className="text-[#6B8E23] hover:text-[#556B2F] transition-colors"
                >
                  Learn More →
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
