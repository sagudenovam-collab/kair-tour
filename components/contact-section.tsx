"use client"

import Image from "next/image"
import { Phone, MapPin, Mail, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ContactSection() {
  const { t } = useLanguage()
  const sectionRef = useFadeIn()

  return (
    <section id="contact" className="relative py-28 lg:py-40">
      
      {/* Cinematic mountain background */}
      <div className="absolute inset-0">
        <section
  id="contact"
  className="relative py-28 lg:py-40"
  style={{
    background:
      "linear-gradient(180deg, oklch(94% 0.04 235) 0%, oklch(90% 0.05 240) 50%, oklch(94% 0.04 235) 100%)",
  }}
></section>
        
      </div>

      <div
        ref={sectionRef}
        className="fade-in-section relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mb-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("contact.label")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-1 lg:gap-20">
          {/* Info with icons */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-foreground md:text-4xl lg:text-5xl text-balance">
              {t("contact.title")}
            </h2>
            <p className="mt-7 max-w-md text-base leading-[1.8] text-foreground/55">
              {t("contact.description")}
            </p>

            <div className="mt-14 h-px w-20 bg-primary/60" />

            <div className="mt-14 flex justify-between flex-wrap w-full gap-x-16">
              {/* Phone numbers */}
              <div className="flex flex-col items-center gap-3 min-w-[150px]">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {t("contact.phone")}
                  </p>
                  <a
                    href="tel:+77077579993"
                    className="mt-2 block text-sm text-foreground transition-colors hover:text-primary"
                  >
                    +7 707 757 99 93
                  </a>
                  <a
                    href="tel:+77711815226"
                    className="mt-1 block text-sm text-foreground transition-colors hover:text-primary"
                  >
                    +7 771 181 52 26
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center gap-3 min-w-[150px]">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {t("contact.address")}
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {t("contact.address.value")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-3 min-w-[150px]">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {t("contact.email.label")}
                  </p>
                  <a
                    href="mailto:kairtravel@mail.ru"
                    className="mt-2 block text-sm text-foreground transition-colors hover:text-primary"
                  >
                    kairtravel@mail.ru
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex flex-col items-center gap-3 min-w-[150px]">
                <div className="flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {t("contact.website")}
                  </p>
                  <a
                    href="https://www.kairtravel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm text-foreground transition-colors hover:text-primary"
                  >
                    www.kairtravel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}