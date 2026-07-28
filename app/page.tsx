import { About } from "@/components/about";
import { ApplicationForm } from "@/components/application-form";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/industries";
import { Navbar } from "@/components/navbar";
import { BottomDock } from "@/components/bottom-dock";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { WhyShiftline } from "@/components/why-shiftline";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper pb-28">
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Services />
      <Timeline />
      <WhyShiftline />
      <Stats />
      <Testimonials />
      <ApplicationForm />
      <Footer />
      <BottomDock />
    </main>
  );
}
