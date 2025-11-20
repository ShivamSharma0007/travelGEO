import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Clock, Star } from 'lucide-react';

export function CityTours() {
  const tours = [
    {
      name: 'Shimla Heritage Walk',
      duration: '4-5 Hours',
      places: ['Mall Road', 'Christ Church', 'Ridge', 'Scandal Point', 'Gaiety Theatre'],
      description: 'Explore the colonial heritage of Shimla with our guided walking tour through the historic town center.',
      image: 'https://images.unsplash.com/photo-1680965982416-bec3aa2bed43?w=800&h=600&fit=crop',
      price: '₹1,500/person'
    },
    {
      name: 'Shimla Temple Circuit',
      duration: '6-7 Hours',
      places: ['Jakhoo Temple', 'Tara Devi Temple', 'Sankat Mochan Temple', 'Kali Bari Temple'],
      description: 'Visit the sacred temples of Shimla and experience the spiritual side of the Queen of Hills.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
      price: '₹2,500/vehicle'
    },
    {
      name: 'Shimla Complete Day Tour',
      duration: '8-10 Hours',
      places: ['Kufri', 'Green Valley', 'Fagu', 'Wildflower Hall', 'Summer Hill'],
      description: 'Comprehensive tour covering all major attractions in and around Shimla.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop',
      price: '₹3,500/vehicle'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Shimla City Tours
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the charm of Shimla with our expertly curated city tours led by local guides
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={tour.image} 
                alt={tour.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-900 text-xl mb-3">{tour.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">{tour.duration}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{tour.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-900 mb-2">Places Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {tour.places.map((place, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-xl text-blue-600">{tour.price}</p>
                  </div>
                  <Button>Book Tour</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Tours Section */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-gray-900 text-2xl mb-4">Need a Custom Tour?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We can create personalized itineraries based on your interests, time, and preferences. 
            Contact us to plan your perfect Shimla experience.
          </p>
          <Button size="lg">Request Custom Tour</Button>
        </div>
      </div>
    </div>
  );
}
