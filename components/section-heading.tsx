import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({ eyebrow, title, description, dark, className, eyebrowClassName }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("kicker-line mb-5 font-display text-[0.96rem] font-bold italic tracking-[0.015em] sm:text-[1.06rem] lg:text-[1.14rem] lg:tracking-[0.02em]", dark ? "text-emerald-bright" : "text-emerald-deep", eyebrowClassName)}>{eyebrow}</p>
      <h2 className={cn("font-display text-[2.02rem] leading-[0.95] tracking-[-0.02em] sm:text-[2.95rem] sm:leading-[0.92] sm:tracking-[-0.024em] lg:text-[3.75rem]", dark ? "text-white" : "text-charcoal")}>{title}</h2>
      {description ? (
        <p className={cn("mt-6 max-w-2xl text-[1.03rem] leading-relaxed lg:text-[1.13rem]", dark ? "text-white/68" : "text-charcoal/72")}>{description}</p>
      ) : null}
    </div>
  );
}
