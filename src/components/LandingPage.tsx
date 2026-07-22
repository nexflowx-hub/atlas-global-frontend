"use client";

import {
  ArrowRight,
  CalendarDays,
  Github,
  MessageCircle,
  MoveRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { GlobeVisual } from "@/components/GlobeVisual";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import {
  atlasValues,
  ecosystemUnits,
  navigation,
  technologies,
  trustTechnologies,
} from "@/data/homepage";

function openContact() {
  window.dispatchEvent(new CustomEvent("atlas:open-contact"));
}

function openTechnologies() {
  window.dispatchEvent(new CustomEvent("atlas:open-technologies"));
}

export function LandingPage() {
  const reduceMotion = useReducedMotion();

  const handleConfiguredAction = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    openContact();
  };

  return (
    <main className="overflow-hidden bg-[#020611] text-white">
      <section id="inicio" className="relative border-b border-white/[0.06] pt-[72px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(37,75,255,.14),transparent_32%),radial-gradient(circle_at_23%_40%,rgba(124,58,237,.08),transparent_35%)]" />
        <div className="atlas-container relative grid min-h-[370px] items-center gap-7 py-8 lg:grid-cols-[44%_56%] lg:gap-0 lg:py-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 py-7 lg:py-10"
          >
            <span className="atlas-eyebrow">RESEARCH • ARCHITECTURE • PLATFORMS</span>
            <h1 className="mt-5 max-w-[550px] text-[clamp(2.35rem,5vw,3.7rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
              <span className="block text-slate-50">Arquitetamos o futuro.</span>
              <span className="atlas-gradient-text mt-1 block">
                Construímos o que
                <br />
                impulsiona o mundo.
              </span>
            </h1>
            <p className="mt-6 max-w-[510px] text-[15px] leading-7 text-slate-300/90 lg:text-base">
              A Atlas Global pesquisa, desenha e desenvolve plataformas tecnológicas inteligentes que transformam ideias complexas em soluções digitais escaláveis.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#ecossistema" className="atlas-primary-button">
                Explorar Ecossistema
                <ArrowRight className="h-4 w-4" />
              </a>
              <button type="button" onClick={openContact} className="atlas-secondary-button">
                Falar com a Atlas
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative -mx-5 min-h-[300px] sm:mx-0 lg:min-h-[370px]"
          >
            <GlobeVisual />
          </motion.div>
        </div>
      </section>

      <section aria-label="Tecnologias utilizadas" className="border-b border-white/[0.07] bg-[#030817]">
        <div className="atlas-container py-5 sm:py-6">
          <p className="text-center text-[9px] font-semibold tracking-[0.38em] text-slate-400 sm:text-[10px]">
            TECNOLOGIA, CONFIANÇA E INOVAÇÃO
          </p>
          <div className="mt-5 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-7">
            {trustTechnologies.map((technology) => (
              <div
                key={technology}
                className="flex min-h-8 items-center justify-center text-center text-[15px] font-semibold tracking-tight text-slate-300/75 grayscale transition hover:text-slate-100 sm:text-base"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecossistema" className="scroll-mt-20 border-b border-white/[0.07] bg-[radial-gradient(circle_at_30%_0%,rgba(37,99,235,.06),transparent_32%),#040a18]">
        <div className="atlas-container py-12 sm:py-14">
          <Reveal className="grid gap-6 lg:grid-cols-[56%_44%] lg:items-end">
            <div>
              <span className="atlas-eyebrow">ECOSSISTEMA ATLAS</span>
              <h2 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-[2.15rem]">
                Soluções que se conectam.
                <br />
                Plataformas que escalam.
              </h2>
            </div>
            <div className="lg:justify-self-end lg:pb-1">
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Um ecossistema completo de produtos e serviços que trabalham em conjunto para acelerar o crescimento e a transformação digital.
              </p>
              <a href="#ecosystem-grid" className="mt-3 inline-flex h-9 items-center gap-4 rounded border border-white/20 px-4 text-xs text-white transition hover:border-violet-400/60 hover:bg-white/[0.04]">
                Ver todo o ecossistema
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div id="ecosystem-grid" className="mt-7 grid scroll-mt-28 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemUnits.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <Reveal key={unit.name} delay={index * 0.035}>
                  <article
                    className="group relative flex min-h-[145px] flex-col overflow-hidden rounded-lg border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.018] p-4 shadow-[0_16px_36px_rgba(0,0,0,.12)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]"
                    style={{ "--unit-accent": unit.accent } as CSSProperties}
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[var(--unit-accent)]">
                        <Icon className="h-7 w-7 stroke-[1.7]" />
                      </span>
                      <h3 className="pt-1 text-[15px] font-medium text-white">{unit.name}</h3>
                    </div>
                    <p className="mt-3 pr-4 text-[12px] leading-[1.55] text-slate-400">{unit.description}</p>
                    <MoveRight className="mt-auto h-4 w-4 self-end text-slate-200 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--unit-accent)]" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 border-b border-white/[0.07] bg-[#020713]">
        <div className="atlas-container grid gap-8 py-9 lg:grid-cols-[26%_74%] lg:items-center">
          <Reveal>
            <span className="atlas-eyebrow">PORQUÊ ATLAS?</span>
            <h2 className="mt-3 max-w-[300px] text-2xl font-medium leading-[1.15] tracking-[-0.025em] text-white sm:text-[2rem]">
              Unimos estratégia,
              <br />
              tecnologia e execução
              <br />
              para criar impacto real.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {atlasValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.05} className="h-full">
                  <article className="h-full border-white/[0.08] lg:border-l lg:px-6">
                    <Icon className="h-7 w-7 text-violet-500" />
                    <h3 className="mt-4 text-sm font-medium text-white">{value.title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.55] text-slate-400">{value.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="scroll-mt-20 border-b border-white/[0.07] bg-[#050a18]">
        <div className="atlas-container py-8">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="atlas-eyebrow">TECNOLOGIAS QUE UTILIZAMOS</span>
              <h2 className="mt-2 text-2xl font-medium leading-[1.1] tracking-[-0.02em] text-white">
                As melhores tecnologias.
                <br />
                Para os melhores resultados.
              </h2>
            </div>
            <button type="button" onClick={openTechnologies} className="atlas-secondary-button h-10 self-start px-5 text-xs sm:self-auto">
              Ver todas as tecnologias
            </button>
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;
              return (
                <Reveal key={technology.name} delay={index * 0.025}>
                  <div className="flex h-11 items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 text-[11px] font-medium text-slate-200 transition hover:border-violet-400/30 hover:bg-white/[0.05]">
                    <Icon className="h-4 w-4 shrink-0 text-blue-400" />
                    <span className="truncate">{technology.name}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-20 bg-[#020611]">
        <div className="atlas-container py-5 sm:py-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-[#5122a7] via-[#4937d5] to-[#2f76f3] px-6 py-6 shadow-[0_24px_70px_rgba(48,62,220,.2)] sm:px-9 sm:py-7">
              <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative grid gap-5 lg:grid-cols-[40%_30%_30%] lg:items-stretch">
                <div className="py-1">
                  <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.15rem]">
                    Vamos construir o
                    <br />
                    próximo projeto de sucesso.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-blue-100/80">
                    Fale com a Atlas e descubra como podemos transformar a sua ideia numa plataforma digital de impacto.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleConfiguredAction(siteConfig.bookingUrl)}
                  className="group flex min-h-28 items-center gap-4 rounded-lg border border-white/10 bg-black/10 p-5 text-left transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  <CalendarDays className="h-9 w-9 shrink-0 text-white" />
                  <span>
                    <span className="block text-sm font-medium text-white">Agendar Reunião</span>
                    <span className="mt-2 block text-[11px] leading-5 text-blue-100/75">Marque uma conversa estratégica com a nossa equipa.</span>
                  </span>
                  <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => handleConfiguredAction(siteConfig.whatsappUrl)}
                  className="group flex min-h-28 items-center gap-4 rounded-lg border border-white/10 bg-black/10 p-5 text-left transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  <MessageCircle className="h-9 w-9 shrink-0 text-white" />
                  <span>
                    <span className="block text-sm font-medium text-white">Falar no WhatsApp</span>
                    <span className="mt-2 block text-[11px] leading-5 text-blue-100/75">Fale connosco através do seu canal preferido.</span>
                  </span>
                  <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="recursos" className="scroll-mt-20 border-t border-white/[0.08] bg-[#020611]">
        <div className="atlas-container grid gap-9 py-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1.1fr_.7fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xs text-[11px] leading-[1.65] text-slate-500">
              A Atlas Global é uma empresa de Research, Architecture &amp; Platforms. Criamos soluções digitais inteligentes que impulsionam organizações e transformam o futuro.
            </p>
          </div>
          <FooterColumn title="NAVEGAÇÃO">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="footer-link">{item.label}</a>
            ))}
          </FooterColumn>
          <FooterColumn title="RECURSOS">
            <a href="#ecossistema" className="footer-link">Ecossistema</a>
            <a href="#tecnologias" className="footer-link">Tecnologias</a>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <button type="button" onClick={openContact} className="footer-link text-left">Falar com a Atlas</button>
          </FooterColumn>
          <FooterColumn title="CONTACTOS">
            <a href={`mailto:${siteConfig.email}`} className="footer-link">{siteConfig.email}</a>
            <span className="text-[11px] leading-5 text-slate-600">Outros canais serão disponibilizados após configuração.</span>
          </FooterColumn>
          <FooterColumn title="SIGA-NOS">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Atlas Global no GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-violet-400/50 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </FooterColumn>
        </div>
        <div className="atlas-container flex flex-col gap-3 border-t border-white/[0.07] py-4 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Atlas Global. Todos os direitos reservados.</span>
          <span>Research • Architecture • Platforms</span>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[9px] font-semibold tracking-[0.25em] text-slate-300">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
