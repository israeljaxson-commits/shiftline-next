import { heroIndustries } from "@/lib/site";

export function Marquee() {
  const items = heroIndustries.flatMap((item) => [item, "•"]);
  const loop = [...items, ...items];

  return (
    <div className="grain overflow-hidden bg-charcoal py-6 lg:py-7">
      <div className="marquee-track">
        {Array.from({ length: 2 }).flatMap((_, trackIndex) =>
          loop.map((item, index) => (
            <div key={`${trackIndex}-${index}-${item}`} className="flex shrink-0 items-center gap-10 pr-10">
              {item === "•" ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-bright" /> : <span className="font-display text-[1.05rem] uppercase tracking-[0.24em] text-white/80 sm:text-[1.2rem]">{item}</span>}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
