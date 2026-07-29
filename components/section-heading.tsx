import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, dark, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("kicker-line mb-5 font-display text-[1.02rem] font-semibold italic tracking-[0.03em]", dark ? "text-emerald-bright" : "text-emerald-deep")}>{eyebrow}</p>
      <h2 className={cn("font-display text-[2.3rem] leading-[0.92] tracking-[-0.024em] sm:text-[2.95rem] lg:text-[3.75rem]", dark ? "text-white" : "text-charcoal")}>{title}</h2>
      {description ? (
        <p className={cn("mt-6 max-w-2xl text-[1.03rem] leading-relaxed lg:text-[1.13rem]", dark ? "text-white/68" : "text-charcoal/72")}>{description}</p>
      ) : null}
    </div>
  );
}
