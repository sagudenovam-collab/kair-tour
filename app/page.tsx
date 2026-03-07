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

export default function Home() {
  return (
    <LanguageProvider>
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
