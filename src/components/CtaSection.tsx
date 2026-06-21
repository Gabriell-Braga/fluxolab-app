export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-700 p-8 shadow-2xl sm:p-12 md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Receba o outline do curso
            </h2>
            <p className="mt-4 text-lg text-emerald-100/90">
              Formulário estilizado com Tailwind — sem backend neste exemplo.
            </p>
          </div>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-end"
            action="#"
            method="post"
          >
            <div className="flex-1 text-left">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-emerald-50"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-emerald-200/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-8 py-3 font-semibold text-white transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:shrink-0"
            >
              Quero receber
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
