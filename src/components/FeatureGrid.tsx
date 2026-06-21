import { features } from "@/lib/features";
import { FeatureCard } from "./FeatureCard";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="border-b border-slate-800 bg-slate-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tudo o que você precisa para shippar
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Lista renderizada a partir de dados — padrão comum em apps reais.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
