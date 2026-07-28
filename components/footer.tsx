import Link from "next/link";
import { footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-paper px-6 pb-28 pt-20 lg:px-10 lg:pb-36 lg:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 h-px bg-[radial-gradient(circle,var(--color-charcoal)_0.8px,transparent_0.8px)] bg-[length:8px_1px] bg-repeat-x" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="mb-3 font-display text-5xl leading-none tracking-tight text-charcoal">w.</p>
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
              Shiftline builds dependable teams for courier routes, fulfillment centers, and active construction sites.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-charcoal/45">{group.title}</p>
                <div className="space-y-2.5">
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href} className="block text-sm text-charcoal/78 transition-colors hover:text-charcoal">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-12 h-px bg-[radial-gradient(circle,var(--color-charcoal)_0.8px,transparent_0.8px)] bg-[length:8px_1px] bg-repeat-x" />

        <div className="flex flex-col gap-4 text-xs text-charcoal/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shiftline Workforce Solutions</p>
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
