import { contactChannels, officeHours } from "@/lib/contact";

export function ContactChannels() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-500" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{officeHours.status}</p>
            <p className="text-xs text-slate-500">{officeHours.weekdays}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-slate-600 hover:bg-slate-900/80"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition group-hover:bg-brand-500/25">
              <i className={`fa-solid ${channel.icon}`} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {channel.label}
              </p>
              <p className="mt-1 font-semibold text-white">{channel.value}</p>
              <p className="mt-0.5 text-sm text-slate-500">{channel.description}</p>
            </div>
            <i
              className="fa-solid fa-arrow-up-right-from-square ml-auto mt-1 text-xs text-slate-600 transition group-hover:text-brand-400"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Escritório
          </p>
          <p className="mt-2 font-semibold text-white">São Paulo, Brasil</p>
          <p className="mt-1 text-sm text-slate-400">
            Av. Paulista, 1000 — Bela Vista
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500">
            <i className="fa-solid fa-clock" aria-hidden="true" />
            {officeHours.timezone}
          </p>
        </div>
      </div>
    </div>
  );
}
