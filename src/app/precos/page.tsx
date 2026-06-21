import type { Metadata } from "next";
import { PricingComparison, PricingCta } from "@/components/PricingComparison";
import { PricingFaq } from "@/components/PricingFaq";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Planos Starter, Pro e Enterprise do FluxoLab — escolha o ideal para o seu projeto Next.js.",
};

export default function PrecosPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, #22c55e, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Preços
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Planos que crescem com o seu projeto
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Do primeiro deploy gratuito à escala enterprise — mesma stack Next.js,
            sem surpresas na fatura.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Rota dedicada em{" "}
            <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-sky-300">
              app/precos/page.tsx
            </code>
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Compare os planos
            </h2>
            <p className="mt-3 text-slate-400">
              Visão rápida do que cada tier oferece.
            </p>
          </div>
          <div className="mt-12">
            <PricingComparison />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-slate-400">
              Tudo o que você precisa saber antes de assinar.
            </p>
          </div>
          <div className="mt-12">
            <PricingFaq />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingCta />
        </div>
      </section>
    </>
  );
}
