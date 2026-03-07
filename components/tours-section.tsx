"use client"
import Image from "next/image"
import { Clock, MapPin, CheckCircle2, Banknote, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useState, useRef } from "react"

/* ------------------------------------------------------------------ */
/* 1. Универсальная карточка (Tiered Pricing)                         */
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
    <div className="stagger-child group flex flex-col overflow-hidden border border-white/5 bg-navy-deep backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="relative h-56 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={t(titleKey)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Затемнение картинки сверху */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a121f] via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-white lg:text-2xl">
          {t(titleKey)}
        </h3>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        {/* Блок маршрута */}
        <div className="min-h-[110px] flex flex-col gap-3 mb-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-white/70">{t(routeKey)}</p>
          </div>
          <div className="mt-auto flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-white/60">{t(timeKey)}</span>
          </div>
        </div>

        {/* Блок "Что включено" */}
        <div className="flex-1 min-h-[100px] border-t border-white/10 pt-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-white/70">{t(includedKey)}</p>
          </div>
        </div>

        {/* Футер с ценами */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Banknote className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{t("tours.price")}</span>
          </div>
          <a
            href="https://wa.me/77077579993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2
  bg-background
  border border-primary/40
  px-5 py-3 text-[12px]
  font-bold uppercase tracking-[0.2em]
  text-[#0e1a2b]
  transition-all duration-300
  hover:bg-primary
  hover:text-white"
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
/* 2. Карточка Multi-Day (Пакеты)                                     */
/* ------------------------------------------------------------------ */
function TourCardMultiDay({ image, title, duration, days, included}: any) {
  const { t } = useLanguage()
  return (
    <div className="shrink-0 w-[320px] md:w-[400px] snap-start group flex flex-col overflow-hidden border border-white/5 bg-navy-deep backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="relative h-56 shrink-0 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a121f] via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {/* Программа по дням */}
        <div className="min-h-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-white/90 font-bold">{duration}</span>
          </div>
          <div className="flex flex-col gap-2">
            {days.map((day: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-primary/70" />
                <p className="text-[12px] leading-relaxed text-white/70">{day}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Описание включенного */}
        <div className="flex-1 min-h-[130px] border-t border-white/10 pt-4 mt-4 text-[12px] text-white/70">
           {included}
        </div>

        <div className="mt-auto">
          {/* Сетка цен */}
        
          <a
  href="https://wa.me/77077579993"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2
             bg-background
             border border-primary/40
             px-5 py-3
             text-[12px] font-bold uppercase tracking-[0.2em]
             text-[#0e1a2b]
             transition-all duration-300
             hover:bg-primary
             hover:text-white"
>
  {t("tours.book")} <ChevronRight className="h-4 w-4" />
</a>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Основная секция                                                 */
/* ------------------------------------------------------------------ */
export function ToursSection() {
  const { t } = useLanguage();
  const sectionRef = useFadeIn();
  const scrollRef = useRef<HTMLDivElement | null>(null)
const [showArrow, setShowArrow] = useState(true)

const handleScroll = () => {
  if (!scrollRef.current) return

  const container = scrollRef.current

  // если прокрутка меньше ширины одной карточки
  if (container.scrollLeft < 200) {
    setShowArrow(true)
  } else {
    setShowArrow(false)
  }
}

  return (
    <section
  id="tours"
  className="relative overflow-hidden border-t border-primary/10 py-28 lg:py-40"
  style={{
    background:
      "linear-gradient(180deg, oklch(94% 0.04 235) 0%, oklch(90% 0.05 240) 50%, oklch(94% 0.04 235) 100%)",
  }}
>
      <div className="fade-in-section relative mx-auto max-w-7xl px-6 lg:px-8" ref={sectionRef}>
        
        {/* Заголовок секции */}
        <div className="mb-20 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">{t("tours.label")}</span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-5xl">{t("tours.title")}</h2>
          <p className="mt-7 text-base text-foreground/70">{t("tours.description")}</p>
        </div>

        {/* 1. СЕТКА ОДНОДНЕВНЫХ ТУРОВ */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-24">
          <TourCardTiered 
            image="/images/city-tour.jpeg" 
            titleKey="tour1.title" 
            routeKey="tour1.route" 
            timeKey="tour1.time" 
            includedKey="tour1.included"
          />
          <TourCardTiered 
            image="images/Kolsai Easy.jpeg" 
            titleKey="tour2.title" 
            routeKey="tour2.route" 
            timeKey="tour2.time" 
            includedKey="tour2.included" 
          />
          <TourCardTiered image="/images/kol.jpeg" titleKey="tour3.title" routeKey="tour3.route" timeKey="tour3.time" includedKey="tour3.included" />
          <TourCardTiered image="/images/shym.jpeg" titleKey="tour4.title" routeKey="tour4.route" timeKey="tour4.time" includedKey="tour4.included"/>
          <TourCardTiered image="/images/Oi-Qaragai.jpg" titleKey="tour5.title" routeKey="tour5.route" timeKey="tour5.time" includedKey="tour5.included"  />
          <TourCardTiered image="/images/BAO.jpeg" titleKey="tour6.title" routeKey="tour6.route" timeKey="tour6.time" includedKey="tour6.included"/>
          <TourCardTiered image="/images/nomad.png" titleKey="tour7.title" routeKey="tour7.route" timeKey="tour7.time" includedKey="tour7.included" />
          <TourCardTiered image="/images/pla.jpg" titleKey="tour8.title" routeKey="tour8.route" timeKey="tour8.time" includedKey="tour8.included" />
          <TourCardTiered image="/images/singing-dunes.jpg" titleKey="tour9.title" routeKey="tour9.route" timeKey="tour9.time" includedKey="tour9.included" />
          <TourCardTiered image="/images/aktau.jpeg" titleKey="tour10.title" routeKey="tour10.route" timeKey="tour10.time" includedKey="tour10.included" />
          <TourCardTiered image="/images/issyk-bear.jpg" titleKey="tour11.title" routeKey="tour11.route" timeKey="tour11.time" includedKey="tour11.included" />
        </div>

        {/* 2. СЕКЦИЯ: ДВУХДНЕВНЫЕ ТУРЫ */}
        <div className="mb-24">
          <h3 className="mb-8 text-[25px] font-semibold uppercase tracking-[0.4em] text-primary">{t("tours.twoday.label")}</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <TourCardTiered 
              image="/images/dunes-2d.jpg" 
              titleKey="tour12.title" 
              routeKey="tour12.route" 
              timeKey="tour12.time" 
              includedKey="tour12.included"  
            />
            <TourCardTiered 
              image="/images/kolsai-2d.jpg" 
              titleKey="tour13.title" 
              routeKey="tour13.route" 
              timeKey="tour13.time" 
              includedKey="tour13.included" 
            />
          </div>
        </div>

        {/* 3. СЕКЦИЯ: МНОГОДНЕВНЫЕ ПАКЕТЫ */}
        <div className="relative space-y-8">
          <h3 className="text-[25px] font-semibold uppercase tracking-[0.4em] text-primary">
            {t("tours.multiday")}
          </h3>
          {showArrow && (
  <div className="absolute right-4 top-9 
    text-[32px] text-primary animate-bounce 
    pointer-events-none z-20 
    transition-all duration-300">
    ➔
  </div>
)}
          <div
  ref={scrollRef}
  onScroll={handleScroll}
  className="relative flex gap-6 overflow-x-auto snap-x scroll-smooth pb-6 px-6 no-scrollbar"
>
            <TourCardMultiDay 
              image="/images/charyn-canyon-kazakhstan-almaty-moon-260nw-2502628429.jpg.webp" 
              title={t("tour6.pkg1.title")} 
              duration={t("tour6.pkg1.duration")} 
              days={[t("tour6.pkg1.day1"), t("tour6.pkg1.day2"), t("tour6.pkg1.day3")]} 
              included={t("tour6.pkg1.included")} 
              prices={[t("tour6.pkg1.price1"), t("tour6.pkg1.price2"), t("tour6.pkg1.price3"), t("tour6.pkg1.price4"), t("tour6.pkg1.price5"), t("tour6.pkg1.price6"), t("tour6.pkg1.price7")]} 
            />
            {/* Остальные карточки аналогично темные... */}
            <TourCardMultiDay image="/images/кольсай.jpg" title={t("tour6.pkg2.title")} duration={t("tour6.pkg2.duration")} days={[t("tour6.pkg2.day1"), t("tour6.pkg2.day2"), t("tour6.pkg2.day3")]} included={t("tour6.pkg2.included")} prices={[t("tour6.pkg2.price1"), t("tour6.pkg2.price2"), t("tour6.pkg2.price3"), t("tour6.pkg2.price4"), t("tour6.pkg2.price5"), t("tour6.pkg2.price6"), t("tour6.pkg2.price7")]} />
            <TourCardMultiDay image="/images/almaty.jpg" title={t("tour6.pkg3.title")} duration={t("tour6.pkg3.duration")} days={[t("tour6.pkg3.day1"), t("tour6.pkg3.day2"), t("tour6.pkg3.day3")]} included={t("tour6.pkg3.included")} prices={[t("tour6.pkg3.price1"), t("tour6.pkg3.price2"), t("tour6.pkg3.price3"), t("tour6.pkg3.price4"), t("tour6.pkg3.price5"), t("tour6.pkg3.price6"), t("tour6.pkg3.price7")]} />
            <TourCardMultiDay image="/images/black-canyon-kazakhstan-o8z8.webp" title={t("tour6.pkg4.title")} duration={t("tour6.pkg4.duration")} days={[t("tour6.pkg4.day1"), t("tour6.pkg4.day2"), t("tour6.pkg4.day3")]} included={t("tour6.pkg4.included")} prices={[t("tour6.pkg4.price1"), t("tour6.pkg4.price2"), t("tour6.pkg4.price3"), t("tour6.pkg4.price4"), t("tour6.pkg4.price5"), t("tour6.pkg4.price6"), t("tour6.pkg4.price7")]} />
          </div>
          
          
        </div>
      </div>
    </section>
  );
}