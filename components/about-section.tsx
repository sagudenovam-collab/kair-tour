"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useState, useEffect } from "react"

const stats = [
  { value: "about.stat1.value", label: "about.stat1.label" },
  { value: "about.stat2.value", label: "about.stat2.label" },
  { value: "about.stat3.value", label: "about.stat3.label" },
  { value: "about.stat4.value", label: "about.stat4.label" },
]

const images = [
  "/images/ваше фото.jpeg",
  "/images/ваше фото1.jpeg",
  "/images/ваше фото2.jpeg",
  "/images/ваше фото3.jpeg",
]

export function AboutSection() {
  const { t } = useLanguage()
  const sectionRef = useFadeIn()

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 lg:py-40"
      style={{
        background:
          "linear-gradient(180deg, oklch(94% 0.04 235) 0%, oklch(90% 0.05 240) 50%, oklch(94% 0.04 235) 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div
        ref={sectionRef}
        className="fade-in-section relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Label */}
        <div className="mb-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("about.label")}
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold leading-[1.15] text-foreground md:text-4xl lg:text-5xl text-balance">
              {t("about.title")}
            </h2>

            <div className="mt-10 h-px w-20 bg-primary/60" />

            <p className="mt-10 text-base leading-[1.8] text-foreground/55">
              {t("about.p1")}
            </p>
            <p className="mt-5 text-base leading-[1.8] text-foreground/55">
              {t("about.p2")}
            </p>
          </div>

          {/* Image Slider */}
          <div className="group relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[480px]">
            <div className="relative h-full w-full">

              {images.map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt="Kazakhstan mountains trekking"
                  fill
                  className={`object-cover transition-all duration-[2000ms] ${
                    index === currentImage
                      ? "opacity-100 scale-105"
                      : "opacity-0 scale-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Blue corner accent */}
              <div className="absolute bottom-0 left-0 h-1 w-24 bg-primary/60" />
              <div className="absolute bottom-0 left-0 h-24 w-1 bg-primary/60" />

              {/* Dots navigation */}
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 w-2 rounded-full transition ${
                      index === currentImage
                        ? "bg-white scale-125"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-primary/15 pt-16 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="stagger-child text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                {t(stat.value)}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}