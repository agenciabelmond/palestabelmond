
import { Check } from "lucide-react"
import { Archivo_Black, Poppins } from "next/font/google"

import { CtaButton } from "./cta-button"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const benefits = [
  {
    title: "Recepção que converte",
    mobileText:
      "Aprenda como conduzir cada conversa com clareza até o agendamento.",
    desktopText:
      "Aprenda o passo a passo para organizar o atendimento e conduzir cada conversa até uma próxima ação clara.",
  },
  {
    title: "Scripts de atendimento",
    mobileText:
      "Use perguntas e respostas que geram segurança e direcionam o paciente.",
    desktopText:
      "Tenha estruturas de mensagens e ligações para responder dúvidas, gerar confiança e apresentar horários.",
  },
  {
    title: "Follow-up estratégico",
    mobileText:
      "Saiba quando e como retomar o contato sem pressionar o potencial paciente.",
    desktopText:
      "Entenda como criar uma rotina de retomadas que mantém a oportunidade aquecida sem parecer insistente.",
  },
  {
    title: "Erros silenciosos",
    mobileText:
      "Identifique falhas no atendimento que fazem oportunidades desistirem no caminho.",
    desktopText:
      "Reconheça os detalhes do atendimento que enfraquecem a decisão do paciente e diminuem os agendamentos.",
  },
  {
    title: "Indicadores de conversão",
    mobileText:
      "Acompanhe os números que revelam onde sua recepção está perdendo pacientes.",
    desktopText:
      "Saiba quais números acompanhar para medir respostas, agendamentos, comparecimentos e conversão.",
  },
  {
    title: "Menos faltas",
    mobileText:
      "Crie uma confirmação eficiente para reduzir faltas, atrasos e remarcações.",
    desktopText:
      "Monte um processo de confirmação que valoriza o horário reservado e protege a agenda da clínica.",
  },
]

