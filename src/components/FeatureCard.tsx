import type { Feature } from "@/lib/features";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-brand-500/5 ${
        feature.wide ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
        <i className={`fa-solid ${feature.icon} text-xl`} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-2 text-slate-400">{feature.description}</p>
    </article>
  );
}
