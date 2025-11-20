import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    icon: any;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const serviceDetails: { [key: string]: { fullDescription: string; features: string[]; benefits: string[]; images: string[] } } = {
  'Luxury Fleet': {
    fullDescription: 'Experience unparalleled comfort with our premium fleet of well-maintained vehicles. From luxury sedans to spacious tempo travellers, we have the perfect vehicle for every journey. All our vehicles are equipped with modern amenities and driven by experienced professionals who know the mountain roads like the back of their hand.',
    features: [
      'Regular servicing and maintenance',
      'GPS tracking for safety',
      'Climate control (AC/Heater)',
      'Comfortable push-back seats',
      'Music and entertainment systems',
      'First aid kit and emergency equipment',
      'Experienced and courteous drivers',
      'All permits and documentation'
    ],
    benefits: [
      'Safe and reliable transportation',
      'Transparent pricing with no hidden costs',
      'Flexible pickup and drop locations',
      'Well-versed drivers with local knowledge',
      'Available 24/7 for bookings',
      'Clean and sanitized vehicles'
    ],
    images: [
      'https://images.unsplash.com/photo-1570829194611-71a926d70ff8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop'
    ]
  },
  'City Tours': {
    fullDescription: 'Discover the colonial charm and rich heritage of Shimla with our expertly guided city tours. Our local guides know every hidden gem and historical fact about the Queen of Hills. Whether you want a quick heritage walk or a comprehensive day tour, we customize itineraries to match your interests and schedule.',
    features: [
      'Professional local guides',
      'Flexible tour timings',
      'All major attractions covered',
      'Photography assistance',
      'Historical insights and stories',
      'Comfortable transportation',
      'Temple and heritage site access',
      'Shopping and dining recommendations'
    ],
    benefits: [
      'Learn about Shimla\'s rich history',
      'Visit all iconic landmarks',
      'Avoid tourist traps',
      'Best photo spots revealed',
      'Time-efficient routes',
      'Family-friendly tours'
    ],
    images: [
      'https://images.unsplash.com/photo-1680965982416-bec3aa2bed43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop'
    ]
  },
  'Hill Station Tours': {
    fullDescription: 'Venture beyond Shimla to explore the breathtaking beauty of Himachal Pradesh. From the adventure hub of Manali to the spiritual serenity of Dharamshala, from the pristine valleys of Kullu to the otherworldly landscapes of Spiti - we cover all major hill stations with comfortable transportation and expert planning.',
    features: [
      'Multi-day tour packages',
      'Accommodation assistance',
      'Route planning and permits',
      'Experienced mountain drivers',
      'Scenic stopover points',
      'Emergency support during journey',
      'Local cuisine recommendations',
      'Activity booking assistance'
    ],
    benefits: [
      'Explore multiple destinations',
      'Hassle-free travel arrangements',
      'Budget-friendly packages',
      'Safe mountain driving',
      'Flexible itineraries',
      'Group discounts available'
    ],
    images: [
      'https://images.unsplash.com/photo-1565610468500-adc61f362be5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1684823930343-26a531403928?w=800&h=600&fit=crop'
    ]
  },
  'Hotel Bookings': {
    fullDescription: 'Finding the perfect accommodation is crucial for a great trip. We have partnerships with hotels across all categories - from budget-friendly guesthouses to luxury resorts. Our team personally visits and verifies each property to ensure quality, cleanliness, and value for money. We handle all your booking needs so you can focus on enjoying your vacation.',
    features: [
      'Wide range of options (Budget to Luxury)',
      'Verified and inspected properties',
      'Best available rates',
      'No booking fees',
      'Instant confirmation',
      'Special requests handling',
      'Transport to hotel included',
      'Local area assistance'
    ],
    benefits: [
      'Save time on research',
      'Get insider recommendations',
      'Better rates than online platforms',
      'Quality guaranteed',
      'Complete package deals',
      'Flexible cancellation policies'
    ],
    images: [
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ]
  },
  'Group Packages': {
    fullDescription: 'Planning a trip with family, friends, or colleagues? Our group packages are designed to provide the best value while ensuring everyone has a memorable experience. We specialize in customizing tours for corporate outings, family reunions, and friend getaways with special group rates and personalized itineraries.',
    features: [
      'Customized group itineraries',
      'Spacious tempo travellers',
      'Group discount pricing',
      'Team building activities',
      'Flexible payment options',
      'Dedicated tour coordinator',
      'Group photography sessions',
      'Special meal arrangements'
    ],
    benefits: [
      'Cost-effective per person rates',
      'Tailored to group preferences',
      'Everyone travels together',
      'Corporate packages available',
      'School/college trip specialists',
      'Create lasting memories'
    ],
    images: [
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop'
    ]
  },
  '4x4 Expeditions': {
    fullDescription: 'For the true adventure seekers, our 4x4 expeditions take you to the most remote and stunning locations in the Himalayas. Experience the thrill of off-road driving through challenging terrains, cross high-altitude mountain passes, and discover places few tourists ever reach. Our specially equipped 4x4 vehicles and experienced drivers ensure your safety while delivering an unforgettable adventure.',
    features: [
      'Sturdy 4x4 vehicles (Mahindra Thar, Scorpio)',
      'Off-road capable and mountain-ready',
      'Expert drivers with expedition experience',
      'High-altitude acclimatization support',
      'Camping equipment available',
      'Satellite communication devices',
      'Emergency medical kits',
      'All permits and restricted area passes'
    ],
    benefits: [
      'Reach unexplored destinations',
      'Thrilling off-road experience',
      'Small group expeditions',
      'Photography opportunities',
      'Cultural immersion in remote villages',
      'Professional expedition planning'
    ],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&h=600&fit=crop'
    ]
  }
};

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;

  const details = serviceDetails[service.title] || {
    fullDescription: service.description,
    features: [],
    benefits: [],
    images: []
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{service.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about our {service.title} service including features, benefits, and booking options
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Images */}
          {details.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xl text-gray-900 mb-3">About This Service</h3>
            <p className="text-gray-600 leading-relaxed">{details.fullDescription}</p>
          </div>

          {/* Features */}
          {details.features.length > 0 && (
            <div>
              <h3 className="text-xl text-gray-900 mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#6B8E23] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {details.benefits.length > 0 && (
            <div>
              <h3 className="text-xl text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="space-y-2">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 rounded-xl p-6">
            <div>
              <h3 className="text-gray-900 text-lg mb-1">Ready to Book?</h3>
              <p className="text-gray-600 text-sm">Get in touch with us for customized quotes and packages</p>
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
                  const whatsappNumber = '919876543210';
                  const message = `Hi! I'm interested in your ${service.title} service. Can you provide more details?`;
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="flex-1 md:flex-none"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
