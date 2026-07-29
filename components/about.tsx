import Image from "next/image";
import { aboutHighlights } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" data-section="true" data-journey="about" className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10 lg:py-44 xl:py-52">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-18">
        <Reveal variant="text" className="about-head lg:col-span-5">
          <SectionHeading eyebrow="01 — About Best Noornova" title="Every shift is a promise someone shows up for." />
        </Reveal>

        <div className="lg:col-span-7 lg:pt-16">
          <Reveal variant="text" className="about-copy">
            <p className="max-w-2xl text-balance text-[1.12rem] leading-relaxed text-charcoal/78 lg:text-[1.3rem]">
              Best Noornova was built for the kinds of jobs that keep cities running: fast moving delivery work, warehouse coverage, and active site crews. We match real people to real shifts with speed, accountability, and zero guesswork.
            </p>
          </Reveal>

          <div className="about-pillars mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} variant="card" delay={index * 0.08}>
                <div className="rounded-xl border border-line/80 bg-paper px-4 py-5">
                  <p className="mb-2 font-display text-[1.6rem] leading-none">{item.title}</p>
                  <p className="text-[0.95rem] leading-relaxed text-charcoal/66">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal variant="image" className="about-image mt-24">
        <div data-parallax="soft" data-cursor-reactive="true" className="cursor-reactive-frame relative h-[60vh] overflow-hidden rounded-2xl lg:h-[70vh]">
          <Image
            src="https://images.pexels.com/photos/7706451/pexels-photo-7706451.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1900&q=82"
            alt="Editorial documentary frame of a delivery worker in motion"
            fill
            priority={false}
            className="cursor-reactive-media object-cover"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
          <span className="cursor-reactive-glow" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/18 to-charcoal/5" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="flex items-center gap-4 rounded-xl bg-white/90 p-5 text-charcoal shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
              <div>
                <p className="font-display text-[1.45rem] font-semibold text-charcoal">People on the move, every day</p>
                <p className="mt-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-charcoal/68">
                  Documentary-style crews, real shifts, real work
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
