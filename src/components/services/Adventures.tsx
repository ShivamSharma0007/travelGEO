import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Mountain, Waves, Wind, Snowflake, Bike, Camera } from 'lucide-react';

export function Adventures() {
  const activities = [
    {
      name: 'Trekking & Hiking',
      icon: Mountain,
      difficulty: 'Easy to Extreme',
      season: 'March to November',
      description: 'Explore scenic trails from easy nature walks to challenging mountain treks',
      popular: ['Triund Trek', 'Kheerganga', 'Hampta Pass', 'Pin Parvati'],
      image: 'https://images.unsplash.com/photo-1753605859456-1096e0f15d26?w=800&h=600&fit=crop',
      price: '₹1,500 - ₹15,000'
    },
    {
      name: 'River Rafting',
      icon: Waves,
      difficulty: 'Moderate to High',
      season: 'April to June',
      description: 'Experience the thrill of white water rafting in Kullu-Manali region',
      popular: ['Beas River', 'Satluj River', 'Chandra River'],
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      price: '₹800 - ₹2,500'
    },
    {
      name: 'Paragliding',
      icon: Wind,
      difficulty: 'Beginner Friendly',
      season: 'March to November',
      description: 'Soar through the skies with tandem paragliding at Bir-Billing and Solang',
      popular: ['Bir-Billing', 'Solang Valley', 'Dharamshala'],
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop',
      price: '₹2,500 - ₹4,000'
    },
    {
      name: 'Skiing & Snowboarding',
      icon: Snowflake,
      difficulty: 'Beginner to Advanced',
      season: 'December to February',
      description: 'Hit the slopes at premier skiing destinations in Himachal',
      popular: ['Solang Valley', 'Kufri', 'Narkanda'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      price: '₹1,500 - ₹5,000'
    },
    {
      name: 'Mountain Biking',
      icon: Bike,
      difficulty: 'Moderate to High',
      season: 'April to October',
      description: 'Challenging trails and scenic routes for cycling enthusiasts',
      popular: ['Manali-Leh Highway', 'Spiti Circuit', 'Shimla Trails'],
      image: 'https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?w=800&h=600&fit=crop',
      price: '₹2,000 - ₹25,000'
    },
    {
      name: 'Wildlife Photography',
      icon: Camera,
      difficulty: 'Easy',
      season: 'Year Round',
      description: 'Capture the incredible biodiversity of Himalayan wildlife',
      popular: ['Great Himalayan National Park', 'Pin Valley', 'Kibber'],
      image: 'https://images.unsplash.com/photo-1664270734194-256bbb732959?w=800&h=600&fit=crop',
      price: '₹3,000 - ₹10,000'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Adventure Activities
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the thrill of the Himalayas with our curated adventure packages
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl mb-2">{activity.name}</h3>
                  
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span>🎯 {activity.difficulty}</span>
                    <span>📅 {activity.season}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{activity.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-900 mb-2">Popular Spots:</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.popular.map((spot, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-lg text-blue-600">{activity.price}</p>
                    </div>
                    <Button>Book Now</Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Safety Information */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
          <h3 className="text-gray-900 mb-2">Safety First</h3>
          <p className="text-gray-700 text-sm">
            All our adventure activities are conducted with certified instructors and proper safety equipment. 
            We follow strict safety protocols and provide comprehensive briefings before each activity.
          </p>
        </div>

        {/* Custom Adventures */}
        <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl mb-4">Looking for Something Different?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            We can arrange custom adventure packages combining multiple activities, 
            accommodation, and transport for the ultimate Himalayan experience.
          </p>
          <Button size="lg" variant="secondary">Plan Custom Adventure</Button>
        </div>
      </div>
    </div>
  );
}
