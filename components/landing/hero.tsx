import { CalendarDays, ChevronsDown, MapPin } from "lucide-react"
import { Bowlby_One_SC, Poppins } from "next/font/google"
import { CtaButton } from "./cta-button"

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
    <div className="flex flex-col items-end gap-3.5">
      <div className="flex items-start justify-end gap-2.5">
        <CalendarDays
          className="mt-0.5 size-[18px] shrink-0 text-[#c5b074]"
          aria-hidden="true"
        />

        <span className="text-right">
          <span className="block text-sm font-normal leading-tight text-foreground lg:text-[0.95rem]">
            23 de setembro de 2026
          </span>

          <span className="mt-1 block text-xs font-normal text-muted-foreground lg:text-[0.8rem]">
            quarta-feira
          </span>
        </span>
      </div>

      <div className="flex items-start justify-end gap-2.5">
        <MapPin
          className="mt-0.5 size-[18px] shrink-0 text-[#c5b074]"
          aria-hidden="true"
        />

        <span className="text-right">
          <span className="block text-sm font-normal leading-tight text-foreground lg:text-[0.95rem]">
            Porto de Gale
          </span>

          <span className="mt-1 block text-xs font-normal text-muted-foreground lg:text-[0.8rem]">
            Rio Grande, RS
          </span>
        </span>
      </div>
    </div>
  )
}

/*
 * Mobile mantido exatamente igual.
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

          <span className="mt-1 block text-[0.65rem] text-muted-foreground sm:text-xs">
            quarta-feira
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
      <p className="text-pretty text-center text-[0.95rem] leading-relaxed text-foreground lg:text-base">
        Descubra como transformar o atendimento da sua equipe em conversão,
        agendamentos e mais faturamento para sua clínica.
      </p>

      <a
        href="#inscricao"
        className={`${poppins.className} mt-5 flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-[#e2d19b] via-[#e0cb95] to-[#a6824b] px-4 py-4 text-center text-[0.9rem] font-bold uppercase tracking-normal text-[#1b160d] transition-all duration-300 hover:-translate-y-0.5 lg:text-[0.95rem]`}
      >
        GARANTIR A VAGA DO 1º LOTE
      </a>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground">
        <MapPin className="size-4 text-[#c5b074]" />
        Rio Grande, RS
      </p>
    </div>
  )
}
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* ================= DESKTOP ================= */}

      <div className="relative hidden min-h-[calc(100svh-2.75rem)] md:block">
        <img
          src="/JHONNATHA.jpeg"
          alt="Jhonnatha, palestrante do evento Belmond"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[right_20%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(18, 15, 10, 0.97) 0%, rgba(28, 23, 15, 0.82) 38%, rgba(45, 35, 20, 0.38) 68%, transparent 100%), linear-gradient(0deg, rgba(18, 15, 10, 0.95) 0%, rgba(28, 23, 15, 0.38) 35%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto flex h-full min-h-[calc(100svh-2.75rem)] max-w-6xl flex-col px-6">
          <div className="flex w-full items-start justify-between pt-7 lg:pt-8">
            <Logo imageClassName="h-[58px] w-[255px] object-contain" />

            <div className="pr-7 lg:pr-10">
              <DesktopEventData />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end pb-14 pt-10">
            <div className="grid w-full grid-cols-12 items-end gap-6">
              <div className="col-span-7">
                <h1
                  className={`${bowlbyOneSC.className} text-balance text-[2.85rem] uppercase leading-[1.08] tracking-[-0.02em] text-white lg:text-[3.35rem] xl:text-[3.7rem]`}
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
              </div>

              <div className="col-span-5">
                <ConversionCard />
              </div>
            </div>
          </div>

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
      className={`${bowlbyOneSC.className} mx-auto mt-8 max-w-[370px] text-balance text-center text-[1.7rem] uppercase leading-[1.12] tracking-[-0.02em]`}
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

    <CtaButton className="mt-7 w-full !shadow-none tracking-wide">
      Garantir minha vaga
    </CtaButton>

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