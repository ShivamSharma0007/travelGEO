import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Star, Wifi, Coffee, Car, Utensils } from 'lucide-react';

export function HotelBookings() {
  const categories = [
    {
      name: 'Budget Hotels',
      priceRange: '₹1,000 - ₹2,500/night',
      description: 'Clean, comfortable accommodations perfect for budget-conscious travelers',
      amenities: ['Clean rooms', 'Hot water', 'Basic WiFi', 'Room service'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop'
    },
    {
      name: 'Mid-Range Hotels',
      priceRange: '₹2,500 - ₹5,000/night',
      description: 'Quality hotels with excellent amenities and service',
      amenities: ['AC rooms', 'High-speed WiFi', 'Restaurant', 'Travel desk', 'Valley views'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    },
    {
      name: 'Luxury Resorts',
      priceRange: '₹5,000+/night',
      description: 'Premium properties offering world-class hospitality and facilities',
      amenities: ['Luxury suites', 'Spa & wellness', 'Fine dining', 'Concierge', 'Premium views'],
      image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=600&fit=crop'
    }
  ];

  const popularHotels = [
    { name: 'Oberoi Cecil, Shimla', category: 'Luxury', location: 'Chaura Maidan' },
    { name: 'Wildflower Hall', category: 'Luxury', location: 'Mashobra' },
    { name: 'Radisson Shimla', category: 'Mid-Range', location: 'Lakkar Bazaar' },
    { name: 'Hotel Combermere', category: 'Mid-Range', location: 'The Mall' },
    { name: 'Treebo Hotels', category: 'Budget', location: 'Various Locations' },
    { name: 'OYO Properties', category: 'Budget', location: 'Multiple Areas' }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Hotel Bookings
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From budget stays to luxury resorts, we help you find the perfect accommodation for your trip
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-900 text-xl mb-2">{category.name}</h3>
                <p className="text-blue-600 mb-3">{category.priceRange}</p>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6">View Options</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Hotels */}
        <div className="mb-16">
          <h2 className="text-gray-900 text-2xl mb-6">Popular Hotels We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularHotels.map((hotel, index) => (
              <Card key={index} className="p-4 border-0 shadow hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-gray-900 mb-1">{hotel.name}</h3>
                    <p className="text-sm text-gray-500">{hotel.location}</p>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {hotel.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Book With Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-gray-900 text-2xl mb-6 text-center">Why Book Hotels With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Best Rates</h3>
              <p className="text-gray-600 text-sm">Competitive prices with no hidden charges</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Verified Properties</h3>
              <p className="text-gray-600 text-sm">All hotels personally inspected by our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Transport Included</h3>
              <p className="text-gray-600 text-sm">Seamless hotel transfers with our vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Package Deals</h3>
              <p className="text-gray-600 text-sm">Combined hotel + transport packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
