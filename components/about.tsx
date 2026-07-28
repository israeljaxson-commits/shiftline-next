import Image from "next/image";
import { aboutHighlights } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40 xl:py-48">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="01 — About Best Noornova" title="Every shift is a promise someone shows up for." />
        </Reveal>

        <div className="lg:col-span-7 lg:pt-16">
          <Reveal>
            <p className="max-w-2xl text-balance text-lg leading-relaxed text-charcoal/80 lg:text-xl">
              Best Noornova was built for the kinds of jobs that keep cities running: fast moving delivery work, warehouse coverage, and active site crews. We match real people to real shifts with speed, accountability, and zero guesswork.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <p className="font-display text-2xl mb-2">{item.title}</p>
                <p className="text-sm leading-relaxed text-charcoal/65">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mt-20">
        <div className="relative h-[60vh] overflow-hidden rounded-2xl lg:h-[70vh]">
          <Image
            src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=80"
            alt="Real courier and warehouse workers operating in an active urban environment"
            fill
            priority={false}
            className="object-cover"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="flex items-center gap-4 text-white">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
              <div>
                <p className="font-display text-xl text-white">People on the move, every day</p>
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/60">
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
