import { Stethoscope, Users, Building2, UserCog } from "lucide-react"

const audience = [
  {
    icon: Stethoscope,
    title: "Dentistas e médicos donos de clínica",
    text: "Que investem em marketing mas sentem que o retorno some no meio do caminho.",
  },
  {
    icon: UserCog,
    title: "Gestores e coordenadores",
    text: "Responsáveis por transformar contatos em consultas e organizar a rotina da recepção.",
  },
  {
    icon: Users,
    title: "Equipes de recepção e atendimento",
    text: "Que estão na linha de frente e querem aprender a conduzir o paciente até o agendamento.",
  },
  {
    icon: Building2,
    title: "Clínicas de qualquer porte",
    text: "Que recebem leads todos os dias e querem parar de deixar dinheiro na mesa.",
  },
]

export function AudienceSection() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Para quem é</span>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-balance sm:text-5xl">
            Feita para quem vive o dia a dia de uma <span className="text-primary">clínica que quer crescer</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
