"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Evanilene Tolosa",
    image: "/EvanileneTolosa.png",
    comment:
      "Excelente empresa de treinamento! O conteúdo foi apresentado de forma clara e didática, tornando o aprendizado leve e produtivo. A experiência foi muito positiva, e recomendo a empresa a todos que buscam capacitação de qualidade.",
  },
  {
    name: "Viviane Mendes",
    image: "/VivianeMendes.png",
    comment:
      "Treinamento excelente! Conteúdo muito bem explicado, dinâmico e de fácil compreensão. Jhonnatha demonstrou domínio do assunto e conduziu tudo de forma clara, motivadora e descontraída. Foi uma experiência enriquecedora, agregou muito conhecimento e certamente fará diferença na prática do meu dia a dia aqui na clínica. Parabéns pela organização e qualidade!",
  },
  {
    name: "Lucas Martins de Castro",
    image: "/Lucas.png",
    comment:
      "Gostaria de parabenizar a Belmond e toda a sua equipe. Extremamente profissionais e altamente qualificados. Espero que tenhamos uma parceria de sucesso e estamos bem felizes com todo o acompanhamento.",
  },
  {
    name: "Luiz Cezar Freddi",
    image: "/Luiz.png",
    comment:
      "A melhor possível! Desde a explicação inicial, contratação, explicação do produto com Maestria e Diligência! Empresa que , ao meu ver, entrega mais do que o investimento!Destaque para o profissionalismo e facilidade de explicação detalhada, com foco no objetivo de treinar os colaboradores a serem a melhor linha de frente do consultório! Muito feliz já com os primeiros resultados!",
  },
  {
    name: "Alex Brum",
    image: "/AlexBrum.png",
    comment:
      "Equipe super qualificada, profissionais atenciosos, educados. Treinamentos com explicações detalhadas.",
  },
  {
    name: "Maria Eduarda Antunes",
    image: "/Maria.png",
    comment:
      "Ótima equipe, o treinamento e da forma que o Jhonnatha explicou tenho certeza que teremos bons resultados ! O apoio da equipe é contagiante.",
  },
  {
    name: "Taynara Bueno",
    image: "/TaynaraBueno.png",
    comment:
      "Jhonnatha é um profissional incrível! Entende muito sobre o marketing, argumentações e nos passa muita confiança e segurança em realizar o que precisa ser feito! Gostei muito do treinamento!",
  },
  {
    name: "Virgínia Reis",
    image: "/Virginia.png",
    comment:
      "Uma equipe qualificada, disposta a auxiliar com profissionalismo e atenção aos pequenos detalhes. Estou muito satisfeita com as modificações que fizeram nos nossos atendimentos.",
  },
]

export function Google() {
  const carouselRef = useRef<HTMLDivElement>(null)

  function scrollTestimonials(direction: "left" | "right") {
    const carousel = carouselRef.current

    if (!carousel) return

    const distance = Math.min(carousel.clientWidth * 0.88, 430)

    carousel.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="inscricao"
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/25
        bg-[radial-gradient(ellipse_at_top,#4a3a1c_0%,#2b2112_18%,#15120c_38%,#070706_70%,#020202_100%)]
        scroll-mt-20
      "
    >
      {/* Glow dourado superior */}
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

      {/* Glow esquerdo */}
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

      {/* Glow direito */}
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

      {/* Degradê de profundidade */}
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
          max-w-[1280px]
          px-4
          py-12
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        {/* Cabeçalho */}
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-[1.7rem]
              font-black
              uppercase
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-[2.55rem]
              lg:text-[3rem]
              lg:tracking-normal
              lg:[word-spacing:0.12em]
            "
          >
            Confira quem evoluiu com o nosso{" "}
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
              treinamento
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[0.9rem]
              leading-[1.7]
              text-white/70
              sm:text-base
            "
          >
            Histórias de clientes que aplicaram o que aprenderam e começaram a
            transformar seus resultados.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-5
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

        {/* Carrossel de depoimentos com controles laterais */}
        <div className="relative mt-[52px] sm:mt-16">
          <button
            type="button"
            onClick={() => scrollTestimonials("left")}
            aria-label="Ver depoimento anterior"
            aria-controls="testimonials-carousel"
            className="
              absolute
              left-0
              top-1/2
              z-30
              hidden
              size-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#d7b962]/55
              bg-black/85
              text-[#f1d98b]
              shadow-[0_12px_35px_rgba(0,0,0,0.5)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#f1d98b]/90
              hover:bg-[#1a160d]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#d7b962]/70
              sm:flex
            "
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>

          <div
            id="testimonials-carousel"
            ref={carouselRef}
            className="
              -mx-4
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              px-4
              pb-8
              scroll-smooth
              scroll-px-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:-mx-6
              sm:gap-6
              sm:px-14
              sm:scroll-px-14
              lg:-mx-8
              lg:px-16
              lg:scroll-px-16
            "
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="
                  group
                  relative
                  flex
                  min-h-[245px]
                  min-w-[86%]
                  snap-start
                  flex-col
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/70
                  bg-white
                  px-5
                  py-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_26px_65px_rgba(0,0,0,0.42)]
                  sm:min-w-[340px]
                  sm:max-w-[340px]
                  sm:px-6
                  sm:py-6
                  lg:min-w-[365px]
                  lg:max-w-[365px]
                "
              >
                {/* Detalhe decorativo */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-14
                    -top-14
                    size-40
                    rounded-full
                    bg-[radial-gradient(circle,rgba(224,199,123,0.2),transparent_70%)]
                  "
                />

                <Quote
                  aria-hidden="true"
                  className="absolute right-6 top-6 size-8 text-[#b39755]/16"
                />

                {/* Perfil */}
                <div className="relative flex items-center gap-4 pr-10">
                  <div
                    className="
                      size-14
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border-2
                      border-[#d7b962]/65
                      bg-[#ece7dc]
                      p-0.5
                      shadow-[0_5px_18px_rgba(179,151,85,0.28)]
                    "
                  >
                    <img
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      className="h-full w-full rounded-full object-cover"
                      draggable={false}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[1rem] font-bold text-[#171717]">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>

                {/* Comentário */}
                <p
                  className="
                    relative
                    mt-6
                    text-[0.95rem]
                    leading-[1.75]
                    text-black/70
                    sm:mt-4
                    sm:text-base
                  "
                >
                  “{testimonial.comment}”
                </p>

                <div className="relative mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-[#b39755]/35 via-[#b39755]/10 to-transparent" />
                </div>
              </article>
            ))}

            {/* Espaço final para o último card não encostar na borda */}
            <div aria-hidden="true" className="w-px shrink-0" />
          </div>

          <button
            type="button"
            onClick={() => scrollTestimonials("right")}
            aria-label="Ver próximo depoimento"
            aria-controls="testimonials-carousel"
            className="
              absolute
              right-0
              top-1/2
              z-30
              hidden
              size-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#d7b962]/55
              bg-black/85
              text-[#f1d98b]
              shadow-[0_12px_35px_rgba(0,0,0,0.5)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#f1d98b]/90
              hover:bg-[#1a160d]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#d7b962]/70
              sm:flex
            "
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
        </div>

        {/* Indicador mobile */}
        <div className="-mt-3 flex items-center justify-center gap-2 sm:hidden">
          <ChevronLeft className="size-4 text-[#d7b962]/65" />

          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/40">
            Arraste para o lado
          </span>

          <ChevronRight className="size-4 text-[#d7b962]/65" />
        </div>
      </div>
    </section>
  )
}