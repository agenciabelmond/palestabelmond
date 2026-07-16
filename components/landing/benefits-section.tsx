import { Check } from "lucide-react"
import { CtaButton } from "./cta-button"

const benefits = [
  "O passo a passo para transformar sua recepção em uma equipe de conversão",
  "Scripts de atendimento por telefone e WhatsApp que fazem o paciente agendar",
  "Como fazer follow-up dos leads sem parecer insistente (e sem perder ninguém)",
  "Os erros silenciosos que fazem sua clínica perder pacientes todos os dias",
  "Indicadores simples para medir a conversão da sua recepção",
  "Como reduzir faltas e remarcações com um processo de confirmação eficiente",
]

export function BenefitsSection() {
  return (
    <section className="relative border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(55% 50% at 85% 100%, oklch(0.58 0.2 258 / 0.14), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">O que você vai levar</span>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-balance sm:text-5xl">
              Saia da palestra com um <span className="text-primary">plano prático</span> para converter mais
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Nada de teoria vazia. Você vai entender exatamente onde sua clínica perde pacientes e o que fazer, na
              prática, para reverter isso a partir da segunda-feira.
            </p>
            <div className="mt-8 hidden lg:block">
              <CtaButton>Garantir minha vaga</CtaButton>
            </div>
          </div>

          <ul className="grid gap-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-left"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="size-4" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="lg:hidden">
            <CtaButton className="w-full">Garantir minha vaga</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
