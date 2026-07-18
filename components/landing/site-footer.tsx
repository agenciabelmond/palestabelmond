"use client"

import { ArrowUpRight, Globe2 } from "lucide-react"

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function SiteFooter() {
  function handleRegistrationClick() {
    window.dispatchEvent(new Event("open-registration-modal"))
  }

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#b39755]/25
        bg-[#050505]
      "
    >
      {/* Brilho dourado superior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-52
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(197,176,116,0.14),transparent_68%)]
          blur-3xl
        "
      />

      {/* Conteúdo principal */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-6xl
          gap-9
          px-5
          py-10
          sm:px-6
          sm:py-12
          md:grid-cols-[1.1fr_1fr]
          md:items-center
          lg:px-8
        "
      >
        {/* Logo e descrição */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            text-center
            md:items-start
            md:text-left
          "
        >
          <a
            href="/"
            aria-label="Voltar para o início"
            className="
              inline-flex
              transition-opacity
              duration-300
              hover:opacity-80
            "
          >
            <img
              src="/b.png"
              alt="Belmond"
              className="
                h-12
                w-auto
                max-w-[220px]
                object-contain
                sm:h-14
              "
            />
          </a>

          <p
            className="
              max-w-md
              text-sm
              leading-relaxed
              text-white/55
            "
          >
            Estratégia, atendimento e crescimento para clínicas que desejam
            transformar oportunidades em resultados.
          </p>
        </div>

        {/* Links e cadastro */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            md:items-end
          "
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/belmond_digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              w-full
              max-w-sm
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              bg-white/[0.035]
              px-4
              py-3
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#c5b074]/50
              hover:bg-[#c5b074]/10
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#d7b962]/60
            "
          >
            <span className="flex items-center gap-3">
              <InstagramIcon className="size-5 shrink-0 text-[#d7b962]" />

              <span>@belmond_digital</span>
            </span>

            <ArrowUpRight
              className="
                size-4
                shrink-0
                text-white/35
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#d7b962]
              "
            />
          </a>

          {/* Site */}
          <a
            href="https://www.agenciabelmond.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              w-full
              max-w-sm
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              bg-white/[0.035]
              px-4
              py-3
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#c5b074]/50
              hover:bg-[#c5b074]/10
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#d7b962]/60
            "
          >
            <span className="flex items-center gap-3">
              <Globe2 className="size-5 shrink-0 text-[#d7b962]" />

              <span>www.agenciabelmond.com.br</span>
            </span>

            <ArrowUpRight
              className="
                size-4
                shrink-0
                text-white/35
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#d7b962]
              "
            />
          </a>

          
        </div>
      </div>

      {/* Parte inferior */}
      <div className="relative border-t border-white/[0.07]">
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            items-center
            justify-between
            gap-2
            px-5
            py-5
            text-center
            text-xs
            text-white/35
            sm:px-6
            md:flex-row
            md:text-left
            lg:px-8
          "
        >
          <p>
            © {new Date().getFullYear()} Belmond. Todos os direitos reservados.
          </p>

          <p>Porto de Gale — Rio Grande, RS</p>
        </div>
      </div>
    </footer>
  )
}