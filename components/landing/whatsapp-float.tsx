function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.004 3C8.834 3 3 8.833 3 16c0 2.292.6 4.53 1.738 6.5L3 29l6.67-1.75A12.94 12.94 0 0 0 16 28.999h.006C23.172 28.999 29 23.166 29 16S23.172 3 16.004 3Zm0 23.803h-.005a10.75 10.75 0 0 1-5.478-1.5l-.393-.234-3.958 1.038 1.056-3.857-.256-.396A10.76 10.76 0 0 1 5.31 16c0-5.897 4.798-10.697 10.7-10.697 5.897 0 10.694 4.8 10.694 10.697 0 5.9-4.797 10.803-10.7 10.803Zm5.865-8.018c-.32-.16-1.897-.936-2.19-1.043-.294-.106-.508-.16-.722.16-.214.32-.828 1.043-1.016 1.257-.187.213-.374.24-.694.08-.32-.16-1.35-.498-2.57-1.588-.95-.846-1.59-1.89-1.777-2.21-.187-.32-.02-.493.14-.652.144-.143.32-.374.48-.56.16-.188.214-.32.32-.534.107-.213.054-.4-.027-.56-.08-.16-.721-1.737-.988-2.378-.26-.624-.525-.54-.722-.55h-.614c-.214 0-.56.08-.854.4-.294.32-1.122 1.096-1.122 2.672 0 1.576 1.149 3.099 1.31 3.312.16.214 2.26 3.45 5.476 4.837.765.33 1.362.527 1.827.675.768.244 1.467.21 2.02.127.616-.092 1.897-.775 2.164-1.523.267-.748.267-1.39.187-1.523-.08-.133-.294-.213-.614-.373Z" />
    </svg>
  )
}

export function WhatsappFloat() {
  const whatsappNumber = "555391685956"

  const whatsappMessage =
    "Olá, tenho interesse na palestra e gostaria de mais informações."

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp para saber mais sobre a palestra"
      className="
        fixed bottom-5 right-5 z-50
        flex size-16 items-center justify-center
        rounded-full
        bg-[#25D366] text-white
        shadow-lg shadow-[#25D366]/40
        transition-all duration-300
        hover:scale-110 hover:bg-[#20bd5a]
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-[#25D366]/50
      "
    >
      <WhatsappIcon className="size-9" />
    </a>
  )
}