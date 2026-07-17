
import { Archivo_Black, Poppins } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const reasons = [
  {
    subtitle: "Atendimento sem direção",
    text: "O paciente perde o interesse quando recebe respostas demoradas, genéricas ou sem um direcionamento claro para o agendamento.",
  },
  {
    subtitle: "Falta de acompanhamento",
    text: "Sem scripts, follow-ups e uma rotina organizada, boas oportunidades acabam esquecidas no meio das conversas.",
  },
  {
    subtitle: "Gestão sem indicadores",
    text: "Quando a clínica não acompanha respostas, agendamentos, comparecimentos e conversões, não consegue identificar onde está perdendo pacientes.",
  },
]

export function PainSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/25
        bg-[radial-gradient(ellipse_at_top,#4a3a1c_0%,#2b2112_18%,#15120c_38%,#070706_70%,#020202_100%)]
      "
    >
      {/* Glow dourado superior forte */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[620px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(226,209,155,0.32)_0%,rgba(197,160,75,0.18)_28%,rgba(126,92,31,0.08)_52%,transparent_72%)]
          blur-3xl
        "
      />

      {/* Glow esquerdo forte */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-64
          top-1/2
          hidden
          size-[650px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(180,135,47,0.16),rgba(120,83,25,0.06)_45%,transparent_70%)]
          blur-3xl
          lg:block
        "
      />

      {/* Glow direito forte */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-64
          bottom-[-180px]
          hidden
          size-[650px]
          rounded-full
          bg-[radial-gradient(circle,rgba(180,135,47,0.14),rgba(120,83,25,0.05)_45%,transparent_70%)]
          blur-3xl
          lg:block
        "
      />

      {/* Degradê central para dar profundidade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_20%,rgba(0,0,0,0.15)_65%,rgba(0,0,0,0.65)_100%)]
        "
      />

      {/* Grade discreta */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1180px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-16
        "
      >
        {/* ================= CABEÇALHO ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <span
            className={`
              ${poppins.className}
              text-[0.72rem]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#e0c77b]
              sm:text-sm
            `}
          >
            Esses 3 motivos explicam
          </span>

          <h2
            className={`
              ${archivoBlack.className}
              mx-auto
              mt-4
              max-w-[980px]
              text-[1.8rem]
              uppercase
              leading-[1.08]
              tracking-[-0.035em]
              text-white
              sm:text-[2.5rem]
              lg:text-[2.35rem]
              xl:text-[2.55rem]
            `}
          >
            Por que algumas clínicas recebem{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#fff0b5]
                via-[#d7b962]
                to-[#a38140]
                bg-clip-text
                text-transparent
              "
            >
              muitos leads
            </span>
            , mas continuam com a{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#fff0b5]
                via-[#d7b962]
                to-[#a38140]
                bg-clip-text
                text-transparent
              "
            >
              agenda vazia?
            </span>
          </h2>

          <p
            className={`
              ${poppins.className}
              mx-auto
              mt-5
              max-w-3xl
              text-[0.86rem]
              leading-[1.7]
              text-white/70
              sm:text-base
            `}
          >
            Na maioria das vezes, o problema não está na quantidade de
            oportunidades, mas na forma como cada contato é conduzido pela
            recepção.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-6
              h-[2px]
              w-28
              bg-gradient-to-r
              from-transparent
              via-[#e0c77b]
              to-transparent
              shadow-[0_0_18px_rgba(215,185,98,0.6)]
            "
          />
        </div>

        {/* ================= MOTIVOS ================= */}

        <div
          className={`
            ${poppins.className}
            mx-auto
            mt-9
            grid
            max-w-[860px]
            grid-cols-1
            gap-3
            lg:mt-11
            lg:max-w-none
            lg:grid-cols-3
            lg:gap-5
          `}
        >
          {reasons.map((reason) => (
            <article
              key={reason.subtitle}
              className="
                group
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[#b39755]/45
                bg-[linear-gradient(145deg,#211b10_0%,#100f0c_48%,#050505_100%)]
                px-5
                py-5
                shadow-[0_20px_55px_rgba(0,0,0,0.4)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#e0c77b]/80
                hover:shadow-[0_28px_80px_rgba(166,130,75,0.2)]
                sm:px-6
                sm:py-6
                lg:min-h-[250px]
                lg:rounded-[22px]
              "
            >
              {/* Brilho do card */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  size-56
                  rounded-full
                  bg-[radial-gradient(circle,rgba(226,209,155,0.22),transparent_68%)]
                  opacity-60
                  blur-xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      max-w-[220px]
                      text-[0.82rem]
                      font-bold
                      uppercase
                      leading-[1.35]
                      tracking-[0.12em]
                      text-[#e0c77b]
                      sm:text-[0.92rem]
                      lg:text-[0.88rem]
                    "
                  >
                    {reason.subtitle}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="
                      mt-2
                      h-[2px]
                      w-12
                      shrink-0
                      bg-gradient-to-r
                      from-[#e0c77b]
                      to-transparent
                      shadow-[0_0_10px_rgba(215,185,98,0.35)]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />
                </div>

                <p
                  className="
                    mt-5
                    text-[0.84rem]
                    leading-[1.7]
                    text-white/80
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-[0.95rem]
                    lg:mt-6
                    lg:text-[0.9rem]
                  "
                >
                  {reason.text}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mt-auto
                    hidden
                    pt-6
                    lg:block
                  "
                >
                  <div
                    className="
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#d7b962]/55
                      via-[#b39755]/20
                      to-transparent
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
