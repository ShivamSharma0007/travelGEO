import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog"; // ⭐ Your Blog file
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
      <Services />
      <AboutUs />
      <Testimonials />

      {/* ⭐ BLOG SECTION RIGHT AFTER TESTIMONIALS */}
      <Blog />

      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}