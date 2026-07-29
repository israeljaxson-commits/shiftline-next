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
      <p className={cn("kicker-line mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.25em]", dark ? "text-emerald-bright" : "text-emerald-deep")}>{eyebrow}</p>
      <h2 className={cn("font-display text-[2.35rem] leading-[0.9] tracking-[-0.028em] sm:text-[3.05rem] lg:text-[3.95rem]", dark ? "text-white" : "text-charcoal")}>{title}</h2>
      {description ? (
        <p className={cn("mt-7 max-w-2xl text-[1.04rem] leading-relaxed lg:text-[1.16rem]", dark ? "text-white/68" : "text-charcoal/72")}>{description}</p>
      ) : null}
    </div>
  );
}
