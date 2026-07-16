import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

type CtaButtonProps = {
  href?: string
  className?: string
  showArrow?: boolean
}

export function CtaButton({
  href = "#inscricao",
  className,
  showArrow = true,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#e2d19b] via-[#e0cb95] to-[#a6824b] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-normal text-[#1b160d] shadow-lg shadow-[#a6824b]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#a6824b]/45 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#e2d19b]/50 sm:w-auto sm:px-10 sm:py-4 sm:text-base",
        className,
      )}
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 text-balance">
        GARANTIR A VAGA DO 1º LOTE
      </span>

      {showArrow && (
        <ArrowRight
          className="relative z-10 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  )
}