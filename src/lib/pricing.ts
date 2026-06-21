export type Plan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  icon: string;
  features: string[];
  missing?: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal para experimentar o fluxo de deploy e rotas.",
    monthlyPrice: 0,
    icon: "fa-seedling",
    features: [
      "1 projeto ativo",
      "Rotas estáticas ilimitadas",
      "Deploy no GitHub Pages",
      "Suporte da comunidade",
    ],
    missing: ["Domínio personalizado", "Analytics avançado"],
    cta: "Começar grátis",
    ctaHref: "/",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para equipas que publicam com frequência.",
    monthlyPrice: 49,
    icon: "fa-rocket",
    highlighted: true,
    features: [
      "Projetos ilimitados",
      "Server Actions & API Routes",
      "Domínio personalizado",
      "Preview por branch",
      "Analytics em tempo real",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    ctaHref: "/contato",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Escala, SSO e SLA para organizações.",
    monthlyPrice: null,
    icon: "fa-building",
    features: [
      "Tudo do Pro",
      "SSO & SAML",
      "SLA 99,9%",
      "Gerente de conta dedicado",
      "Auditoria e compliance",
      "Treinamento in-company",
    ],
    cta: "Falar com vendas",
    ctaHref: "/contato",
  },
];

export const comparisonRows = [
  { feature: "Projetos", starter: "1", pro: "Ilimitados", enterprise: "Ilimitados" },
  { feature: "Membros", starter: "1", pro: "10", enterprise: "Ilimitados" },
  { feature: "Deploy automático", starter: true, pro: true, enterprise: true },
  { feature: "Domínio custom", starter: false, pro: true, enterprise: true },
  { feature: "SSO", starter: false, pro: false, enterprise: true },
  { feature: "SLA", starter: false, pro: false, enterprise: true },
] as const;

export const pricingFaqs = [
  {
    question: "Posso mudar de plano a qualquer momento?",
    answer:
      "Sim. Upgrades entram em vigor imediatamente; downgrades aplicam-se no próximo ciclo de faturação.",
  },
  {
    question: "O plano Starter é realmente gratuito?",
    answer:
      "Sim — perfeito para aprender Next.js e publicar projetos pessoais sem cartão de crédito.",
  },
  {
    question: "Há desconto para estudantes?",
    answer:
      "Oferecemos 50% no plano Pro para estudantes com email .edu. Entre em contato para ativar.",
  },
  {
    question: "Como funciona o faturamento anual?",
    answer:
      "Pague 10 meses e use 12 — equivalente a ~17% de desconto em relação ao mensal.",
  },
] as const;
