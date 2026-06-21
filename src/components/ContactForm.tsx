"use client";

import { useState } from "react";
import { subjectOptions } from "@/lib/contact";

type FormState = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  email: "",
  assunto: "geral",
  mensagem: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/5 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
          <i className="fa-solid fa-paper-plane text-2xl" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">Mensagem enviada!</h3>
        <p className="mt-3 max-w-sm text-slate-400">
          Obrigado, {form.nome || "visitante"}. Responderemos em breve no email{" "}
          <span className="text-brand-400">{form.email || "informado"}</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialState);
          }}
          className="mt-8 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-slate-300">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="voce@exemplo.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium text-slate-300">
          Assunto
        </label>
        <div className="relative">
          <select
            id="assunto"
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
            className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 pr-10 text-white focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <i
            className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-slate-300">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Como podemos ajudar?"
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensagem
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
