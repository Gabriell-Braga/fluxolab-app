"use client";

import Link from "next/link";
import { useState } from "react";
import { plans } from "@/lib/pricing";

type BillingCycle = "monthly" | "annual";

function formatPrice(monthly: number | null, cycle: BillingCycle) {
  if (monthly === null) return null;
  if (monthly === 0) return "0";
  if (cycle === "annual") return String(Math.round(monthly * 10));
  return String(monthly);
}

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div
          className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 p-1"
          role="group"
          aria-label="Ciclo de faturamento"
        >
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              cycle === "monthly"
                ? "bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setCycle("annual")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              cycle === "annual"
                ? "bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Anual
          </button>
        </div>
        {cycle === "annual" ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400">
            <i className="fa-solid fa-tag" aria-hidden="true" />
            2 meses grátis
          </span>
        ) : null}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = formatPrice(plan.monthlyPrice, cycle);
          const isCustom = plan.monthlyPrice === null;

          return (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 transition hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-brand-500/60 bg-gradient-to-b from-brand-500/10 via-slate-900/80 to-slate-900 shadow-2xl shadow-brand-500/10 ring-1 ring-brand-500/20"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:shadow-xl hover:shadow-brand-500/5"
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">
                  Mais popular
                </span>
              ) : null}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                <i className={`fa-solid ${plan.icon} text-xl`} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                {isCustom ? (
                  <span className="text-4xl font-extrabold text-white">Sob consulta</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-white">
                      R${price}
                    </span>
                    <span className="text-slate-500">
                      /{cycle === "annual" ? "ano" : "mês"}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <i
                      className="fa-solid fa-circle-check mt-0.5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
                {plan.missing?.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <i
                      className="fa-solid fa-circle-xmark mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  plan.highlighted
                    ? "bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/25 hover:bg-brand-400"
                    : "border border-slate-600 text-slate-200 hover:border-slate-500 hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}
