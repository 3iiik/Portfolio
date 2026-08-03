import { LanguageProvider } from "@/work/smilecare/context/LanguageContext";
import DemoBackBar from "@/components/DemoBackBar";
import Navbar from "@/work/smilecare/components/Navbar";
import Hero from "@/work/smilecare/components/Hero";
import Services from "@/work/smilecare/components/Services";
import WhyChooseUs from "@/work/smilecare/components/WhyChooseUs";
import Team from "@/work/smilecare/components/Team";
import Reviews from "@/work/smilecare/components/Reviews";
import FAQ from "@/work/smilecare/components/FAQ";
import Appointment from "@/work/smilecare/components/Appointment";
import Contact from "@/work/smilecare/components/Contact";
import Footer from "@/work/smilecare/components/Footer";

export default function SmileCareDemo() {
  return (
    <div className="work-smilecare min-h-screen">
      <DemoBackBar slug="smilecare" />
      <LanguageProvider>
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Team />
          <Reviews />
          <FAQ />
          <Appointment />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}