"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useFadeIn } from "@/hooks/use-fade-in"

const destinations = [
  {
    titleKey: "dest.charyn.title",
    descKey: "dest.charyn.desc",
    image: "/images/charyn-canyon.jpg",
    alt: "Charyn Canyon red rock formations",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    titleKey: "dest.kolsai.title",
    descKey: "dest.kolsai.desc",
    image: "/images/kolsai-lakes.jpg",
    alt: "Turquoise Kolsai Lakes surrounded by forest",
    span: "",
  },
  {
    titleKey: "dest.altyn.title",
    descKey: "dest.altyn.desc",
    image: "/images/altyn-emel.jpg",
    alt: "Singing Dunes in Altyn-Emel National Park",
    span: "",
  },
  {
    titleKey: "dest.lake.title",
    descKey: "dest.lake.desc",
    image: "/images/big-almaty-lake1.jpg",
    alt: "Big Almaty Lake turquoise alpine lake",
    span: "",
  },
  {
    titleKey: "dest.turkestan.title",
    descKey: "dest.turkestan.desc",
    image: "/images/istoc.jpg",
    alt: "spring",
    span: "",
  },
  {
    titleKey: "dest.nomad.title",
    descKey: "dest.nomad.desc",
    image: "/images/nomad-culture.jpg",
    alt: "Traditional Kazakh yurt on the steppe",
    span: "md:col-span-2",
  },
  //kj
  {
    titleKey: "places.ayusay.title",
    descKey: "places.ayusay.desc",
    image: "/images/ayu-saj1 (1).jpg",
    alt: "Ayusay Visitor Center",
    span: "",
  },
  {
    titleKey: "places.centralSquare.title",
    descKey: "places.centralSquare.desc",
    image: "/images/Центральная площадь Алматы.jpg",
    alt: "Central Square Almaty",
    span: "",
  },
  {
    titleKey: "places.28panfilov.title",
    descKey: "places.28panfilov.desc",
    image: "/images/Парк 28 панфиловцев.jpg",
    alt: "Park of 28 Panfilov",
    span: "",
  },
  {
    titleKey: "places.zenkov.title",
    descKey: "places.zenkov.desc",
    image: "/images/Зенковский собор.jpg",
    alt: "Zenkovsky Cathedral",
    span: "",
  },
  {
    titleKey: "places.greenBazaar.title",
    descKey: "places.greenBazaar.desc",
    image: "/images/Зеленый базар.jpg",
    alt: "Green Market",
    span: "",
  },
  {
    titleKey: "places.shymbulak.title",
    descKey: "places.shymbulak.desc",
    image: "/images/Горнолыжный курорт Шымбулак.jpg",
    alt: "Shymbulak Ski Resort",
    span: "",
  },
  {
    titleKey: "places.kokTobe.title",
    descKey: "places.kokTobe.desc",
    image: "/images/Кок-Тобе.jpg",
    alt: "Kok-Tobe",
    span: "",
  },
  {
    titleKey: "places.fabric.title",
    descKey: "places.fabric.desc",
    image: "/images/fabric.jpg",
    alt: "Big Almaty Lake",
    span: "",
  },
  {
    titleKey: "places.kayindy.title",
    descKey: "places.kayindy.desc",
    image: "/images/Озеро Кайынды.jpg",
    alt: "Lake Kaiyndy",
    span: "",
  },
  {
    titleKey: "places.issyk.title",
    descKey: "places.issyk.desc",
    image: "/images/Озеро Иссык.jpg",
    alt: "Lake Issyk",
    span: "",
  },
]

export function ExploreSection() {
  const { t } = useLanguage()
  const sectionRef = useFadeIn()

  return (
    <section
  id="explore"
  className="relative overflow-hidden border-t border-primary/10 py-28 lg:py-40"
  style={{
    background:
      "linear-gradient(180deg, oklch(94% 0.04 235) 0%, oklch(90% 0.05 240) 50%, oklch(94% 0.04 235) 100%)",
  }}
>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div
        ref={sectionRef}
        className="fade-in-section relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("explore.label")}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.15] text-foreground md:text-4xl lg:text-5xl">
            {t("explore.title")}
          </h2>
          <p className="mt-7 text-base leading-[1.8] text-foreground/55">
            {t("explore.description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {destinations.map((dest) => (
            <div
              key={dest.titleKey}
              className={`stagger-child group relative cursor-pointer overflow-hidden ${dest.span}`}
            >
              {/* Image with zoom on hover */}
              <Image
                src={dest.image}
                alt={dest.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark navy overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

              {/* Blue accent line at top */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div className="h-16">
                    <h3 className="font-serif text-lg font-bold text-white md:text-xl">
                      {t(dest.titleKey)}
                    </h3>
                    <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/80 opacity-0 transition-all duration-500 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                      {t(dest.descKey)}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-foreground/15 text-foreground/50 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_16px_oklch(0.72_0.08_235/0.2)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
