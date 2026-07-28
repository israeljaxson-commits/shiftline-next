import { About } from "@/components/about";
import { ApplicationForm } from "@/components/application-form";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/industries";
import { Marquee } from "@/components/marquee";
import { Navbar } from "@/components/navbar";
import { RouteRail } from "@/components/route-rail";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { WhyShiftline } from "@/components/why-shiftline";
import { routeSections } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <RouteRail sections={routeSections} />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Industries />
      <Services />
      <Timeline />
      <WhyShiftline />
      <Stats />
      <Testimonials />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
