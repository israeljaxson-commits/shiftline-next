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
import { ScrollOrchestrator } from "@/components/scroll-orchestrator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper pb-28">
      <ScrollOrchestrator />
      <Navbar />
      <Hero />
      <div className="editorial-divider mx-auto my-5 w-[88%] max-w-[1300px]" aria-hidden="true" />
      <About />
      <div className="editorial-divider mx-auto my-3 w-[84%] max-w-[1220px]" aria-hidden="true" />
      <Industries />
      <Services />
      <div className="editorial-divider mx-auto my-3 w-[80%] max-w-[1160px]" aria-hidden="true" />
      <Timeline />
      <WhyShiftline />
      <div className="editorial-divider mx-auto my-3 w-[78%] max-w-[1120px]" aria-hidden="true" />
      <Stats />
      <Testimonials />
      <ApplicationForm />
      <Footer />
      <BottomDock />
    </main>
  );
}
