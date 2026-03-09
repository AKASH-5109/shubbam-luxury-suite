import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedGallery from "@/components/FeaturedGallery";
import Editorial from "@/components/Editorial";
import AboutBrand from "@/components/AboutBrand";
import StoreLocation from "@/components/StoreLocation";
import InstagramGallery from "@/components/InstagramGallery";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    <Collections />
    <FeaturedGallery />
    <Editorial />
    <AboutBrand />
    <StoreLocation />
    <InstagramGallery />
    <Testimonials />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default Index;
