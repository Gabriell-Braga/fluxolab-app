import { logoNames } from "@/lib/site";

export function LogoStrip() {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-12" aria-label="Clientes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Confiança de equipes que estudam com você
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale">
          {logoNames.map((name) => (
            <span key={name} className="text-lg font-bold text-slate-400">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
