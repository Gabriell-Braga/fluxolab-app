import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950 py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-white">
            Fluxo<span className="text-brand-500">Lab</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            App de exemplo para o minicurso Next.js — evolui módulo a módulo
            junto com os slides.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Curso
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="rounded hover:text-white">
                Início
              </Link>
            </li>
            <li>
              <Link href="/precos" className="rounded hover:text-white">
                Preços
              </Link>
            </li>
            <li>
              <Link href="/contato" className="rounded hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Base
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded hover:text-white"
              >
                Documentação Next.js
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
        © 2026 Minicurso Next.js — uso educacional.
      </p>
    </footer>
  );
}
