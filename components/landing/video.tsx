"use client"

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
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Cabeçalho */}
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
            Resultados reais
          </span>

          <h2
            className="
              mt-4
              text-balance
              font-display
              text-3xl
              uppercase
              leading-[1.2]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
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
            "
          >
            Conheça a experiência de quem confiou no nosso trabalho e
            transformou os resultados da clínica.
          </p>
        </div>

        {/* Vídeo vertical */}
        <div className="mx-auto mt-9 w-full max-w-[250px] sm:mt-10 sm:max-w-[280px]">
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
                z-10
                h-px
                w-2/3
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#e7d399]
                to-transparent
              "
            />

            <div
              className="
                relative
                aspect-[9/16]
                overflow-hidden
                rounded-[14px]
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

          <p
            className="
              mt-3
              text-center
              text-[0.65rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#c5b074]/80
            "
          >
            Aperte o play e confira
          </p>
        </div>

        {/* Botão */}
        <div className="mt-6 flex justify-center">
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
            "
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {/* Efeito de brilho passando pelo botão */}
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

            <span className="relative z-10 text-balance">
              GARANTIR VAGA
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}