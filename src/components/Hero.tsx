import Icon from "./Icon";

export default function Hero({ badge, h1a, h1b, sub }: { badge: string; h1a: string; h1b?: string; sub: string }) {
  return (
    <section className="hero-glow">
      <div className="mx-auto max-w-4xl px-4 pb-8 pt-10 text-center sm:pt-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300 sm:text-sm">
          <Icon name="check" className="h-4 w-4" strokeWidth={3} /> {badge}
        </p>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {h1a}
          {h1b && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-brand-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">{h1b}</span>
            </>
          )}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{sub}</p>
      </div>
    </section>
  );
}
