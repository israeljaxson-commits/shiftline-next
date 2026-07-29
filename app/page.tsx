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
      <div className="mx-auto my-4 h-px w-[88%] max-w-[1300px] bg-[linear-gradient(90deg,transparent,rgba(12,14,10,0.28),transparent)]" aria-hidden="true" />
      <About />
      <div className="mx-auto my-2 h-px w-[84%] max-w-[1220px] bg-[linear-gradient(90deg,transparent,rgba(12,14,10,0.22),transparent)]" aria-hidden="true" />
      <Industries />
      <Services />
      <div className="mx-auto my-2 h-px w-[80%] max-w-[1160px] bg-[linear-gradient(90deg,transparent,rgba(12,14,10,0.22),transparent)]" aria-hidden="true" />
      <Timeline />
      <WhyShiftline />
      <div className="mx-auto my-2 h-px w-[78%] max-w-[1120px] bg-[linear-gradient(90deg,transparent,rgba(12,14,10,0.2),transparent)]" aria-hidden="true" />
      <Stats />
      <Testimonials />
      <ApplicationForm />
      <Footer />
      <BottomDock />
    </main>
  );
}
