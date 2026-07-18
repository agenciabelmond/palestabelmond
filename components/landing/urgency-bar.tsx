"use client"

import { FormEvent, useEffect, useState } from "react"
import {
  ArrowRight,
  LoaderCircle,
  Phone,
  UserRound,
  X,
} from "lucide-react"

/*
 * URL pública do Apps Script terminada em /exec.
 */
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby1BI9lOskbv58edf5fMyGQDgs2rCSjlivvtenVuN6he0embcXmfCBI2-uF9n2YEUA/exec"

/*
 * Página de pagamento da Hotmart.
 */
const PAYMENT_URL =
  "https://pay.hotmart.com/V106378842K?off=xm16isk0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcATIofVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacn0_8-tDC5DH916wD8JkbuXVRJdAyZ2Ady1LKiVwhX4MYOnSy0NQDbbPwNvA_aem_QPGfSZxRA71iJF7R0v6lIw&bid=1784398499914"

/*
 * Origem usada quando o cadastro é aberto
 * pelo botão da própria barra superior.
 */
const DEFAULT_ORIGIN = "Barra de urgência — Topo"

type RegistrationModalDetail = {
  origem?: string
}

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (!digits) return ""

  if (digits.length <= 2) {
    return `(${digits}`
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function UrgencyBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [origin, setOrigin] = useState(DEFAULT_ORIGIN)

  /*
   * Abre o modal e guarda de qual botão
   * o visitante chegou.
   */
  function openModal(newOrigin = DEFAULT_ORIGIN) {
    setError("")
    setOrigin(newOrigin)
    setIsOpen(true)
  }

  function closeModal() {
    if (isSubmitting) return

    setError("")
    setIsOpen(false)
  }

  /*
   * Escuta os botões de outras seções da página.
   *
   * Exemplo:
   *
   * window.dispatchEvent(
   *   new CustomEvent("open-registration-modal", {
   *     detail: {
   *       origem: "Seção principal — Desktop",
   *     },
   *   }),
   * )
   */
  useEffect(() => {
    function handleOpenRegistrationModal(event: Event) {
      const customEvent =
        event as CustomEvent<RegistrationModalDetail>

      openModal(
        customEvent.detail?.origem ??
          "Landing page — Origem não identificada",
      )
    }

    window.addEventListener(
      "open-registration-modal",
      handleOpenRegistrationModal,
    )

    return () => {
      window.removeEventListener(
        "open-registration-modal",
        handleOpenRegistrationModal,
      )
    }
  }, [])

  /*
   * Bloqueia a rolagem enquanto o modal estiver aberto
   * e permite fechar com a tecla Esc.
   */
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !isSubmitting) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, isSubmitting])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()
    setError("")

    const cleanName = name.trim()
    const whatsappDigits = whatsapp.replace(/\D/g, "")

    if (cleanName.length < 3) {
      setError("Digite seu nome completo para continuar.")
      return
    }

    if (whatsappDigits.length < 10) {
      setError("Digite um WhatsApp válido com DDD.")
      return
    }

    if (
      !APPS_SCRIPT_URL.startsWith(
        "https://script.google.com/macros/s/",
      ) ||
      !APPS_SCRIPT_URL.endsWith("/exec")
    ) {
      setError(
        "Adicione no código a URL pública do Apps Script terminada em /exec.",
      )
      return
    }

    setIsSubmitting(true)

    try {
      const body = new URLSearchParams({
        nome: cleanName,
        whatsapp,
        origem: origin,
      })

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      })

      window.location.assign(PAYMENT_URL)
    } catch (submitError) {
      console.error(
        "Erro ao enviar cadastro:",
        submitError,
      )

      setError(
        "Não foi possível enviar seu cadastro agora. Verifique sua conexão e tente novamente.",
      )

      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ================= BARRA SUPERIOR ================= */}

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

          <button
            type="button"
            onClick={() => openModal(DEFAULT_ORIGIN)}
            className="
              group
              relative
              shrink-0
              overflow-hidden
              rounded-full
              border
              border-[#f2dea2]/80
              bg-black
              px-7
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-[#f2dea2]
              shadow-[0_0_5px_rgba(242,222,162,0.45),0_0_12px_rgba(242,222,162,0.25)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:bg-[#1b160d]
              hover:shadow-[0_0_8px_rgba(242,222,162,0.8),0_0_18px_rgba(242,222,162,0.45),0_0_28px_rgba(242,222,162,0.25)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-black/60
              sm:animate-[softNeon_2.8s_ease-in-out_infinite]
              sm:px-9
              sm:py-2.5
              sm:text-sm
              sm:font-poppins
              sm:font-extrabold
            "
          >
            <span className="relative z-10">
              Quero minha vaga
            </span>

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#f2dea2]/35
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </button>
        </div>
      </div>

      {/* ================= MODAL DE CADASTRO ================= */}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
            aria-describedby="registration-description"
            className="relative w-full max-w-[440px] overflow-hidden rounded-[1.5rem] border border-[#c5b074]/40 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.75),0_0_45px_rgba(197,176,116,0.12)]"
          >
            {/* Glow superior */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 size-64 rounded-full bg-[#c5b074]/15 blur-3xl"
            />

            {/* Glow inferior */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-[#8c6d31]/10 blur-3xl"
            />

            {/* Linha dourada superior */}

            <div
              aria-hidden="true"
              className="h-1 w-full bg-gradient-to-r from-[#8b6a2d] via-[#f2dea2] to-[#8b6a2d]"
            />

            {/* Botão fechar */}

            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label="Fechar cadastro"
              className="absolute right-4 top-5 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition hover:border-[#c5b074]/45 hover:bg-[#c5b074]/10 hover:text-[#f2dea2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dea2]/70 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <X
                className="size-4"
                aria-hidden="true"
              />
            </button>

            <div className="relative z-10 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-[#c5b074]/30 bg-[#c5b074]/10 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-[#e7d399]">
                Inscrição
              </span>

              <h2
                id="registration-title"
                className="mt-4 pr-10 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-[1.8rem]"
              >
                Garanta sua vaga
              </h2>

              <p
                id="registration-description"
                className="mt-3 max-w-sm text-sm leading-relaxed text-white/55"
              >
                Preencha seus dados para continuar para a
                página de pagamento.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >
                {/* Nome */}

                <div>
                  <label
                    htmlFor="registration-name"
                    className="mb-2 block text-sm font-bold text-white/90"
                  >
                    Nome completo
                  </label>

                  <div className="group relative">
                    <UserRound
                      className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#c5b074]"
                      aria-hidden="true"
                    />

                    <input
                      id="registration-name"
                      name="nome"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Digite seu nome"
                      autoComplete="name"
                      autoFocus
                      required
                      disabled={isSubmitting}
                      className="h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.055] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c5b074]/70 focus:bg-white/[0.075] focus:ring-4 focus:ring-[#c5b074]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* WhatsApp */}

                <div>
                  <label
                    htmlFor="registration-whatsapp"
                    className="mb-2 block text-sm font-bold text-white/90"
                  >
                    WhatsApp
                  </label>

                  <div className="group relative">
                    <Phone
                      className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#c5b074]"
                      aria-hidden="true"
                    />

                    <input
                      id="registration-whatsapp"
                      name="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(event) =>
                        setWhatsapp(
                          formatWhatsapp(
                            event.target.value,
                          ),
                        )
                      }
                      placeholder="(00) 00000-0000"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={15}
                      required
                      disabled={isSubmitting}
                      className="h-[52px] w-full rounded-xl border border-white/10 bg-white/[0.055] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c5b074]/70 focus:bg-white/[0.075] focus:ring-4 focus:ring-[#c5b074]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Mensagem de erro */}

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm leading-relaxed text-red-200"
                  >
                    {error}
                  </p>
                )}

                {/* Enviar */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e7d399] via-[#d4b96d] to-[#a38140] px-5 py-4 text-center text-sm font-extrabold uppercase tracking-[0.025em] text-[#171109] shadow-[0_12px_35px_rgba(163,129,64,0.25)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_42px_rgba(197,176,116,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f2dea2]/30 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle
                        className="size-5 animate-spin"
                        aria-hidden="true"
                      />

                      Enviando cadastro...
                    </>
                  ) : (
                    <>
                      Enviar cadastro e continuar

                      <ArrowRight
                        className="size-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-[0.68rem] leading-relaxed text-white/35">
                  Seus dados serão utilizados para sua
                  inscrição e para o contato relacionado ao
                  evento.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}