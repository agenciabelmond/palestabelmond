"use client"

import { CalendarDays, ChevronsDown, MapPin } from "lucide-react"
import { Bowlby_One_SC, Poppins } from "next/font/google"

const bowlbyOneSC = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
})

type LogoProps = {
  className?: string
  imageClassName?: string
}

/*
 * Abre o mesmo modal de cadastro existente no componente UrgencyBar.
 */
function openRegistrationModal() {
  window.dispatchEvent(
    new CustomEvent("open-registration-modal", {
      detail: {
        origem: "Seção principal",
      },
    }),
  )
}

function Logo({ className, imageClassName }: LogoProps) {
  return (
    <span className={`flex justify-center ${className ?? ""}`}>
      <img
        src="/b.png"
        alt="Belmond"
        className={
          imageClassName ??
          "h-9 w-[170px] object-contain sm:h-12 sm:w-[220px]"
        }
      />
    </span>
  )
}

/*
 * Informações usadas somente no desktop.
 */
function DesktopEventData() {
  return (
    <div
      className="
        flex
        items-center
        whitespace-nowrap
        rounded-xl
        border
        border-[#c5b074]/75
        bg-black/90
        px-3.5
        py-2.5
        shadow-xl
        shadow-black/40
        backdrop-blur-md
        lg:px-4
        lg:py-3
      "
    >
      <CalendarDays
        className="mr-2 size-4 shrink-0 text-[#c5b074] lg:size-[17px]"
        aria-hidden="true"
      />

      <span className="text-[0.68rem] font-medium text-white lg:text-[0.76rem] xl:text-[0.82rem]">
        23 de setembro de 2026
      </span>

      <span
        className="mx-2.5 h-4 w-px shrink-0 bg-[#c5b074]/45 lg:mx-3"
        aria-hidden="true"
      />

      <span className="text-[0.68rem] font-normal text-white/80 lg:text-[0.76rem] xl:text-[0.82rem]">
        quarta-feira
      </span>

      <span
        className="mx-2.5 h-4 w-px shrink-0 bg-[#c5b074]/45 lg:mx-3"
        aria-hidden="true"
      />

      <span className="text-[0.68rem] font-semibold text-[#e7d399] lg:text-[0.76rem] xl:text-[0.82rem]">
        às 19h
      </span>

      <span
        className="mx-2.5 h-4 w-px shrink-0 bg-[#c5b074]/45 lg:mx-3"
        aria-hidden="true"
      />

      <MapPin
        className="mr-2 size-4 shrink-0 text-[#c5b074] lg:size-[17px]"
        aria-hidden="true"
      />

      <span className="text-[0.68rem] font-medium text-white lg:text-[0.76rem] xl:text-[0.82rem]">
        Porto de Gale
      </span>

      <span className="ml-2 text-[0.66rem] font-normal text-white/60 lg:text-[0.74rem] xl:text-[0.8rem]">
        Rio Grande, RS
      </span>
    </div>
  )
}

/*
 * Informações exibidas somente no mobile.
 */
function MobileEventData() {
  return (
    <div className="flex items-stretch gap-4">
      <div className="flex items-start gap-2">
        <CalendarDays
          className="mt-0.5 size-5 shrink-0 text-[#c5b074]"
          aria-hidden="true"
        />

        <span className="text-left">
          <span className="block text-sm leading-none text-foreground sm:text-lg">
            23 de setembro de 2026
          </span>

          <span className="mt-1 block whitespace-nowrap text-[0.65rem] text-muted-foreground sm:text-xs">
            quarta-feira

            <span className="ml-1.5 font-semibold text-[#e7d399]">
              • às 19h
            </span>
          </span>
        </span>
      </div>

      <div className="w-px bg-[#b39755]/35" aria-hidden="true" />

      <div className="flex items-start gap-2">
        <MapPin
          className="mt-0.5 size-5 shrink-0 text-[#c5b074]"
          aria-hidden="true"
        />

        <span className="text-left">
          <span className="block text-sm font-bold leading-none text-foreground sm:text-lg">
            Porto de Gale
          </span>

          <span className="mt-1 block text-[0.65rem] text-muted-foreground sm:text-xs">
            Rio Grande, RS
          </span>
        </span>
      </div>
    </div>
  )
}

/*
 * Card exibido somente no desktop.
 */
function ConversionCard({ className }: { className?: string }) {
  return (
    <div
      className={
        "rounded-2xl border border-[#b39755]/30 bg-black/50 p-6 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-7 " +
        (className ?? "")
      }
    >
      <p className="text-pretty text-center text-[0.82rem] leading-relaxed text-foreground lg:text-[0.88rem]">
        Descubra como transformar o atendimento da sua equipe em conversão,
        agendamentos e mais faturamento para sua clínica.
      </p>

      <button
        type="button"
        onClick={openRegistrationModal}
        className={`
          ${poppins.className}
          mt-5
          flex
          w-full
          items-center
          justify-center
          whitespace-nowrap
          rounded-lg
          bg-gradient-to-r
          from-[#e2d19b]
          via-[#e0cb95]
          to-[#a6824b]
          px-4
          py-3.5
          text-center
          text-[0.78rem]
          font-bold
          uppercase
          tracking-normal
          text-[#1b160d]
          shadow-lg
          shadow-[#a6824b]/25
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:brightness-105
          hover:shadow-xl
          hover:shadow-[#a6824b]/35
          focus-visible:outline-none
          focus-visible:ring-4
          focus-visible:ring-[#e2d19b]/30
          lg:text-[0.82rem]
        `}
      >
        GARANTIR A VAGA DO 1º LOTE
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground">
        <MapPin className="size-3.5 text-[#c5b074]" />
        Rio Grande, RS
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* ================= DESKTOP ================= */}

      <div
        className="
          relative
          hidden
          min-h-[calc(100svh-2.75rem)]
          overflow-hidden
          bg-[radial-gradient(ellipse_at_top_right,#40351d_0%,#241d12_20%,#12100c_40%,#060606_70%,#020202_100%)]
          md:block
        "
      >
        {/* Glow dourado superior direito */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-220px]
            top-[-300px]
            z-0
            h-[760px]
            w-[1000px]
            rounded-full
            bg-[radial-gradient(ellipse,rgba(226,209,155,0.28)_0%,rgba(197,160,75,0.16)_28%,rgba(126,92,31,0.08)_52%,transparent_72%)]
            blur-3xl
          "
        />

        {/* Glow dourado inferior direito */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-72
            -right-72
            z-0
            size-[720px]
            rounded-full
            bg-[radial-gradient(circle,rgba(180,135,47,0.20),rgba(120,83,25,0.08)_38%,transparent_70%)]
            blur-3xl
          "
        />

        {/* Glow dourado esquerdo */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-72
            bottom-[-180px]
            z-0
            size-[650px]
            rounded-full
            bg-[radial-gradient(circle,rgba(180,135,47,0.10),rgba(120,83,25,0.04)_45%,transparent_70%)]
            blur-3xl
          "
        />

        {/* Degradê de profundidade */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[linear-gradient(115deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.04)_100%)]
          "
        />

        {/* Degradê inferior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-0
            h-[40%]
            bg-gradient-to-t
            from-[#020202]
            via-[#050505]/70
            to-transparent
          "
        />

        {/* Grade discreta */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-2.75rem)] max-w-6xl flex-col px-6">
          {/* HEADER */}

          <div className="relative flex w-full items-start pt-7 lg:pt-8">
            <Logo imageClassName="h-[58px] w-[255px] object-contain" />

            <div className="absolute right-[-3%] top-7 lg:top-8">
              <DesktopEventData />
            </div>
          </div>

          {/* HERO */}

          <div className="relative flex flex-1 items-center">
            {/* CONTEÚDO ESQUERDO */}

            <div className="relative z-20 w-[48%] translate-y-3 pb-16">
              <h1
                className={`
                  ${bowlbyOneSC.className}
                  translate-y-8
                  text-balance
                  text-[2.55rem]
                  uppercase
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-white
                  lg:text-[3rem]
                  xl:text-[3.3rem]
                `}
              >
                A NOVA FORMA DE{" "}
                <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
                  CONVERTER
                </span>{" "}
                <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
                  PACIENTES
                </span>{" "}
                EM 2026
              </h1>

              <ConversionCard className="mt-14 max-w-[430px]" />
            </div>

            {/* FOTO HORIZONTAL À DIREITA */}

            <div className="pointer-events-none absolute right-[-3%] top-[46%] z-10 w-[54%] -translate-y-1/2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/JHONNATHA.jpeg"
                  alt="Jhonnatha, palestrante do evento Belmond"
                  className="h-full w-full object-cover object-[50%_0%]"
                />

                {/* Fade lateral para integrar a foto ao fundo */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #000 0%, transparent 24%), linear-gradient(0deg, rgba(0,0,0,0.35), transparent 35%, rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* SETA */}

          <div className="flex items-center justify-center pb-6">
            <ChevronsDown
              className="size-9 animate-bounce text-[#c5b074]"
              aria-hidden="true"
            />

            <span className="sr-only">Role para ver mais conteúdo</span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="bg-black md:hidden">
        <div className="relative">
          <img
            src="/JHONNATHA.jpeg"
            alt="Jhonnatha, palestrante do evento Belmond"
            className="aspect-[16/10] w-full object-cover object-[center_20%]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(18, 15, 10, 1) 4%, rgba(28, 23, 15, 0.38) 42%, transparent 70%)",
            }}
          />

          <Logo className="absolute inset-x-0 bottom-4 flex flex-col items-center text-center" />
        </div>

        <div className="px-4 pb-10 pt-4">
          <div className="flex justify-center">
            <MobileEventData />
          </div>

          <h1
            className={`
              ${bowlbyOneSC.className}
              mx-auto
              mt-8
              max-w-[370px]
              text-balance
              text-center
              text-[1.7rem]
              uppercase
              leading-[1.12]
              tracking-[-0.02em]
            `}
          >
            A NOVA FORMA DE{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              CONVERTER
            </span>{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              PACIENTES
            </span>{" "}
            EM 2026
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-center text-[0.95rem] leading-relaxed text-muted-foreground">
            Descubra como transformar o atendimento da sua equipe em conversão,
            agendamentos e mais faturamento para sua clínica.
          </p>

          {/* BOTÃO MOBILE ABRINDO O MESMO CADASTRO */}

          <button
            type="button"
            onClick={openRegistrationModal}
            className={`
              ${poppins.className}
              group
              relative
              mt-7
              inline-flex
              w-full
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
              tracking-wide
              text-[#1b160d]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:brightness-105
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#e2d19b]/50
            `}
          >
            <span className="relative z-10">Garantir minha vaga</span>

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </button>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
            <MapPin className="size-4 text-[#c5b074]" />
            Rio Grande, RS
          </p>

          <div className="mt-6 flex justify-center">
            <ChevronsDown
              className="size-7 animate-bounce text-[#c5b074]"
              aria-hidden="true"
            />

            <span className="sr-only">Role para ver mais conteúdo</span>
          </div>
        </div>
      </div>
    </section>
  )
}