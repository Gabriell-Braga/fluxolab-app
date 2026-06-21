export const contactChannels = [
  {
    icon: "fa-envelope",
    label: "Email",
    value: "ola@fluxolab.dev",
    href: "mailto:ola@fluxolab.dev",
    description: "Resposta em até 24h úteis",
  },
  {
    icon: "fa-comments",
    label: "Discord",
    value: "Comunidade FluxoLab",
    href: "#",
    description: "Suporte em tempo real da turma",
  },
  {
    icon: "fa-calendar-check",
    label: "Agendar call",
    value: "30 min grátis",
    href: "#",
    description: "Para planos Pro e Enterprise",
  },
] as const;

export const officeHours = {
  weekdays: "Seg–Sex, 9h–18h (BRT)",
  status: "Online agora",
  timezone: "America/Sao_Paulo",
} as const;

export const subjectOptions = [
  { value: "geral", label: "Dúvida geral" },
  { value: "pro", label: "Plano Pro" },
  { value: "enterprise", label: "Enterprise / vendas" },
  { value: "suporte", label: "Suporte técnico" },
  { value: "parceria", label: "Parceria ou palestra" },
] as const;
