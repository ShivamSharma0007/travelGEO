import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Destinations />

      {/* ⭐ SERVICES SECTION */}
      <div id="services">
        <Services />
      </div>

      {/* ⭐ ABOUT US SECTION */}
      <div id="about-us">
        <AboutUs />
      </div>

      <Testimonials />

      {/* ⭐ BLOG SECTION */}
      <div id="blog">
        <Blog />
      </div>

      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}
