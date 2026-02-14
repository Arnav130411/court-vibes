import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BookingSection from "@/components/BookingSection";
import Pricing from "@/components/Pricing";
import Vibes from "@/components/Vibes";
import CafeSection from "@/components/CafeSection";
import Events from "@/components/Events";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <BookingSection />
      <Pricing />
      <Vibes />
      <CafeSection />
      <Events />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
