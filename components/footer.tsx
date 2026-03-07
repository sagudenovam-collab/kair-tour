"use client"

import { useLanguage } from "@/lib/language-context"

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.tours", href: "#tours" },
  { key: "nav.explore", href: "#explore" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-primary/10 py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          
          {/* Logo & Tagline - Центрируем на мобильных, выравниваем влево на ПК */}
          <div className="flex flex-col items-center gap-3 md:items-start text-center md:text-left w-full md:w-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img 
                src="/images/logo-icon.png" 
                alt="Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-500 hover:scale-110" 
              />
              <span className="text-base md:text-lg font-bold tracking-wider text-slate-900 uppercase">
                KAIRTRAVELALMATY
              </span>
            </div>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-slate-400">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav Links - Сделали отступы меньше для мобильных, чтобы влезли в ряд или перенеслись аккуратно */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="group relative text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-slate-900"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Копирайт */}
        <div className="mt-12 md:mt-16 border-t border-primary/10 pt-8 text-center">
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-slate-400 px-4">
            &copy; {new Date().getFullYear()} KairTravelAlmaty LLP.{" "}
            <span className="block md:inline mt-1 md:mt-0">{t("footer.rights")}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}