import type { Metadata } from "next";
import Link from "next/link";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipa FluxoLab — suporte, vendas e parcerias para o seu projeto Next.js.",
};

export default function ContatoPage() {
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
            Contato
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vamos construir algo juntos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Dúvidas sobre planos, suporte técnico ou palestras — nossa equipa
            responde em até um dia útil.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-white">Canais diretos</h2>
            <p className="mt-2 text-sm text-slate-400">
              Prefere outro meio? Escolha o canal que funciona melhor para você.
            </p>
            <div className="mt-8">
              <ContactChannels />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white">Envie uma mensagem</h2>
              <p className="mt-2 text-sm text-slate-400">
                Formulário interativo com estado local — sem backend neste
                exemplo, mas com feedback visual completo.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-slate-600 lg:text-left">
              Página em{" "}
              <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-sky-300">
                app/contato/page.tsx
              </code>{" "}
              — componente cliente em{" "}
              <code className="rounded bg-slate-900 px-2 py-0.5 font-mono text-sky-300">
                ContactForm.tsx
              </code>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/30 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-slate-400">
            Procurando planos e valores?{" "}
            <Link
              href="/precos"
              className="font-semibold text-brand-400 transition hover:text-brand-300"
            >
              Veja a página de preços →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
