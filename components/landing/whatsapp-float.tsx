import { MessageCircle } from "lucide-react"

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5553000000000?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20na%20palestra."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp para garantir sua vaga"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
