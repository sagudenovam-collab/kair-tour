"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mountain } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.tours", href: "#tours" },
  { key: "nav.explore", href: "#explore" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
]

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border-b border-primary/10 shadow-2xl shadow-navy-deep/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <img src="/images/logo-icon.png" className="h-15 w-15 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-white">
              KAIRTRAVEL
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:block">
              Almaty
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="group relative text-[13px] font-medium uppercase tracking-[0.2em] text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:text-primary"
            >
              {t(link.key)}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="relative flex items-center gap-0.5 overflow-hidden rounded-full border border-primary/30 bg-navy-light/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_oklch(0.72_0.08_235/0.2)]"
            aria-label="Toggle language"
          >
            <span
              className={`transition-colors duration-300 ${
                lang === "en" ? "text-primary" : "text-white/40"
              }`}
            >
              EN
            </span>
            <span className="mx-1 text-primary/30">|</span>
            <span
              className={`transition-colors duration-300 ${
                lang === "ru" ? "text-primary" : "text-white/40"
              }`}
            >
              RU
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="text-white transition-all duration-200 active:scale-90 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-primary/10 bg-navy-deep/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="flex flex-col items-center gap-7 py-10">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
