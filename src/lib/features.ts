export type Feature = {
  icon: string;
  title: string;
  description: string;
  wide?: boolean;
};

export const features: Feature[] = [
  {
    icon: "fa-bolt",
    title: "App Router",
    description:
      "Rotas baseadas em pastas — cada URL mapeia para um arquivo page.tsx.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Mobile-first",
    description:
      "Tailwind no Next.js com o mesmo vocabulário que você já usou no minicurso anterior.",
  },
  {
    icon: "fa-palette",
    title: "Componentes reutilizáveis",
    description:
      "Extrair UI em arquivos .tsx mantém layout e páginas enxutos.",
    wide: true,
  },
];
