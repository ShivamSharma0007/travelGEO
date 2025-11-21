import { Card } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactForm() {
  const whatsappNumber = "919218009211";
  const whatsappMessage = encodeURIComponent(
    "Hello TravelGeographic! I'm ready to book my Shimla adventure. Please share package details, prices, and availability. Thanks!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto">
            Tap below and get instant reply on WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">

            {/* Visit Us */}
            <Card className="p-6 lg:p-8 border-0 shadow-xl bg-white">
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 truncate">Visit Us</h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed break-words">
                    Bhattakufar<br />
                    Shimla, Himachal Pradesh<br />
                    India - 171006
                  </p>
                </div>
              </div>
            </Card>

            {/* Call Us */}
            <Card className="p-6 lg:p-8 border-0 shadow-xl bg-white">
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 truncate">Call Us</h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    +91 92180 09211<br />
                    <span className="text-green-600 font-semibold">24×7 Available</span>
                  </p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 lg:p-8 border-0 shadow-xl bg-white">
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 truncate">Email Us</h3>
                  <p className="text-base lg:text-lg text-gray-600 break-all">
                    info@travelgeographic.com
                  </p>
                </div>
              </div>
            </Card>

          </div>

          {/* RIGHT SIDE — BUTTON */}
          <div className="lg:col-span-2 w-full flex justify-center order-1 lg:order-2">

            <Button
              asChild
              className="
                w-[2050px]               /* <<< CHANGE WIDTH HERE */
                !bg-[#010013]
                hover:!bg-[#050019]
                text-white
                font-semibold
                text-xl                   /* <<< TEXT SIZE */
                px-8                      /* <<< SIDE PADDING */
                py-5                      /* <<< TOP/BOTTOM PADDING */
                rounded-xl                /* <<< CORNER RADIUS */
                shadow-[0_0_25px_rgba(1,0,19,0.4)]
                hover:shadow-[0_0_40px_rgba(1,0,19,0.6)]
                flex items-center justify-center gap-3
                transition-all duration-300 ease-out
                hover:scale-105
                active:scale-95
                relative
                overflow-hidden
              "
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-700"></span>

                <MessageCircle className="w-8 h-8 text-white" />
                Send Inquiry
              </a>
            </Button>

          </div>

          <p className="mt-6 text-center text-lg lg:text-xl text-gray-600 font-semibold w-full lg:col-span-3">
            We reply in <span className="text-green-600">under 5 minutes</span>
          </p>

        </div>
      </div>
    </section>
  );
}
