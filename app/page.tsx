"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ReservationDemo from "@/components/reservation-demo"
import FeedbackDemo from "@/components/feedback-demo"
import LiveStatsDemo from "@/components/live-stats-demo"
import FutureFeatures from "@/components/future-features"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ReservationDemo />
      <FeedbackDemo />
      <LiveStatsDemo />
      <FutureFeatures />
      <Footer />
    </main>
  )
}
