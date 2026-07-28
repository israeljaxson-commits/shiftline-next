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
    <div className={cn("max-w-2xl", className)}>
      <p className={cn("mb-5 font-mono text-[10px] uppercase tracking-[0.28em]", dark ? "text-emerald-bright" : "text-emerald-deep")}>{eyebrow}</p>
      <h2 className={cn("font-display text-[2.2rem] leading-[0.95] tracking-[-0.02em] sm:text-[2.7rem] lg:text-[3.35rem]", dark ? "text-white" : "text-charcoal")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 max-w-xl text-base leading-relaxed lg:text-lg", dark ? "text-white/60" : "text-charcoal/70")}>{description}</p>
      ) : null}
    </div>
  );
}
