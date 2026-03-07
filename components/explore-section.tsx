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
      className="relative overflow-hidden border-t border-primary/10 py-20 lg:py-40 bg-white"
    >
      <div
        ref={sectionRef}
        className="fade-in-section relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-2xl text-left">
          <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("explore.label")}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            {t("explore.title")}
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-500">
            {t("explore.description")}
          </p>
        </div>

        {/* Grid - Исправлено для телефона */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[260px] gap-4">
          {destinations.map((dest) => (
            <div
              key={dest.titleKey}
              className={`group relative cursor-pointer overflow-hidden rounded-xl h-[300px] md:h-auto ${dest.span}`}
            >
              <Image
                src={dest.image}
                alt={dest.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-end justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-white">
                      {t(dest.titleKey)}
                    </h3>
                    {/* На мобильных описание показываем сразу или по тапу, на ПК по ховеру */}
                    <p className="mt-2 text-xs text-white/80 line-clamp-2 md:opacity-0 md:translate-y-3 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                      {t(dest.descKey)}
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/30 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity">
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