export function BenefitsSection() {
  return (
    <section
      id="aprendizado"
      className="
        relative
        overflow-hidden
        border-y
        border-[#b39755]/15
        bg-[radial-gradient(ellipse_at_bottom_left,#604719_0%,#30230f_16%,#120e08_38%,#050505_68%,#020202_100%)]
      "
    >
      {/* ================= GLOW PRINCIPAL FORTE ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[260px]
          -left-[180px]
          z-0
          h-[850px]
          w-[850px]
          rounded-full
          bg-[radial-gradient(circle,rgba(226,209,155,0.62)_0%,rgba(197,160,75,0.42)_20%,rgba(126,92,31,0.24)_42%,rgba(80,55,18,0.1)_58%,transparent_75%)]
          blur-3xl
        "
      />

      {/* ================= GLOW SUPERIOR ESQUERDO ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          -top-[250px]
          z-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(197,160,75,0.22),rgba(126,92,31,0.1)_42%,transparent_72%)]
          blur-3xl
        "
      />

      {/* ================= GLOW DIREITO ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[38%]
          z-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.16),rgba(126,92,31,0.05)_45%,transparent_72%)]
          blur-3xl
        "
      />

      {/* ================= DEGRADÊ DE PROFUNDIDADE ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[linear-gradient(120deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.2)_42%,rgba(0,0,0,0.72)_100%)]
        "
      />

      {/* ================= DEGRADÊ INFERIOR ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-[28%]
          bg-gradient-to-t
          from-[#020202]
          via-[#050505]/45
          to-transparent
        "
      />

      {/* ================= GRADE ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.018]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
          lg:py-10
        "
      >
        {/* ================= CABEÇALHO ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <span
            className="
              text-[0.75rem]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#c5b074]
              sm:text-sm
            "
          >
            O que você vai aprender
          </span>

          <h2
            className={`
              ${archivoBlack.className}
              mt-3
              uppercase
              tracking-[-0.035em]
              text-white
              lg:mt-2
            `}
          >
            {/* MOBILE */}
            <span
              className="
                block
                text-[1.65rem]
                leading-[1.13]
                sm:text-[2.2rem]
                lg:hidden
              "
            >
              Você não vai sair apenas inspirado. Vai sair{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#e7d399]
                  via-[#c7a961]
                  to-[#a38140]
                  bg-clip-text
                  text-transparent
                "
              >
                sabendo o que fazer.
              </span>
            </span>

            {/* DESKTOP */}
            <span
              className="
                hidden
                text-[2rem]
                leading-[1.02]
                lg:block
                xl:text-[2.2rem]
              "
            >
              <span className="block whitespace-nowrap">
                Você não vai sair apenas
              </span>

              <span className="mt-1 block whitespace-nowrap">
                inspirado. Vai sair
              </span>

              <span
                className="
                  mt-1
                  block
                  whitespace-nowrap
                  bg-gradient-to-r
                  from-[#e7d399]
                  via-[#c7a961]
                  to-[#a38140]
                  bg-clip-text
                  text-transparent
                "
              >
                sabendo o que fazer.
              </span>
            </span>
          </h2>

          <p
            className={`
              ${poppins.className}
              mx-auto
              mt-3
              max-w-2xl
              text-[0.83rem]
              leading-relaxed
              text-white/60
              sm:text-[0.95rem]
              lg:mt-2
              lg:text-[0.9rem]
            `}
          >
            Conteúdo prático para identificar onde sua clínica perde pacientes
            e melhorar a conversão da recepção.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-5
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-[#d7b962]
              to-transparent
              lg:mt-3
            "
          />
        </div>

        {/* ================= CARDS MOBILE ================= */}

        <div
          className={`
            ${poppins.className}
            mx-auto
            mt-7
            flex
            max-w-[760px]
            flex-col
            gap-2
            lg:hidden
          `}
        >
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-[#b39755]/50
                bg-gradient-to-r
                from-[#11100d]
                via-[#090909]
                to-[#040404]
                px-3.5
                py-3
                transition-all
                duration-300
                hover:border-[#c5b074]/85
                sm:px-5
                sm:py-3.5
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-10
                  top-1/2
                  size-32
                  -translate-y-1/2
                  rounded-full
                  bg-[radial-gradient(circle,rgba(197,176,116,0.11),transparent_68%)]
                "
              />

              <div className="relative flex min-h-[76px] items-center">
                <div
                  className="
                    flex
                    w-[68px]
                    shrink-0
                    items-center
                    justify-center
                    border-r
                    border-[#b39755]/55
                    pr-3.5
                    sm:w-[82px]
                    sm:pr-5
                  "
                >
                  <div
                    className="
                      flex
                      size-[44px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#b39755]/35
                      bg-[radial-gradient(circle,rgba(197,176,116,0.18),rgba(197,176,116,0.04)_62%,transparent_75%)]
                      shadow-[0_0_20px_rgba(197,176,116,0.12)]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:size-[50px]
                    "
                  >
                    <Check
                      aria-hidden="true"
                      strokeWidth={2.5}
                      className="
                        size-[22px]
                        text-[#d7b962]
                        drop-shadow-[0_0_8px_rgba(215,185,98,0.3)]
                      "
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1 pl-4 sm:pl-5">
                  <h3
                    className="
                      text-[0.76rem]
                      font-bold
                      uppercase
                      leading-tight
                      tracking-[0.12em]
                      text-[#d7b962]
                      sm:text-[0.86rem]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[0.78rem]
                      font-normal
                      leading-[1.55]
                      text-white/85
                      sm:text-[0.9rem]
                    "
                  >
                    {benefit.mobileText}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CARDS DESKTOP ================= */}

        <div
          className={`
            ${poppins.className}
            mt-7
            hidden
            grid-cols-3
            gap-3.5
            lg:grid
          `}
        >
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="
                group
                relative
                flex
                min-h-[185px]
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.09]
                bg-[linear-gradient(145deg,rgba(255,255,255,0.065)_0%,rgba(197,176,116,0.055)_42%,rgba(5,5,5,0.95)_100%)]
                p-[1px]
                shadow-[0_20px_55px_rgba(0,0,0,0.35)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#d7b962]/45
                hover:shadow-[0_30px_80px_rgba(166,130,75,0.16)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-[72%]
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#e4cc87]/70
                  to-transparent
                  opacity-70
                  transition-all
                  duration-500
                  group-hover:w-[90%]
                  group-hover:opacity-100
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  size-52
                  rounded-full
                  bg-[radial-gradient(circle,rgba(226,209,155,0.16),transparent_68%)]
                  opacity-45
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:-right-16
                  group-hover:-top-16
                  group-hover:opacity-90
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-28
                  -left-24
                  size-56
                  rounded-full
                  bg-[radial-gradient(circle,rgba(166,130,75,0.12),transparent_70%)]
                  opacity-40
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-80
                "
              />

              <div
                className="
                  relative
                  flex
                  h-full
                  flex-1
                  flex-col
                  overflow-hidden
                  rounded-[21px]
                  bg-[linear-gradient(145deg,#13120f_0%,#0b0b0a_50%,#050505_100%)]
                  p-5
                "
              >
                <div
                  className="
                    relative
                    flex
                    size-[44px]
                    items-center
                    justify-center
                    rounded-[16px]
                    border
                    border-[#d7b962]/30
                    bg-[linear-gradient(145deg,rgba(226,209,155,0.18),rgba(166,130,75,0.07))]
                    text-[#e4cc87]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_30px_rgba(166,130,75,0.12)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:border-[#e4cc87]/60
                    group-hover:bg-[linear-gradient(145deg,rgba(226,209,155,0.26),rgba(166,130,75,0.1))]
                    group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_40px_rgba(166,130,75,0.22)]
                  "
                >
                  <Check
                    aria-hidden="true"
                    strokeWidth={2.7}
                    className="
                      size-[21px]
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <h3
                  className="
                    relative
                    mt-3
                    text-[0.9rem]
                    font-bold
                    uppercase
                    leading-[1.25]
                    tracking-[0.09em]
                    text-[#ead594]
                    transition-colors
                    duration-300
                    group-hover:text-[#f4e4b3]
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    relative
                    mt-2
                    text-[0.79rem]
                    font-normal
                    leading-[1.5]
                    text-white/70
                    transition-colors
                    duration-300
                    group-hover:text-white/85
                    xl:text-[0.82rem]
                  "
                >
                  {benefit.desktopText}
                </p>

                <div
                  className="
                    relative
                    mt-auto
                    flex
                    items-center
                    gap-3
                    pt-3
                  "
                >
                  <span
                    className="
                      h-px
                      w-7
                      bg-gradient-to-r
                      from-[#d7b962]
                      to-[#d7b962]/10
                      transition-all
                      duration-500
                      group-hover:w-12
                    "
                  />

                  <span
                    className="
                      text-[0.58rem]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/45
                      transition-colors
                      duration-300
                      group-hover:text-[#d7b962]/80
                    "
                  >
                    Aplicação prática
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CHAMADA FINAL ================= */}

        <div
          className="
            relative
            mt-7
            overflow-hidden
            rounded-[18px]
            border
            border-[#b39755]/40
            bg-gradient-to-r
            from-[#17140c]
            via-[#0d0c09]
            to-[#171109]
            px-5
            py-5
            text-center
            shadow-[0_20px_70px_rgba(166,130,75,0.09)]
            sm:px-8
            sm:py-6
            lg:mt-7
            lg:flex
            lg:items-center
            lg:justify-between
            lg:gap-6
            lg:px-6
            lg:py-4
            lg:text-left
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              top-1/2
              size-64
              -translate-y-1/2
              rounded-full
              bg-[#d7b962]/10
              blur-3xl
            "
          />

          <div className="relative">
            <span
              className="
                text-[0.65rem]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#c5b074]
              "
            >
              Conteúdo direto ao ponto
            </span>

            <h3
              className={`
                ${archivoBlack.className}
                mt-2
                max-w-2xl
                text-[1.25rem]
                uppercase
                leading-[1.1]
                tracking-[-0.025em]
                text-white
                sm:text-[1.5rem]
              `}
            >
              Um plano prático para aplicar na sua clínica.
            </h3>

            <p
              className={`
                ${poppins.className}
                mx-auto
                mt-2
                max-w-xl
                text-[0.8rem]
                leading-relaxed
                text-white/65
                sm:text-sm
                lg:mx-0
              `}
            >
              Sem teoria vazia. Estratégias para melhorar o próximo atendimento
              da sua equipe.
            </p>
          </div>

          <div
            className="
              relative
              mt-4
              flex
              shrink-0
              justify-center
              lg:mt-0
            "
          >
            <CtaButton className="w-full sm:w-auto">
              Garantir minha vaga
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}


