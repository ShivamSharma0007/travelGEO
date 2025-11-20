import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Car, Users, Package, Shield, Check } from 'lucide-react';

export function LuxuryFleet() {
  const vehicles = [
    {
      name: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      capacity: '4 Passengers + Driver',
      luggage: '2-3 Bags',
      ideal: 'Couples, Small families',
      features: ['AC', 'Comfortable seats', 'Music system', 'GPS navigation'],
      priceRange: '₹2,000 - ₹3,500/day'
    },
    {
      name: 'Premium SUV',
      image: 'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?w=800&h=600&fit=crop',
      capacity: '6-7 Passengers + Driver',
      luggage: '4-5 Bags',
      ideal: 'Families, Small groups',
      features: ['4x4 capability', 'Spacious interior', 'Premium comfort', 'Mountain ready'],
      priceRange: '₹4,000 - ₹6,000/day'
    },
    {
      name: 'Tempo Traveller',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      capacity: '12-17 Passengers + Driver',
      luggage: '10+ Bags',
      ideal: 'Large groups, Corporate outings',
      features: ['Push-back seats', 'Entertainment system', 'Ample space', 'Group travel comfort'],
      priceRange: '₹7,000 - ₹10,000/day'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Our Luxury Fleet
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our well-maintained fleet of premium vehicles, perfect for your Himachal adventure
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-900 text-2xl mb-4">{vehicle.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="w-5 h-5 text-blue-600" />
                    <span>{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Ideal for: {vehicle.ideal}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2">Features:</p>
                  <ul className="space-y-1">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-2xl text-blue-600 mb-4">{vehicle.priceRange}</p>
                  <Button className="w-full">Book This Vehicle</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-gray-900 text-2xl mb-6">Why Choose Our Fleet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-gray-900 mb-2">Well Maintained</h3>
              <p className="text-gray-600 text-sm">Regular servicing and quality checks ensure safe travels</p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">Experienced Drivers</h3>
              <p className="text-gray-600 text-sm">Professional drivers with mountain driving expertise</p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden charges, all-inclusive rates</p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance during your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
