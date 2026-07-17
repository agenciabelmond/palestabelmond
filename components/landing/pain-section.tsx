import {
  PhoneOff,
  MessageSquareX,
  CalendarX,
  TrendingDown,
  AlertTriangle,
} from "lucide-react"
import { Archivo_Black } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

const pains = [
  {
    icon: PhoneOff,
    title: "LIGAÇÕES",
    text: "O paciente liga. Sua equipe explica. E ele nunca agenda.",
    desktopText:
      "O paciente liga, sua equipe explica o tratamento e responde às dúvidas, mas encerra a conversa sem conduzir para o agendamento.",
    result: "Conversas sem direcionamento",
  },
  {
    icon: MessageSquareX,
    title: "WHATSAPP",
    text: "Você paga para gerar leads e deixa oportunidades quentes esperando.",
    desktopText:
      "Você investe para gerar contatos, mas muitos leads ficam esperando, recebem respostas genéricas ou não são acompanhados.",
    result: "Leads quentes esfriando",
  },
  {
    icon: CalendarX,
    title: "AGENDA",
    text: "Faltas e horários vazios continuam custando dinheiro todos os dias.",
    desktopText:
      "Pacientes não confirmam, faltam à consulta e sua equipe percebe o problema somente quando o horário já está vazio.",
    result: "Horários vazios na agenda",
  },
  {
    icon: TrendingDown,
    title: "MARKETING",
    text: "Mais contatos entrando. Poucos pacientes chegando até a consulta.",
    desktopText:
      "As campanhas geram mensagens e ligações, mas poucos contatos avançam até a avaliação e chegam realmente à clínica.",
    result: "Investimento sem conversão",
  },
]

export function PainSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/15
        bg-black
      "
    >
      {/* Efeito esquerdo somente no desktop */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-44
          top-12
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.075),transparent_68%)]
          blur-2xl
          lg:block
        "
      />

      {/* Efeito direito somente no desktop */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          hidden
          h-[400px]
          w-[400px]
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.05),transparent_68%)]
          blur-3xl
          lg:block
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          pb-12
          pt-0
          md:pb-16
          md:pt-0
          lg:grid
          lg:max-w-[1180px]
          lg:grid-cols-[0.8fr_1.2fr]
          lg:items-start
          lg:gap-10
          lg:px-8
          lg:py-16
        "
      >
        {/* ================= MOBILE E TABLET ================= */}

        <div className="mx-auto max-w-3xl text-center lg:hidden">
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.25em] text-[#c5b074] sm:text-sm">
            O problema não é o que você pensa
          </span>

          <h2 className="mt-4 text-balance font-display text-3xl uppercase leading-[1.25] text-white sm:text-5xl">
            Você não precisa de{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              mais leads
            </span>
            . Precisa{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              parar de perder
            </span>{" "}
            os que já chegam.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Todos os dias, clínicas investem em marketing para gerar novas
            oportunidades e perdem boa parte delas na recepção, no telefone e
            no WhatsApp.
          </p>
        </div>

        {/* ================= TEXTO DESKTOP ================= */}

        <div className="hidden lg:block">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#b39755]/30
              bg-[#c5b074]/[0.06]
              px-3.5
              py-1.5
            "
          >
            <AlertTriangle
              aria-hidden="true"
              strokeWidth={1.8}
              className="size-3.5 text-[#d7b962]"
            />

            <span
              className="
                text-[0.62rem]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#c5b074]
              "
            >
              O problema não é o que você pensa
            </span>
          </div>

          <h2
            className={`
              ${archivoBlack.className}
              mt-5
              text-[2.65rem]
              uppercase
              leading-[1.03]
              tracking-[-0.035em]
              text-white
              xl:text-[2.95rem]
            `}
          >
            Você não precisa de{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#f0dda2]
                via-[#c7a961]
                to-[#a38140]
                bg-clip-text
                text-transparent
              "
            >
              mais leads.
            </span>

            <span className="mt-1.5 block">
              Precisa parar de perder os que já chegam.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[430px]
              text-[0.92rem]
              leading-6
              text-white/60
            "
          >
            Todos os dias, clínicas investem em marketing para gerar
            oportunidades, mas perdem boa parte delas durante o atendimento,
            no telefone, no WhatsApp e na organização da agenda.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[820px]
            flex-col
            gap-2.5
            lg:mt-0
            lg:grid
            lg:max-w-none
            lg:grid-cols-2
            lg:gap-3
          "
        >
          {pains.map((pain, index) => {
            const Icon = pain.icon

            return (
              <article
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
                  lg:flex
                  lg:min-h-[230px]
                  lg:flex-col
                  lg:rounded-[18px]
                  lg:border-[#b39755]/40
                  lg:bg-gradient-to-br
                  lg:from-[#10100f]
                  lg:via-[#080808]
                  lg:to-[#030303]
                  lg:p-5
                  lg:hover:-translate-y-0.5
                "
              >
                {/* Numeração somente no desktop */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-4
                    top-3
                    hidden
                    text-5xl
                    font-black
                    leading-none
                    text-white/[0.025]
                    lg:block
                  "
                >
                  0{index + 1}
                </span>

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
                    lg:-left-10
                    lg:-top-10
                    lg:h-36
                    lg:w-36
                    lg:translate-y-0
                  "
                />

                <div
                  className="
                    relative
                    flex
                    min-h-[82px]
                    items-center
                    lg:min-h-0
                    lg:items-start
                    lg:gap-4
                  "
                >
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
                      lg:w-auto
                      lg:border-r-0
                      lg:pr-0
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
                        lg:size-[54px]
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.8}
                        className="
                          size-[26px]
                          text-[#d7b962]
                          drop-shadow-[0_0_8px_rgba(215,185,98,0.25)]
                          sm:size-[30px]
                          lg:size-[25px]
                        "
                      />
                    </div>
                  </div>

                  <div className="flex-1 pl-4 sm:pl-6 lg:pl-0">
                    <h3
                      className="
                        text-[0.72rem]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#d5b45c]
                        sm:text-base
                        lg:text-[0.82rem]
                      "
                    >
                      {pain.title}
                    </h3>

                    {/* Texto original no mobile */}
                    <p
                      className="
                        mt-1
                        max-w-2xl
                        text-[0.8rem]
                        font-normal
                        leading-relaxed
                        text-white/90
                        sm:text-[0.95rem]
                        lg:hidden
                      "
                    >
                      {pain.text}
                    </p>

                    {/* Texto maior somente no desktop */}
                    <p
                      className="
                        mt-2
                        hidden
                        text-[0.82rem]
                        leading-[1.6]
                        text-white/80
                        lg:block
                      "
                    >
                      {pain.desktopText}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    relative
                    mt-auto
                    hidden
                    items-center
                    gap-2
                    border-t
                    border-[#b39755]/15
                    pt-3.5
                    lg:flex
                  "
                >
                  <span
                    className="
                      size-1.5
                      shrink-0
                      rounded-full
                      bg-[#d7b962]
                      shadow-[0_0_8px_rgba(215,185,98,0.5)]
                    "
                  />

                  <span
                    className="
                      text-[0.61rem]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-white/50
                    "
                  >
                    {pain.result}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}