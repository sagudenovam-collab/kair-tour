"use client"

import { Phone, MapPin, Mail, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useFadeIn } from "@/hooks/use-fade-in"

export function ContactSection() {
  const { t } = useLanguage()
  const sectionRef = useFadeIn()

  const contactItems = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: t("contact.phone"),
      values: [
        { text: "+7 707 757 99 93", href: "tel:+77077579993" },
        { text: "+7 771 181 52 26", href: "tel:+77711815226" },
      ],
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: t("contact.address"),
      values: [
        { text: t("contact.address.value"), href: "#" },
      ],
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: t("contact.email.label"),
      values: [
        { text: "kairtravel@mail.ru", href: "mailto:kairtravel@mail.ru" },
      ],
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      label: t("contact.website"),
      values: [
        { text: "www.kairtravel.com", href: "https://www.kairtravel.com" },
      ],
    },
  ]

  return (
    <section 
      id="contact" 
      className="relative py-20 lg:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(94% 0.04 235) 0%, oklch(90% 0.05 240) 50%, oklch(94% 0.04 235) 100%)",
      }}
    >
      <div
        ref={sectionRef}
        className="fade-in-section relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("contact.label")}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-slate-500">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {contactItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm transition-all duration-300 hover:shadow-md md:flex-col md:items-center md:text-center md:p-8"
            >
              {/* Icon Box */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 md:h-14 md:w-14 md:mb-4">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {item.label}
                </span>
                <div className="flex flex-col gap-1">
                  {item.values.map((val, vIdx) => (
                    <a
                      key={vIdx}
                      href={val.href}
                      target={val.href.startsWith('http') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm md:text-base font-medium text-slate-900 hover:text-primary transition-colors break-all md:break-normal"
                    >
                      {val.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}