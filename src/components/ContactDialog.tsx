"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, Send, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Indique o seu nome."),
  email: z.string().email("Indique um endereço de email válido."),
  company: z.string().optional(),
  country: z.string().optional(),
  interest: z.string().min(1, "Selecione uma área de interesse."),
  channel: z.string().min(1, "Selecione o canal preferido."),
  description: z
    .string()
    .min(20, "Descreva o projeto com pelo menos 20 caracteres.")
    .max(3000, "A descrição não deve ultrapassar 3000 caracteres."),
  consent: z.boolean().refine((value) => value, {
    message: "É necessário autorizar o contacto.",
  }),
  website: z.string().max(0, "Submissão inválida."),
});

type ContactForm = z.infer<typeof contactSchema>;

const interests = [
  "Atlas Platform",
  "Atlas Advisory",
  "Atlas Intelligence",
  "Atlas Financial",
  "Atlas Cloud",
  "Atlas Labs",
  "Atlas Research",
  "Parceria",
  "Questão geral",
];

const channels = ["Email", "WhatsApp", "Telegram", "Reunião online"];

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener("atlas:open-contact", handleOpen);
    return () => window.removeEventListener("atlas:open-contact", handleOpen);
  }, []);

  const defaultValues = useMemo<ContactForm>(
    () => ({
      name: "",
      email: "",
      company: "",
      country: "",
      interest: "",
      channel: "Email",
      description: "",
      consent: false,
      website: "",
    }),
    [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactForm) => {
    const subject = encodeURIComponent(
      `Novo contacto Atlas Global — ${values.interest}`,
    );
    const body = encodeURIComponent(
      [
        `Nome: ${values.name}`,
        `Email: ${values.email}`,
        `Empresa: ${values.company || "Não indicada"}`,
        `País: ${values.country || "Não indicado"}`,
        `Área: ${values.interest}`,
        `Canal preferido: ${values.channel}`,
        "",
        "Descrição:",
        values.description,
      ].join("\n"),
    );

    setSubmitted(true);
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_self",
    );
  };

  const closeAndReset = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      window.setTimeout(() => {
        reset(defaultValues);
        setSubmitted(false);
      }, 250);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={closeAndReset}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-sm data-[state=open]:animate-[fadeIn_.2s_ease-out]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-[#081121] p-5 shadow-[0_30px_120px_rgba(0,0,0,.7)] outline-none sm:p-8">
          <Dialog.Close className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Dialog.Close>

          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center px-4 text-center">
              <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <Dialog.Title className="text-2xl font-semibold text-white">
                Pedido preparado
              </Dialog.Title>
              <Dialog.Description className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                Abrimos o seu cliente de email com a mensagem preenchida. Confirme o envio para que a nossa equipa a receba em {siteConfig.email}.
              </Dialog.Description>
              <button
                type="button"
                onClick={() => closeAndReset(false)}
                className="mt-7 inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950"
              >
                Concluir
              </button>
            </div>
          ) : (
            <>
              <div className="pr-12">
                <span className="atlas-eyebrow">FALAR COM A ATLAS</span>
                <Dialog.Title className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Conte-nos o que pretende construir.
                </Dialog.Title>
                <Dialog.Description className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Partilhe o contexto do projeto. A nossa equipa fará uma primeira leitura estratégica e responderá através do canal indicado.
                </Dialog.Description>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-7 grid gap-4 sm:grid-cols-2">
                <FormField label="Nome" error={errors.name?.message}>
                  <input className="atlas-input" autoComplete="name" {...register("name")} />
                </FormField>
                <FormField label="Email" error={errors.email?.message}>
                  <input className="atlas-input" type="email" autoComplete="email" {...register("email")} />
                </FormField>
                <FormField label="Empresa (opcional)" error={errors.company?.message}>
                  <input className="atlas-input" autoComplete="organization" {...register("company")} />
                </FormField>
                <FormField label="País (opcional)" error={errors.country?.message}>
                  <input className="atlas-input" autoComplete="country-name" {...register("country")} />
                </FormField>
                <FormField label="Área de interesse" error={errors.interest?.message}>
                  <select className="atlas-input" {...register("interest")}>
                    <option value="">Selecionar</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Canal preferido" error={errors.channel?.message}>
                  <select className="atlas-input" {...register("channel")}>
                    {channels.map((channel) => (
                      <option key={channel} value={channel}>{channel}</option>
                    ))}
                  </select>
                </FormField>
                <div className="sm:col-span-2">
                  <FormField label="Descrição do projeto" error={errors.description?.message}>
                    <textarea className="atlas-input min-h-32 resize-y py-3" {...register("description")} />
                  </FormField>
                </div>

                <input
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] opacity-0"
                  {...register("website")}
                />

                <label className="sm:col-span-2 flex cursor-pointer items-start gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] p-4 text-xs leading-5 text-slate-400">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-white/20 accent-violet-500"
                    {...register("consent")}
                  />
                  <span>
                    Autorizo a Atlas Global a utilizar estes dados exclusivamente para responder ao meu pedido de contacto.
                    {errors.consent?.message && (
                      <span className="mt-1 block text-rose-400">{errors.consent.message}</span>
                    )}
                  </span>
                </label>

                <div className="sm:col-span-2 flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(79,70,229,.28)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
                  >
                    {isSubmitting ? "A preparar..." : "Preparar mensagem"}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-slate-200">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-rose-400">{error}</span>}
    </label>
  );
}
