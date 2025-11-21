import { Card } from './ui/card';
import { Mountain, Users, Heart, Award } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { icon: Users, value: '1800+', label: 'Happy Clients' },
    { icon: Mountain, value: '11', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
    { icon: Award, value: 'Premium', label: 'Service Quality' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Driven by passion, guided by experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/hirday.jpg"
                alt="Hirday Aukta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Name + Instagram */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl mb-1">Hirday Aukta</p>
                <p className="text-white/80 mb-2">Founder & Explorer</p>

                <a
                  href="https://www.instagram.com/hirdayaukta?igsh=MWxnNnJwdTBubHF5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 
                             backdrop-blur-sm px-3 py-1.5 rounded-full transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7z" />
                    <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" />
                    <circle cx="17" cy="7" r="1" />
                  </svg>
                  <span className="text-sm">Follow</span>
                </a>
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-xl mb-2">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Founded in 2014 by explorer and wanderer Hirday Aukta, TravelGeographic was born from a passion for discovering hidden gems untouched by the masses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-xl mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hirday's love for reaching places where vehicles struggle to go sparked the idea to bring these extraordinary experiences to everyone seeking adventure beyond the ordinary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 text-xl mb-2">Today</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From 2014 to 2025, we've served over 1800 happy clients, many of whom return to experience more adventures with us. Your journey into the unexplored starts here.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
