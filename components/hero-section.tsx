"use client"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
            Intelligent Meal Reservations Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
            One-click reservations, real-time crowd analytics, and anonymous feedback. ServeSmart transforms how dining
            halls operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Explore Demo
            </button>
            <button
              onClick={() => document.getElementById("future")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
            >
              Future Tech
            </button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="mt-16 mx-auto max-w-2xl px-4">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 sm:p-12 aspect-video flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-5xl">🍽️📊💬</div>
              <p className="text-foreground/60 font-medium">Interactive Demo Below</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
