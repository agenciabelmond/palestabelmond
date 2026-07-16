import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react"
import { CtaButton } from "./cta-button"

const details = [
  { icon: CalendarDays, label: "Data", value: "23 de setembro de 2026" },
  { icon: Clock, label: "Dia", value: "quarta-feira" },
  { icon: MapPin, label: "Local", value: "Porto de Gale — Rio Grande, RS" },
]

export function FinalCta() {
  return (
    <section id="inscricao" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 text-center sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 0%, oklch(0.58 0.2 258 / 0.22), transparent 65%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
              <Ticket className="size-4" />
              Últimas vagas disponíveis
            </span>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[0.95] text-balance sm:text-5xl">
              Garanta agora sua vaga e pare de <span className="text-primary">perder pacientes</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              São ingressos limitados para um evento presencial e exclusivo em Rio Grande/RS. Quando esgotar, não haverá
              nova turma.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-xl border border-border bg-background px-4 py-4"
                >
                  <item.icon className="size-5 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
              <CtaButton className="w-full sm:w-auto">Garantir minha vaga</CtaButton>
              <p className="text-sm font-medium text-muted-foreground">
                Vagas limitadas · Garanta a sua antes que esgote
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
