import { LanguageProvider } from "@/work/le-jardin/context/LanguageContext";
import DemoBackBar from "@/components/DemoBackBar";
import Navbar from "@/work/le-jardin/components/Navbar";
import Hero from "@/work/le-jardin/components/Hero";
import Story from "@/work/le-jardin/components/Story";
import Chef from "@/work/le-jardin/components/Chef";
import SignatureDishes from "@/work/le-jardin/components/SignatureDishes";
import MenuCategories from "@/work/le-jardin/components/MenuCategories";
import ReservationCTA from "@/work/le-jardin/components/ReservationCTA";
import Gallery from "@/work/le-jardin/components/Gallery";
import Testimonials from "@/work/le-jardin/components/Testimonials";
import Contact from "@/work/le-jardin/components/Contact";
import Footer from "@/work/le-jardin/components/Footer";

export default function LeJardinDemo() {
  return (
    <div className="work-lejardin min-h-screen">
      <DemoBackBar slug="le-jardin" />
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Chef />
          <SignatureDishes />
          <MenuCategories />
          <ReservationCTA />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}