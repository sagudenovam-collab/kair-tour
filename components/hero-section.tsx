"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const bgRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.15)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate in after mount
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div ref={bgRef} className="parallax-bg absolute inset-0 scale-[1.15]">
        <Image
          src="/images/hero-mountains.jpg"
          alt="Tien Shan mountains of Kazakhstan at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Navy gradient overlays for cinematic night-sky mood */}
      {/* Светлые градиентные наложения для голубой тематики */}
{/* Используем светлый фон с небольшой непрозрачностью сверху */}
<div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
<div className="absolute inset-0 bg-[oklch(0.9_0.04_235/0.25)]" />
{/* Тонкий голубой оттенок наложения (светлый) */}
<div className="absolute inset-0 bg-[oklch(0.95_0.02_240/0.25)]" /> {/* Соответствует новому светлом голубому фону */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p
          className={`mb-6 text-[11px] font-semibold uppercase tracking-[0.5em] text-primary transition-all duration-1000 md:text-xs ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {t("hero.subtitle")}
        </p>

        <h1
          className={`font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground transition-all duration-1000 delay-200 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {t("hero.title")}
        </h1>

        <p
          className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/60 transition-all duration-1000 delay-500 md:text-lg ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {t("hero.description")}
        </p>

        <div
          className={`mt-14 transition-all duration-1000 delay-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#explore"
            className="btn-glow group relative inline-flex items-center gap-3 border border-primary/60 bg-primary/15 px-12 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm transition-all duration-500 hover:bg-primary/30 hover:border-primary hover:tracking-[0.25em]"
          >
            <span className="relative z-10">{t("hero.cta")}</span>
            <ChevronDown className="relative z-10 h-4 w-4 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          {t("hero.scroll")}
        </span>
        <div className="flex h-10 w-[1px] flex-col overflow-hidden">
          <div className="h-full w-full animate-bounce bg-primary/60" />
        </div>
      </div>
    </section>
  )
}
