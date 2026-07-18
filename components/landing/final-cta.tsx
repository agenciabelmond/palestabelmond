import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react"
import { CtaButton } from "./cta-button"

const details = [
{
icon: CalendarDays,
label: "Data",
value: "23 de setembro de 2026",
},
{
icon: Clock,
label: "Dia",
value: "quarta-feira",
},
{
icon: MapPin,
label: "Local",
value: "Porto de Gale — Rio Grande, RS",
},
]

export function FinalCta() {
return ( <section
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
{/* Glow dourado superior */} <div
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
      max-w-[1180px]
      px-4
      py-14
      sm:px-6
      sm:py-16
      lg:px-8
      lg:py-20
    "
  >
    <div
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#b39755]/45
        bg-[linear-gradient(145deg,#211b10_0%,#100f0c_48%,#050505_100%)]
        px-5
        py-8
        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        sm:rounded-[30px]
        sm:px-10
        sm:py-12
        lg:px-16
        lg:py-14
      "
    >
      {/* Brilho interno do card */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          size-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(226,209,155,0.2),transparent_68%)]
          blur-2xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          size-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(180,135,47,0.12),transparent_68%)]
          blur-2xl
        "
      />

      <div className="relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-4xl text-center">


          <h2
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-[1.85rem]
              font-black
              uppercase
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-[2.8rem]
              lg:text-[3.25rem]
            "
          >
            Garanta agora sua vaga e pare de{" "}
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
              perder pacientes
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[0.9rem]
              leading-[1.7]
              text-white/70
              sm:text-base
            "
          >
            São ingressos limitados para um evento presencial e exclusivo
            em Rio Grande/RS. 
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

       
        {/* CTA */}
        <div className="mt-9 flex flex-col items-center gap-4">
          <CtaButton
            className="
              w-full
              sm:w-auto
              sm:min-w-[260px]
            "
          >
            Garantir minha vaga
          </CtaButton>

        </div>
      </div>
    </div>
  </div>
</section>


)
}
