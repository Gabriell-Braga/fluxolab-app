import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
            Minicurso Next.js
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Do Tailwind estático ao app React publicável.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Mesma identidade visual do curso anterior — agora com rotas,
            componentes e deploy no GitHub Pages.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/#cta"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Começar agora
            </Link>
            <Link
              href="/precos"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-3.5 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Ver preços
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-black/40">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
            alt="Equipa a trabalhar em produto digital"
            width={900}
            height={600}
            className="aspect-video h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
