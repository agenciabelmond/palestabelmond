"use client"

import { Archivo_Black } from "next/font/google"
import { CalendarDays, MapPin } from "lucide-react"

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
})

export function EventSection() {
  return (
    <section
      id="evento"
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/15
        bg-black
      "
    >
      {/* Brilho central de fundo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[460px]
          w-[460px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.08),transparent_68%)]
          blur-3xl
        "
      />

      {/* Brilho dourado superior */}
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
          via-[#c5b074]/50
          to-transparent
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          py-12
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        {/* Card principal */}
        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-[1080px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#c5b074]/30
            bg-[#0a0a0a]
            shadow-[0_22px_75px_rgba(0,0,0,0.58)]
            lg:grid-cols-[1.08fr_0.92fr]
            lg:rounded-[28px]
          "
        >
          {/* Linha de brilho no card */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              z-20
              h-px
              w-3/4
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#eadba8]
              to-transparent
            "
          />

          {/* Imagem */}
          <div
            className="
              relative
              min-h-[270px]
              overflow-hidden
              sm:min-h-[340px]
              lg:min-h-[430px]
            "
          >
            <img
              src="/portogale.png"
              alt="Imagem do local do evento"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Degradê sutil */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-black/5
                lg:bg-gradient-to-r
                lg:from-black/5
                lg:via-transparent
                lg:to-black/20
              "
            />
          </div>

          {/* Informações */}
          <div
            className="
              relative
              flex
              flex-col
              justify-center
              bg-gradient-to-br
              from-[#f7f3e9]
              via-[#f0eadc]
              to-[#ddd1b5]
              px-6
              py-8
              sm:px-8
              sm:py-10
              lg:px-11
              lg:py-12
            "
          >
            {/* Textura sutil */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.18]
                [background-image:radial-gradient(rgba(27,22,13,0.20)_0.7px,transparent_0.7px)]
                [background-size:7px_7px]
              "
            />

            <div className="relative z-10">
              {/* Data */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div
                  className="
                    flex
                    size-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#9d793a]/25
                    bg-white/55
                    text-[#1b160d]
                    shadow-sm
                    sm:size-12
                  "
                >
                  <CalendarDays
                    className="size-5 sm:size-6"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span
                    className="
                      text-[0.68rem]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-[#8b7046]
                    "
                  >
                    Quando
                  </span>

                  <h3
                    className={`
                      ${archivoBlack.className}
                      mt-2
                      text-[1.3rem]
                      uppercase
                      leading-[1.1]
                      tracking-[-0.025em]
                      text-[#15120d]
                      sm:text-[1.55rem]
                      lg:text-[1.7rem]
                    `}
                  >
                    23 de setembro
                    <span className="block">de 2026</span>
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      text-[#817968]
                      sm:text-base
                    "
                  >
                    Quarta-feira
                    <span
                      aria-hidden="true"
                      className="mx-2 text-[#9d793a]/60"
                    >
                      •
                    </span>
                    às 19h
                  </p>
                </div>
              </div>

              {/* Divisor */}
              <div
                aria-hidden="true"
                className="
                  my-7
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#9d793a]/35
                  via-[#9d793a]/15
                  to-transparent
                  sm:my-8
                  lg:my-9
                "
              />

              {/* Local */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div
                  className="
                    flex
                    size-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#9d793a]/25
                    bg-white/55
                    text-[#1b160d]
                    shadow-sm
                    sm:size-12
                  "
                >
                  <MapPin
                    className="size-5 sm:size-6"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span
                    className="
                      text-[0.68rem]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-[#8b7046]
                    "
                  >
                    Onde
                  </span>

                  <h3
                    className={`
                      ${archivoBlack.className}
                      mt-2
                      text-[1.3rem]
                      uppercase
                      leading-[1.1]
                      tracking-[-0.025em]
                      text-[#15120d]
                      sm:text-[1.55rem]
                      lg:text-[1.7rem]
                    `}
                  >
                    Porto de Gale
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      text-[#817968]
                      sm:text-base
                    "
                  >
                    Rio Grande, RS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}