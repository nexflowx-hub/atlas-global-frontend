import {
  Atom,
  Blocks,
  BookOpen,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Container,
  CreditCard,
  Cuboid,
  Database,
  FlaskConical,
  Globe2,
  Landmark,
  PanelsTopLeft,
  Rocket,
  Target,
  type LucideIcon,
} from "lucide-react";

export type EcosystemUnit = {
  name: string;
  description: string;
  accent: string;
  icon: LucideIcon;
};

export type AtlasValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Technology = {
  name: string;
  icon: LucideIcon;
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#ecossistema" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Recursos", href: "#recursos" },
] as const;

export const trustTechnologies = [
  "aws",
  "supabase",
  "NEXT.js",
  "docker",
  "OpenAI",
  "stripe",
  "CLOUDFLARE",
] as const;

export const ecosystemUnits: EcosystemUnit[] = [
  {
    name: "Atlas Platform",
    description:
      "Plataforma modular para criar, gerir e escalar soluções digitais inteligentes.",
    accent: "#3b82f6",
    icon: PanelsTopLeft,
  },
  {
    name: "Atlas Advisory",
    description:
      "Consultoria estratégica para negócios internacionais, finanças, operações e tecnologia.",
    accent: "#8b5cf6",
    icon: Landmark,
  },
  {
    name: "Atlas Intelligence",
    description:
      "Soluções de IA, agentes inteligentes e sistemas de conhecimento avançados.",
    accent: "#43d469",
    icon: BrainCircuit,
  },
  {
    name: "Atlas Financial",
    description:
      "Infraestrutura tecnológica para pagamentos, blockchain e soluções financeiras digitais.",
    accent: "#ff9f43",
    icon: CreditCard,
  },
  {
    name: "Atlas Cloud",
    description:
      "Arquitetura cloud, DevOps, segurança e infraestrutura escalável.",
    accent: "#38bdf8",
    icon: Cloud,
  },
  {
    name: "Atlas Labs",
    description:
      "Investigação, prototipagem e inovação para criar as tecnologias de amanhã.",
    accent: "#c05cff",
    icon: FlaskConical,
  },
  {
    name: "Atlas Research",
    description:
      "Estudos, whitepapers e investigação aplicada em tecnologia.",
    accent: "#ec4899",
    icon: BookOpen,
  },
  {
    name: "Atlas Network",
    description:
      "Projetos independentes e colaborações que fazem parte da rede Atlas.",
    accent: "#d946ef",
    icon: Globe2,
  },
];

export const atlasValues: AtlasValue[] = [
  {
    title: "Visão Estratégica",
    description:
      "Entendemos o negócio para desenhar soluções que geram valor.",
    icon: Target,
  },
  {
    title: "Arquitetura Inteligente",
    description:
      "Projetamos plataformas escaláveis, seguras e preparadas para o futuro.",
    icon: Cuboid,
  },
  {
    title: "Tecnologia Avançada",
    description:
      "Aplicamos IA, Cloud, Dados e Blockchain para resolver problemas complexos.",
    icon: Code2,
  },
  {
    title: "Execução de Excelência",
    description:
      "Transformamos estratégia em produtos digitais de alta performance.",
    icon: Rocket,
  },
];

export const technologies: Technology[] = [
  { name: "TypeScript", icon: Code2 },
  { name: "Next.js", icon: Blocks },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Bot },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Cuboid },
  { name: "AI / LLMs", icon: BrainCircuit },
];

export const technologyGroups = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Fastify", "Prisma"],
  },
  {
    name: "Dados",
    items: ["PostgreSQL", "Supabase", "Storage"],
  },
  {
    name: "Infraestrutura",
    items: ["Docker", "Kubernetes", "Ubuntu", "Nginx", "Cloudflare", "Vercel"],
  },
  {
    name: "Inteligência Artificial",
    items: ["LLMs", "RAG", "AI Agents", "Prompt Engineering"],
  },
] as const;
