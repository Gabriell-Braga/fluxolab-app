import Link from "next/link";
import { comparisonRows } from "@/lib/pricing";

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <i className="fa-solid fa-check text-brand-500" aria-label="Incluído" />
    ) : (
      <i className="fa-solid fa-minus text-slate-600" aria-label="Não incluído" />
    );
  }
  return <span className="text-slate-300">{value}</span>;
}

export function PricingComparison() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full min-w-[540px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/80">
            <th className="px-6 py-4 font-semibold text-slate-400">Recurso</th>
            <th className="px-6 py-4 font-semibold text-white">Starter</th>
            <th className="px-6 py-4 font-semibold text-brand-400">Pro</th>
            <th className="px-6 py-4 font-semibold text-white">Enterprise</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-900/40">
          {comparisonRows.map((row) => (
            <tr key={row.feature} className="transition hover:bg-slate-900/60">
              <td className="px-6 py-4 font-medium text-white">{row.feature}</td>
              <td className="px-6 py-4">
                <CellValue value={row.starter} />
              </td>
              <td className="px-6 py-4">
                <CellValue value={row.pro} />
              </td>
              <td className="px-6 py-4">
                <CellValue value={row.enterprise} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PricingCta() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-600/20 p-8 sm:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Ainda com dúvidas?
        </h2>
        <p className="mt-4 text-slate-400">
          Agende uma conversa de 30 minutos — sem compromisso. Mostramos o fluxo
          completo do minicurso ao deploy.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-brand-500/25 transition hover:bg-brand-400"
          >
            Falar com a equipa
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Ver funcionalidades
          </Link>
        </div>
      </div>
    </div>
  );
}
