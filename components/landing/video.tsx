"use client"

import { Archivo_Black } from "next/font/google"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

export function VideoSection() {
  function handleCtaClick() {
    window.dispatchEvent(new Event("open-registration-modal"))
  }

  return (
    <section
      id="depoimentos"
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/15
        bg-black
      "
    >
      {/* Brilho de fundo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.08),transparent_68%)]
          blur-2xl
          lg:h-[340px]
          lg:w-[340px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          py-12
          sm:py-16
          lg:py-10
        "
      >
        {/* Cabeçalho */}
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
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
            Resultados reais
          </span>

          <h2
            className={`
              ${archivoBlack.className}
              mt-4
              text-balance
              text-[1.65rem]
              uppercase
              leading-[1.1]
              tracking-[-0.03em]
              text-white
              sm:text-[2rem]
              lg:mt-3
              lg:text-[2.1rem]
              lg:leading-[1.06]
              lg:tracking-[-0.035em]
            `}
          >
            {/* Mobile e tablet */}
            <span className="lg:hidden">
              Confira o depoimento de quem fez a{" "}
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
                escolha certa
              </span>{" "}
              e conquistou resultados reais
            </span>

            {/* Desktop — exatamente três linhas */}
            <span className="hidden lg:block">
              <span className="block whitespace-nowrap">
                Confira o depoimento de quem fez a
              </span>

              <span className="mt-1 block whitespace-nowrap">
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
                  escolha certa
                </span>{" "}
                e conquistou
              </span>

              <span className="mt-1 block whitespace-nowrap">
                resultados reais
              </span>
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-white/60
              sm:text-base
              lg:mt-3
              lg:text-[0.92rem]
            "
          >
            Conheça a experiência de quem confiou no nosso trabalho e
            transformou os resultados da clínica.
          </p>
        </div>

        {/* Vídeo */}
        <div
          className="
            mx-auto
            mt-9
            w-full
            max-w-[250px]
            sm:mt-10
            sm:max-w-[280px]
            lg:mt-6
            lg:max-w-[680px]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[18px]
              border
              border-[#b39755]/60
              bg-[#070707]
              p-1
              shadow-[0_0_32px_rgba(197,176,116,0.12)]
              lg:rounded-[20px]
              lg:p-1
              lg:shadow-[0_0_36px_rgba(197,176,116,0.13)]
            "
          >
            {/* Linha dourada superior */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                z-20
                h-px
                w-2/3
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#e7d399]
                to-transparent
              "
            />

            {/* Mobile e tablet — vertical */}
            <div
              className="
                relative
                aspect-[9/16]
                overflow-hidden
                rounded-[14px]
                bg-black
                lg:hidden
              "
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/FLixTAObmCM?rel=0&modestbranding=1"
                title="Depoimento de cliente"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Computador — horizontal com laterais pretas */}
            <div
              className="
                relative
                hidden
                aspect-video
                overflow-hidden
                rounded-[16px]
                bg-black
                lg:block
              "
            >
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  top-0
                  aspect-[9/16]
                  h-full
                  -translate-x-1/2
                  overflow-hidden
                  bg-black
                "
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/FLixTAObmCM?rel=0&modestbranding=1"
                  title="Depoimento de cliente"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="mt-6 flex justify-center lg:mt-4">
          <button
            type="button"
            onClick={handleCtaClick}
            className="
              group
              relative
              inline-flex
              w-full
              max-w-[280px]
              items-center
              justify-center
              overflow-hidden
              rounded-lg
              bg-gradient-to-r
              from-[#e2d19b]
              via-[#e0cb95]
              to-[#a6824b]
              px-6
              py-4
              text-center
              text-sm
              font-extrabold
              uppercase
              tracking-normal
              text-[#1b160d]
              shadow-lg
              shadow-[#a6824b]/30
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-[#a6824b]/45
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#e2d19b]/50
              sm:w-auto
              sm:max-w-none
              sm:px-10
              sm:text-base
              lg:px-8
              lg:py-3.5
              lg:text-sm
            "
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {/* Brilho passando pelo botão */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/45
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative z-10 text-balance">GARANTIR VAGA</span>
          </button>
        </div>
      </div>
    </section>
  )
}