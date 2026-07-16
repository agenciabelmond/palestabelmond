
import { CalendarDays, ChevronsDown, MapPin } from "lucide-react"
import { CtaButton } from "./cta-button"

function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex justify-center ${className ?? ""}`}>
      <img
        src="/b.png"
        alt="Belmond"
        className="h-9 w-[170px] object-contain sm:h-12 sm:w-[220px]"
      />
    </span>
  )
}

function EventData() {
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

function ConversionCard({ className }: { className?: string }) {
  return (
    <div
      className={
        "rounded-2xl border border-[#b39755]/30 bg-black/50 p-6 shadow-2xl shadow-black/50 backdrop-blur-md sm:p-7 " +
        (className ?? "")
      }
    >
      <p className="text-pretty text-base leading-relaxed text-foreground sm:text-lg">
        Descubra como transformar o atendimento da sua equipe em conversão,
        agendamentos e mais faturamento para sua clínica.
      </p>

      <CtaButton className="mt-5 w-full !shadow-none tracking-wide">
        Garantir minha vaga
      </CtaButton>

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
        {/* speaker image full-bleed */}

        <img
          src="/JHONNATHA.jpeg"
          alt="Jhonnatha, palestrante do evento Belmond"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[right_20%]"
        />

        {/* readability gradients */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(18, 15, 10, 0.97) 0%, rgba(28, 23, 15, 0.82) 38%, rgba(45, 35, 20, 0.38) 68%, transparent 100%), linear-gradient(0deg, rgba(18, 15, 10, 0.95) 0%, rgba(28, 23, 15, 0.38) 35%, transparent 60%)",
          }}
        />

        <div className="mx-auto flex h-full min-h-[calc(100svh-2.75rem)] max-w-6xl flex-col px-6">
          {/* logo no topo */}

          <Logo className="absolute left-24 top-4 z-10" />

          {/* event data */}

          <div className="flex justify-end pt-8">
            <EventData />
          </div>

          {/* main content */}

          <div className="flex flex-1 flex-col justify-end pb-14 pt-10">
            <div className="grid w-full grid-cols-12 items-end gap-6">
              <div className="col-span-7">
                <h1 className="font-display text-5xl uppercase leading-[1.12] text-balance lg:text-6xl xl:text-7xl">
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

          {/* bottom: double chevron */}

          <div className="flex items-center justify-start pb-6">
            <ChevronsDown
              className="size-8 animate-bounce text-[#c5b074]"
              aria-hidden="true"
            />

            <span className="sr-only">
              Role para ver mais conteúdo
            </span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <div className="bg-black md:hidden">
        {/* featured image with logo overlay */}

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
          {/* event data */}

          <div className="flex justify-center">
            <EventData />
          </div>

          {/* headline */}

          <h1 className="mx-auto mt-8 max-w-[360px] text-center font-display text-[2rem] uppercase leading-[1.08] tracking-tight text-balance">
            A NOVA FORMA DE{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              CONVERTER
            </span>{" "}
            <span className="bg-gradient-to-r from-[#e7d399] via-[#c7a961] to-[#a38140] bg-clip-text text-transparent">
              PACIENTES
            </span>{" "}
            EM 2026
          </h1>

          {/* descriptive paragraph */}

          <p className="mx-auto mt-5 max-w-md text-center text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
            Descubra como transformar o atendimento da sua equipe em conversão,
            agendamentos e mais faturamento para sua clínica.
          </p>

          {/* CTA */}

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

            <span className="sr-only">
              Role para ver mais conteúdo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
