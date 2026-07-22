import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ContactDialog } from "@/components/ContactDialog";
import { TechnologyDialog } from "@/components/TechnologyDialog";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Atlas Global — Research, Architecture & Platforms",
    template: "%s | Atlas Global",
  },
  description:
    "A Atlas Global investiga, arquiteta e desenvolve plataformas digitais inteligentes, combinando inteligência artificial, engenharia de software, cloud e inovação.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "Atlas Global",
    locale: "pt_PT",
    title: "Atlas Global — Research, Architecture & Platforms",
    description:
      "Investigação, arquitetura tecnológica e plataformas digitais preparadas para o futuro.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Global — Research, Architecture & Platforms",
    description:
      "Investigação, arquitetura tecnológica e plataformas digitais preparadas para o futuro.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  email: siteConfig.email,
  description:
    "Technology Research, Architecture and Platform Company.",
  sameAs: [siteConfig.githubUrl],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#020611] font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <ContactDialog />
        <TechnologyDialog />
      </body>
    </html>
  );
}
