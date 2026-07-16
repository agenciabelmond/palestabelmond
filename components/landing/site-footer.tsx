import { MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center">
        <span className="font-display text-xl uppercase tracking-[0.15em] text-foreground">Belmond</span>
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <MapPin className="size-4 text-accent" />
          Porto de Gale — Rio Grande, RS · 23 de setembro de 2026, quarta-feira
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Belmond. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
