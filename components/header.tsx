"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                🍽️
              </div>
              ServeSmart
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("feedback")}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Feedback
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Live Stats
            </button>
            <button
              onClick={() => scrollToSection("future")}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Coming Soon
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("feedback")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition"
            >
              Feedback
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition"
            >
              Live Stats
            </button>
            <button
              onClick={() => scrollToSection("future")}
              className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition"
            >
              Coming Soon
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
