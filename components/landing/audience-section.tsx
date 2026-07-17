import { Archivo_Black, Poppins } from "next/font/google"
import {
  Building2,
  Check,
  Stethoscope,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

type AudienceItem = {
  icon: LucideIcon
  title: string
  text: string
}

const audience: AudienceItem[] = [
  {
    icon: Stethoscope,
    title: "Médicos, dentistas e profissionais da saúde",
    text: "Que atendem em consultórios ou clínicas e desejam proporcionar uma experiência mais clara, segura e profissional aos pacientes.",
  },
  {
    icon: Building2,
    title: "Donos e sócios de clínicas",
    text: "Que querem organizar melhor a operação, fortalecer a equipe e construir resultados mais consistentes no dia a dia.",
  },
  {
    icon: UserCog,
    title: "Gestores e coordenadores",
    text: "Responsáveis por acompanhar processos, orientar a equipe e garantir que cada oportunidade seja conduzida corretamente.",
  },
  {
    icon: Users,
    title: "Equipes de recepção e atendimento",
    text: "Que estão na linha de frente e querem atender com mais confiança, clareza e direcionamento até o agendamento.",
  },
]

export function AudienceSection() {
  return (
    <section
      id="para-quem-e"
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/20
        bg-[radial-gradient(ellipse_at_top,#2d2516_0%,#17130d_24%,#090909_58%,#030303_100%)]
      "
    >
      {/* Brilho superior discreto */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-230px]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(197,176,116,0.15)_0%,rgba(160,123,57,0.07)_38%,transparent_70%)]
          blur-3xl
        "
      />

      {/* Linha superior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#c5b074]/45
          to-transparent
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            items-start
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* Conteúdo principal */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-[#c5b074]
                "
              />

              <span
                className={`
                  ${poppins.className}
                  text-[0.72rem]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#d8c17d]
                  sm:text-sm
                `}
              >
                Para quem é
              </span>
            </div>

            <h2
              className={`
                ${archivoBlack.className}
                mt-5
                max-w-[560px]
                text-balance
                text-[2rem]
                uppercase
                leading-[1.07]
                tracking-[-0.04em]
                text-white
                sm:text-[2.55rem]
                lg:text-[2.25rem]
                xl:text-[2.4rem]
              `}
            >
              Para quem quer transformar atendimento em{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#f1dfaa]
                  via-[#d0b268]
                  to-[#a78340]
                  bg-clip-text
                  text-transparent
                "
              >
                crescimento real
              </span>
            </h2>

            <p
              className={`
                ${poppins.className}
                mt-6
                max-w-lg
                text-sm
                leading-[1.75]
                text-white/72
                sm:text-base
              `}
            >
              Esta palestra foi criada para profissionais, gestores e equipes
              de clínicas médicas, odontológicas e da área da saúde que desejam
              melhorar o atendimento, organizar os processos e aumentar os
              resultados.
            </p>

            {/* Frase de destaque */}
            <div
              className="
                mt-8
                border-l-2
                border-[#c5b074]
                bg-gradient-to-r
                from-[#c5b074]/10
                to-transparent
                px-5
                py-4
              "
            >
              <p
                className={`
                  ${poppins.className}
                  max-w-md
                  text-sm
                  font-semibold
                  leading-relaxed
                  text-white/90
                  sm:text-base
                `}
              >
                Não importa o tamanho da clínica. O que importa é estar
                preparado para aproveitar cada oportunidade que chega.
              </p>
            </div>
          </div>

          {/* Lista de públicos */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-[#b39755]/30
              bg-[linear-gradient(145deg,#17140e_0%,#0e0d0a_45%,#080808_100%)]
              shadow-[0_22px_60px_rgba(0,0,0,0.42)]
            "
          >
            {/* Linha superior do card */}
            <div
              aria-hidden="true"
              className="
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#d8c17d]/50
                to-transparent
              "
            />

            {audience.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className={`
                    group
                    relative
                    grid
                    grid-cols-[auto_1fr]
                    gap-4
                    px-5
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-white/[0.025]
                    sm:gap-5
                    sm:px-7
                    sm:py-7
                    lg:px-8
                    lg:py-7
                    ${
                      index !== audience.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }
                  `}
                >
                  {/* Barra lateral no hover */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      w-[2px]
                      scale-y-0
                      bg-[#c5b074]
                      transition-transform
                      duration-300
                      group-hover:scale-y-100
                    "
                  />

                  {/* Ícone */}
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#c5b074]/30
                      bg-[#c5b074]/10
                      text-[#e7d399]
                      transition-all
                      duration-300
                      group-hover:border-[#c5b074]/55
                      group-hover:bg-[#c5b074]/15
                      sm:size-12
                    "
                  >
                    <Icon
                      className="size-5 sm:size-[22px]"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="min-w-0">
                    <div className="flex items-start gap-3">
                      <h3
                        className={`
                          ${poppins.className}
                          flex-1
                          text-base
                          font-bold
                          leading-snug
                          text-white
                          sm:text-lg
                        `}
                      >
                        {item.title}
                      </h3>

                      <span
                        className="
                          mt-0.5
                          hidden
                          size-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#c5b074]/30
                          bg-[#c5b074]/10
                          text-[#e7d399]
                          sm:flex
                        "
                      >
                        <Check
                          className="size-3.5"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <p
                      className={`
                        ${poppins.className}
                        mt-2
                        max-w-xl
                        text-sm
                        leading-[1.7]
                        text-white/62
                        transition-colors
                        duration-300
                        group-hover:text-white/78
                      `}
                    >
                      {item.text}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}