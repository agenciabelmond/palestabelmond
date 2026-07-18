export function UrgencyBar() {

return (
  <div className="sticky top-0 z-50 border-b border-[#f2dea2]/60 bg-[#f2dea2] text-[#1b160d]">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-2.5 px-2.5 py-2.5 sm:justify-center sm:gap-5 sm:px-4 sm:py-2">
<p
  className="
    text-left
    text-[0.80rem]
    font-bold
    leading-tight

    sm:text-center
    sm:font-poppins
    sm:text-[1.10rem]
    sm:font-extrabold
  "
>
        <span
          className="
            text-balance

            sm:[text-shadow:0_0_3px_#fff,0_0_7px_#f2dea2,0_0_14px_#f2dea2,0_0_24px_rgba(242,222,162,0.9)]
          "
        >
          Últimas vagas no 1º lote disponível
        </span>
      </p>

      <a
        href="#inscricao"
        className="
          group relative shrink-0 overflow-hidden rounded-full
          border border-[#f2dea2]/80
          bg-black
          px-7 py-2
          text-xs font-bold uppercase tracking-wide
          text-[#f2dea2]
          shadow-[0_0_5px_rgba(242,222,162,0.45),0_0_12px_rgba(242,222,162,0.25)]
          transition-all duration-300

          hover:scale-[1.04]
          hover:bg-[#1b160d]
          hover:shadow-[0_0_8px_rgba(242,222,162,0.8),0_0_18px_rgba(242,222,162,0.45),0_0_28px_rgba(242,222,162,0.25)]

          sm:animate-[softNeon_2.8s_ease-in-out_infinite]
          sm:px-9
          sm:py-2.5
          sm:text-sm
          sm:font-poppins
          sm:font-extrabold
        "
      >
        <span className="relative z-10">Quero minha vaga</span>

        <span
          className="
            pointer-events-none
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-[#f2dea2]/35
            to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          "
        />
      </a>
    </div>
  </div>




)
}
