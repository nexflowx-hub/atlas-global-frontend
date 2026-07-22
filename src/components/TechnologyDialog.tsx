"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { technologyGroups } from "@/data/homepage";

export function TechnologyDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("atlas:open-technologies", handler);
    return () => window.removeEventListener("atlas:open-technologies", handler);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] max-h-[85vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-[#081121] p-6 shadow-2xl outline-none sm:p-8">
          <Dialog.Close className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Dialog.Close>
          <span className="atlas-eyebrow">ARQUITETURA TECNOLÓGICA</span>
          <Dialog.Title className="mt-3 pr-12 text-2xl font-semibold text-white sm:text-3xl">
            Tecnologias utilizadas e previstas na arquitetura Atlas.
          </Dialog.Title>
          <Dialog.Description className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Selecionamos tecnologia de acordo com o contexto, a segurança, a escalabilidade e o ciclo de vida de cada solução.
          </Dialog.Description>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => (
              <section key={group.name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <h3 className="text-sm font-semibold text-white">{group.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
