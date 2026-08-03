import { LanguageProvider } from "@/work/atlas-fitness/context/LanguageContext";
import DemoBackBar from "@/components/DemoBackBar";
import Header from "@/work/atlas-fitness/components/Header";
import Footer from "@/work/atlas-fitness/components/Footer";
import Hero from "@/work/atlas-fitness/components/Hero";
import Membership from "@/work/atlas-fitness/components/Membership";
import Trainers from "@/work/atlas-fitness/components/Trainers";
import Schedule from "@/work/atlas-fitness/components/Schedule";
import Statistics from "@/work/atlas-fitness/components/Statistics";
import Testimonials from "@/work/atlas-fitness/components/Testimonials";
import Contact from "@/work/atlas-fitness/components/Contact";

export default function AtlasDemo() {
  return (
    <div className="work-atlas min-h-screen">
      <DemoBackBar slug="atlas-fitness" />
      <LanguageProvider>
        <Header />
        <Hero />
        <Membership />
        <Statistics />
        <Trainers />
        <Schedule />
        <Testimonials />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}