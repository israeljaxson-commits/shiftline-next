import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <footer id="contact" className="bg-paper py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-20 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-deep">09 — Contact</p>
            <h2 className="mb-8 max-w-md font-display text-4xl tracking-tight lg:text-5xl">Let's staff your next shift.</h2>
            <div className="flex flex-col gap-3 font-display text-lg">
              <a href="mailto:hello@shiftline.work" className="w-fit transition-colors hover:text-emerald-deep">
                hello@shiftline.work
              </a>
              <a href="tel:+18005550142" className="w-fit transition-colors hover:text-emerald-deep">
                +1 (800) 555-0142
              </a>
              <a href="#" className="inline-flex w-fit items-center gap-2 transition-colors hover:text-emerald-deep">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="frame-surface relative flex h-72 items-center justify-center overflow-hidden rounded-2xl lg:h-full">
              <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80" alt="Real delivery and warehouse workers in motion" fill className="object-cover opacity-75" sizes="(min-width: 1024px) 600px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/80 via-charcoal/30 to-transparent" />
              <p className="relative z-10 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/70">On the ground across city routes and job sites</p>
            </div>
          </Reveal>
        </div>

        <div className="mb-10 h-px bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-bright" />
            Shiftline
          </div>

          <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest text-charcoal/60 sm:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href} className="transition-colors hover:text-charcoal">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 h-px bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

        <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest text-charcoal/40 sm:flex-row sm:justify-between">
          <p>© 2026 Shiftline Workforce Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-charcoal">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-charcoal">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
