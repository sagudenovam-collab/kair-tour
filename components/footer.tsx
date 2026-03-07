"use client"

import { Mountain } from "lucide-react"
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
    <footer
  className="border-t border-primary/10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
               <img src="/images/logo-icon.png" className="h-15 w-15 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <span className="text-lg font-bold tracking-wider text-foreground">
                KAIRTRAVELALMATY
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/35">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-foreground"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-primary/10 pt-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/30">
            &copy; {new Date().getFullYear()} KairTravelAlmaty LLP.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

