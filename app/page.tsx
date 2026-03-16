"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ToursSection } from "@/components/tours-section"
import { ExploreSection } from "@/components/explore-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Head from "next/head"

export default function Home() {
  return (
    <LanguageProvider>
      <Head>
        {/* Основные метатеги */}
        <title>KairTravelAlmaty — Премиум приключения в Казахстане</title>
        <meta name="description" content="Путешествуйте по Казахстану с KairTravelAlmaty: авторские туры, природные и культурные достопримечательности." />
        <meta name="keywords" content="Казахстан, туризм, путешествия, туры, Алматы, экскурсии, приключения" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ваш-домен.kz" />

        {/* Open Graph (Facebook, WhatsApp и др.) */}
        <meta property="og:title" content="KairTravelAlmaty — Премиум приключения в Казахстане" />
        <meta property="og:description" content="Путешествуйте по Казахстану с KairTravelAlmaty: авторские туры, природные и культурные достопримечательности." />
        <meta property="og:image" content="https://ваш-домен.kz/images/preview.jpg" />
        <meta property="og:url" content="https://ваш-домен.kz" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KairTravelAlmaty — Премиум приключения в Казахстане" />
        <meta name="twitter:description" content="Путешествуйте по Казахстану с KairTravelAlmaty: авторские туры, природные и культурные достопримечательности." />
        <meta name="twitter:image" content="https://ваш-домен.kz/images/preview.jpg" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ToursSection />
        <ExploreSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}