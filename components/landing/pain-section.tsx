import {
  PhoneOff,
  MessageSquareX,
  CalendarX,
  TrendingDown,
} from "lucide-react"

const pains = [
  {
    icon: PhoneOff,
    title: "LIGAÇÕES",
    text: "O paciente liga. Sua equipe explica. E ele nunca agenda.",
  },
  {
    icon: MessageSquareX,
    title: "WHATSAPP",
    text: "Você paga para gerar leads e deixa oportunidades quentes esperando.",
  },
  {
    icon: CalendarX,
    title: "AGENDA",
    text: "Faltas e horários vazios continuam custando dinheiro todos os dias.",
  },
  {
    icon: TrendingDown,
    title: "MARKETING",
    text: "Mais contatos entrando. Poucos pacientes chegando até a consulta.",
  },
]

export function PainSection() {
  return (
    <section className="border-t border-[#b39755]/15 bg-black">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-0 md:pb-16 md:pt-0">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.25em] text-[#c5b074] sm:text-sm">
            O problema não é o que você pensa
          </span>

          <h2 className="mt-4 text-balance font-display text-3xl uppercase leading-[1.25] sm:text-5xl">
            Você não precisa de{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              mais leads.
            </span>{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              Precisa parar de perder os que já chegam.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Todos os dias, clínicas investem em marketing para gerar novas
            oportunidades e perdem boa parte delas na recepção, no telefone e
            no WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[820px] flex-col gap-2.5">
          {pains.map((pain) => {
            const Icon = pain.icon

            return (
              <div
                key={pain.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#b39755]/55
                  bg-gradient-to-r
                  from-[#0a0a0a]
                  via-[#070707]
                  to-[#030303]
                  px-3.5
                  py-3.5
                  transition-all
                  duration-300
                  hover:border-[#c5b074]/90
                  sm:px-5
                  sm:py-4
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-24
                    w-32
                    -translate-y-1/2
                    bg-[radial-gradient(circle,rgba(197,176,116,0.09),transparent_68%)]
                  "
                />

                <div className="relative flex min-h-[82px] items-center">
                  <div
                    className="
                      flex
                      w-[74px]
                      shrink-0
                      items-center
                      justify-center
                      border-r
                      border-[#b39755]/70
                      pr-3.5
                      sm:w-[118px]
                      sm:pr-5
                    "
                  >
                    <div
                      className="
                        flex
                        size-[52px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#b39755]/25
                        bg-[radial-gradient(circle,rgba(197,176,116,0.13),rgba(197,176,116,0.02)_60%,transparent_75%)]
                        shadow-[0_0_22px_rgba(197,176,116,0.12)]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                        sm:size-16
                      "
                    >
                      <Icon
                        strokeWidth={1.8}
                        className="
                          size-[26px]
                          text-[#d7b962]
                          drop-shadow-[0_0_8px_rgba(215,185,98,0.25)]
                          sm:size-[30px]
                        "
                      />
                    </div>
                  </div>

                  <div className="flex-1 pl-4 sm:pl-6">
                    <h3
                      className="
                        text-[0.72rem]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#d5b45c]
                        sm:text-base
                      "
                    >
                      {pain.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-2xl
                        text-[0.8rem]
                        font-normal
                        leading-relaxed
                        text-white/90
                        sm:text-[0.95rem]
                      "
                    >
                      {pain.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

       
      </div>
    </section>
  )
}