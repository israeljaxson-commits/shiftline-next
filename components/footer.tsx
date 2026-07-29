import Link from "next/link";
import { footerLinks } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <footer id="contact" data-section="true" data-journey="outro" className="bg-paper px-6 pb-30 pt-24 lg:px-10 lg:pb-38 lg:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 h-px bg-[radial-gradient(circle,var(--color-charcoal)_0.8px,transparent_0.8px)] bg-[length:8px_1px] bg-repeat-x" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <Reveal variant="text">
            <div className="outro-brand">
              <p className="mb-3 font-display text-[2.6rem] leading-none tracking-tight text-charcoal">Best Noornova</p>
              <p className="max-w-sm text-[0.97rem] leading-relaxed text-charcoal/70">
                Best Noornova builds dependable teams for courier routes, fulfillment centers, and active construction sites.
              </p>
              <p className="mt-3 max-w-sm font-mono text-[10.5px] font-semibold uppercase tracking-[0.13em] text-charcoal/56">
                Managing Director: Haji Chandrakumar Ajeesh Krishnan
              </p>
            </div>
          </Reveal>

          <Reveal variant="card">
            <div className="outro-links grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-charcoal/45">{group.title}</p>
                  <div className="space-y-2.5">
                    {group.links.map((link) => (
                      <Link key={link.label} href={link.href} className="block text-[0.95rem] text-charcoal/78 transition-colors hover:text-charcoal">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="my-12 h-px bg-[radial-gradient(circle,var(--color-charcoal)_0.8px,transparent_0.8px)] bg-[length:8px_1px] bg-repeat-x" />

        <div className="flex flex-col gap-4 text-xs text-charcoal/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Best Noornova Workforce Solutions</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-charcoal">
              Cookies
            </Link>
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
