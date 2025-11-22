import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Calendar, Users, Star, Check } from 'lucide-react';

interface DestinationModalProps {
  destination: {
    id: number;
    title: string;
    location: string;
    image: string;
    price: string;
    duration: string;
    groupSize: string;
    tag: string;
    description?: string;
    highlights?: string[];
    included?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const destinationDetails: { [key: number]: { description: string; highlights: string[]; included: string[] } } = {
  1: {
    description: 'Experience the colonial charm of Shimla, the Queen of Hill Stations. Walk through the historic Mall Road, visit the iconic Christ Church, and enjoy panoramic views from Jakhoo Temple.',
    highlights: [
      'Mall Road shopping and leisure walk',
      'Christ Church - Gothic architecture marvel',
      'Jakhoo Temple with Hanuman statue',
      'Ridge - Town center with stunning views',
      'Viceregal Lodge - Colonial heritage site'
    ],
    included: [
      'Luxury cab/SUV for entire tour',
      'Professional driver with local knowledge',
      'Parking and toll charges',
      'Hotel pickup and drop (within Shimla)',
      'Fuel charges'
    ]
  },
  2: {
    description: 'Discover the adventure capital of Himachal Pradesh. Manali offers everything from serene valleys to thrilling adventure sports, making it perfect for all types of travelers.',
    highlights: [
      'Solang Valley - Adventure sports hub',
      'Rohtang Pass - Snow paradise (seasonal)',
      'Hadimba Temple - Ancient cave temple',
      'Old Manali - Cafes and culture',
      'Vashisht Hot Springs - Natural therapy'
    ],
    included: [
      'Comfortable SUV/Tempo Traveller',
      'Experienced mountain driver',
      'All transportation costs',
      'Hotel transfers',
      'Permit assistance for Rohtang Pass'
    ]
  },
  3: {
    description: 'Explore the lush green Kullu Valley, known for its scenic beauty, adventure activities, and pleasant climate throughout the year.',
    highlights: [
      'Raghunath Temple - Ancient spiritual site',
      'Great Himalayan National Park',
      'River rafting in Beas River',
      'Bijli Mahadev Temple trek',
      'Local market shopping'
    ],
    included: [
      'Premium vehicle of choice',
      'Expert local guide',
      'Transportation and fuel',
      'Parking fees',
      'Hotel connectivity'
    ]
  },
  4: {
    description: 'Visit the spiritual home of His Holiness the Dalai Lama. Dharamshala offers a unique blend of Tibetan culture, spiritual serenity, and natural beauty.',
    highlights: [
      'Tsuglagkhang Complex - Dalai Lama Temple',
      'McLeod Ganj - Little Lhasa',
      'Bhagsu Waterfall and temple',
      'Norbulingka Institute - Tibetan culture',
      'Kangra Fort - Historical marvel'
    ],
    included: [
      'Comfortable travel vehicle',
      'Knowledgeable driver-guide',
      'All travel expenses',
      'Pick-up and drop service',
      'Toll and parking charges'
    ]
  },
  5: {
    description: 'Embark on an unforgettable journey to the trans-Himalayan desert. Spiti Valley offers otherworldly landscapes, ancient monasteries, and unique cultural experiences.',
    highlights: [
      'Key Monastery - Largest in Spiti',
      'Chandratal Lake - Moon Lake',
      'Kaza - Valley headquarters',
      'Pin Valley National Park',
      'Ancient villages: Kibber, Langza, Hikkim'
    ],
    included: [
      'Sturdy SUV/Tempo Traveller for rough terrain',
      'Expert mountain driver',
      'Complete fuel and transport costs',
      'Inner line permits',
      'Accommodation assistance'
    ]
  },
  6: {
    description: 'Escape to the tranquil hill town of Kasauli. Perfect for a peaceful weekend getaway with colonial architecture, pine forests, and serene atmosphere.',
    highlights: [
      'Monkey Point - Highest peak with temple',
      'Christ Church - Victorian era heritage',
      'Mall Road - Peaceful walks',
      'Kasauli Brewery - Asia\'s oldest distillery',
      'Gilbert Trail - Nature walk through forests'
    ],
    included: [
      'Luxury cab for comfortable travel',
      'Professional chauffeur',
      'All transportation costs',
      'Hotel transfers',
      'Parking and toll fees'
    ]
  }
};

export function DestinationModal({ destination, isOpen, onClose }: DestinationModalProps) {
  if (!destination) return null;

  const details = destinationDetails[destination.id] || {
    description: 'Explore this amazing destination with TravelGeographic.',
    highlights: [],
    included: []
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{destination.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {destination.title} including tour highlights, pricing, and booking options
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-white text-gray-900">{destination.tag}</Badge>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#6B8E23]" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-900">{destination.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#6B8E23]" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="text-gray-900">{destination.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#6B8E23]" />
              <div>
                <p className="text-sm text-gray-500">Group Size</p>
                <p className="text-gray-900">{destination.groupSize}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl text-gray-900 mb-3">About This Destination</h3>
            <p className="text-gray-600 leading-relaxed">{details.description}</p>
          </div>

          {/* Highlights */}
          {details.highlights.length > 0 && (
            <div>
              <h3 className="text-xl text-gray-900 mb-3">Tour Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What's Included */}
          {details.included.length > 0 && (
            <div>
              <h3 className="text-xl text-gray-900 mb-3">What's Included</h3>
              <ul className="space-y-2">
                {details.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing and CTA */}
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-3xl text-[#6B8E23]">{destination.price}</p>
              <p className="text-sm text-gray-500">per vehicle</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    onClose();
                    setTimeout(() => {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
                className="flex-1 md:flex-none"
              >
                Get Quote
              </Button>
              <Button 
                size="lg"
                onClick={() => {
                  const whatsappNumber = '919218009211';
                  const message = `Hi! I'm interested in the ${destination.title} package. Can you provide more details?`;
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="flex-1 md:flex-none"
              >
                Book Now via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
