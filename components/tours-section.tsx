"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle2, Banknote, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context" 
import { useFadeIn } from "@/hooks/use-fade-in"
import { useState, useRef } from "react"

/* ------------------------------------------------------------------ */
/* 1. Универсальная карточка тура (Вертикальная)                      */
/* ------------------------------------------------------------------ */
function TourCardTiered({
  image,
  titleKey,
  routeKey,
  timeKey,
  includedKey,
}: {
  image: string
  titleKey: string
  routeKey: string
  timeKey: string
  includedKey: string
}) {
  const { t } = useLanguage()
  return (
    <div className="group flex flex-col overflow-hidden border border-white/5 bg-[#0e1a2b] backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="relative h-60 shrink-0 overflow-hidden">
        <Image
          src={image || "/images/placeholder.jpg"}
          alt={t(titleKey)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a121f] via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-white lg:text-2xl">
          {t(titleKey)}
        </h3>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[100px] flex flex-col gap-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-white" />
            <p className="text-sm leading-relaxed text-white/70">{t(routeKey)}</p>
          </div>
          <div className="mt-auto flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-white" />
            <span className="text-sm text-white/60">{t(timeKey)}</span>
          </div>
        </div>

        <div className="flex-1 min-h-[80px] border-t border-white/10 pt-4 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-white" />
            <p className="text-sm leading-relaxed text-white/70" style={{ whiteSpace: "pre-line" }}>
              {t(includedKey)}
            </p>
          </div>
        </div>

        <div className="mt-auto border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 mb-4">
            <Banknote className="h-4 w-4 shrink-0 text-white" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white">{t("tours.price")}</span>
          </div>
          <a
            href="https://wa.me/77077579993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-primary/40 px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-primary hover:text-white"
          >
            {t("tours.book")}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Специальная ШИРОКАЯ карточка (Для Tamgaly)                      */
/* ------------------------------------------------------------------ */
function TourCardBanner({
  image,
  titleKey,
  routeKey,
  timeKey,
  includedKey,
}: {
  image: string
  titleKey: string
  routeKey: string
  timeKey: string
  includedKey: string
}) {
  const { t } = useLanguage()
  return (
    <div className="group relative flex flex-col md:flex-row overflow-hidden border border-white/5 bg-[#0e1a2b] transition-all duration-500 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
      {/* Изображение слева */}
      <div className="relative h-44 md:h-auto md:w-1/3 shrink-0 overflow-hidden">
        <Image
          src={image || "/images/placeholder.jpg"}
          alt={t(titleKey)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a121f]/90 via-transparent to-transparent" />
        {/* Заголовок для мобилок (поверх фото) */}
        <h3 className="absolute bottom-4 left-5 font-serif text-xl font-bold text-white md:hidden">
          {t(titleKey)}
        </h3>
      </div>
      
      {/* Контент: убраны все min-h чтобы сделать карточку узкой */}
      <div className="flex flex-1 flex-col p-5 md:p-7 justify-center">
        {/* Заголовок для десктопа */}
        <h3 className="hidden md:block mb-4 font-serif text-2xl font-bold text-white leading-tight">
          {t(titleKey)}
        </h3>

        <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-10">
          {/* Инфо блок 1: Маршрут */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-white" />
              <p className="text-sm leading-snug text-white/70">{t(routeKey)}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-white" />
              <span className="text-sm text-white/60 font-medium">{t(timeKey)}</span>
            </div>
          </div>

          {/* Инфо блок 2: Что включено (компактно) */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-white/50" />
              <p className="text-[12px] leading-relaxed text-white/60 italic" style={{ whiteSpace: "pre-line" }}>
                {t(includedKey)}
              </p>
            </div>
          </div>

          {/* Кнопка и цена */}
          <div className="shrink-0 flex flex-col justify-center gap-3 lg:border-l border-white/10 lg:pl-8">
            <div className="flex items-center gap-2">
              <Banknote className="h-4 w-4 shrink-0 text-white" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{t("tours.price")}</span>
            </div>
            <a
              href="https://wa.me/77077579993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-primary/40 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-primary"
            >
              {t("tours.book")}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Карточка Multi-Day (Пакеты)                                     */
/* ------------------------------------------------------------------ */
function TourCardMultiDay({ image, title, duration, days, included }: any) {
  const { t } = useLanguage()
  return (
    <div className="shrink-0 w-[280px] sm:w-[350px] md:w-[400px] snap-start group flex flex-col overflow-hidden border border-white/5 bg-[#0e1a2b] backdrop-blur-md transition-all duration-500 hover:border-primary/40">
      <div className="relative h-56 shrink-0 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a121f] via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[200px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-white" />
            <span className="text-sm text-white/90 font-bold">{duration}</span>
          </div>
          <div className="space-y-3">
            {days.map((day: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-white/70" />
                <p className="text-[12px] leading-relaxed text-white/70">{day}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-4 mt-6 text-[12px] text-white/60 min-h-[100px]" style={{ whiteSpace: "pre-line" }}>
          {included}
        </div>

        <div className="mt-6">
          <a href="https://wa.me/77077579993" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-primary/40 px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:bg-primary">
            {t("tours.book")} <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Основная секция                                                 */
/* ------------------------------------------------------------------ */
export function ToursSection() {
  const { t } = useLanguage();
  const sectionRef = useFadeIn();
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [showArrow, setShowArrow] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.scrollLeft > 100) {
      setShowArrow(false)
    }
  }

  return (
    <section id="tours" className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        
        {/* Заголовок */}
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">{t("tours.label")}</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 md:text-5xl">{t("tours.title")}</h2>
          <p className="mt-6 text-base text-slate-600 leading-relaxed">{t("tours.description")}</p>
        </div>

        {/* 1. СЕТКА ОДНОДНЕВНЫХ ТУРОВ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <TourCardTiered image="/images/city-tour.jpeg" titleKey="tour1.title" routeKey="tour1.route" timeKey="tour1.time" includedKey="tour1.included" />
          <TourCardTiered image="/images/Kolsai Easy.jpeg" titleKey="tour2.title" routeKey="tour2.route" timeKey="tour2.time" includedKey="tour2.included" />
          <TourCardTiered image="/images/kol.jpeg" titleKey="tour3.title" routeKey="tour3.route" timeKey="tour3.time" includedKey="tour3.included" />
          <TourCardTiered image="/images/shym.jpeg" titleKey="tour4.title" routeKey="tour4.route" timeKey="tour4.time" includedKey="tour4.included"/>
          <TourCardTiered image="/images/Oi-Qaragai.jpg" titleKey="tour5.title" routeKey="tour5.route" timeKey="tour5.time" includedKey="tour5.included" />
          <TourCardTiered image="/images/BAO.jpeg" titleKey="tour6.title" routeKey="tour6.route" timeKey="tour6.time" includedKey="tour6.included"/>
          <TourCardTiered image="/images/nomad.png" titleKey="tour7.title" routeKey="tour7.route" timeKey="tour7.time" includedKey="tour7.included" />
          <TourCardTiered image="/images/pla.jpg" titleKey="tour8.title" routeKey="tour8.route" timeKey="tour8.time" includedKey="tour8.included" />
          <TourCardTiered image="/images/singing-dunes.jpg" titleKey="tour9.title" routeKey="tour9.route" timeKey="tour9.time" includedKey="tour9.included" />
          <TourCardTiered image="/images/aktau.jpeg" titleKey="tour10.title" routeKey="tour10.route" timeKey="tour10.time" includedKey="tour10.included" />
          <TourCardTiered image="/images/issyk-bear.jpg" titleKey="tour11.title" routeKey="tour11.route" timeKey="tour11.time" includedKey="tour11.included" />
          <TourCardTiered image="/images/Khorgos.jpg" titleKey="tour14.title" routeKey="tour14.route" timeKey="tour14.time" includedKey="tour14.included" />
          
          {/* ТАМГАЛЫ ПЕТРОГЛИФЫ — ТЕПЕРЬ УЗКИЙ БАННЕР НА ВСЮ ШИРИНУ */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-4">
            <TourCardBanner 
              image="/images/Tamgaly Petroglyphs.jpg"
              titleKey="tour15.title"
              routeKey="tour15.route"
              timeKey="tour15.time"
              includedKey="tour15.included"
            />
          </div>
        </div>

        {/* 2. СЕКЦИЯ: ДВУХДНЕВНЫЕ ТУРЫ */}
        <div className="mb-24">
          <h3 className="mb-8 text-xl font-bold uppercase tracking-[0.3em] text-primary">{t("tours.twoday.label")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TourCardTiered image="/images/dunes-2d.jpg" titleKey="tour12.title" routeKey="tour12.route" timeKey="tour12.time" includedKey="tour12.included" />
            <TourCardTiered image="/images/kolsai-2d.jpg" titleKey="tour13.title" routeKey="tour13.route" timeKey="tour13.time" includedKey="tour13.included" />
          </div>
        </div>

        {/* 3. СЕКЦИЯ: МНОГОДНЕВНЫЕ ПАКЕТЫ */}
        <div className="relative">
          <h3 className="mb-8 text-xl font-bold uppercase tracking-[0.3em] text-primary">{t("tours.multiday")}</h3>
          {showArrow && (
            <div className="absolute right-4 top-0 text-2xl text-primary animate-bounce md:hidden z-20">➔</div>
          )}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x scroll-smooth pb-10 no-scrollbar"
          >
            <TourCardMultiDay 
              image="/images/charyn-canyon-kazakhstan-almaty-moon-260nw-2502628429.jpg.webp" 
              title={t("tour6.pkg1.title")} 
              duration={t("tour6.pkg1.duration")} 
              days={[t("tour6.pkg1.day1"), t("tour6.pkg1.day2"), t("tour6.pkg1.day3")]} 
              included={t("tour6.pkg1.included")} 
            />
            <TourCardMultiDay image="/images/кольсай.jpg" title={t("tour6.pkg2.title")} duration={t("tour6.pkg2.duration")} days={[t("tour6.pkg2.day1"), t("tour6.pkg2.day2"), t("tour6.pkg2.day3")]} included={t("tour6.pkg2.included")} />
            <TourCardMultiDay image="/images/almaty.jpg" title={t("tour6.pkg3.title")} duration={t("tour6.pkg3.duration")} days={[t("tour6.pkg3.day1"), t("tour6.pkg3.day2"), t("tour6.pkg3.day3")]} included={t("tour6.pkg3.included")} />
            <TourCardMultiDay image="/images/black-canyon-kazakhstan-o8z8.webp" title={t("tour6.pkg4.title")} duration={t("tour6.pkg4.duration")} days={[t("tour6.pkg4.day1"), t("tour6.pkg4.day2"), t("tour6.pkg4.day3")]} included={t("tour6.pkg4.included")} />
          </div>
        </div>
      </div>
    </section>
  );
}