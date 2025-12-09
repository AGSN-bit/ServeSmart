"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

interface Reservation {
  id: string
  date: string
  meal: string
  status: "will-eat" | "skip"
}

export default function ReservationDemo() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [selectedMeal, setSelectedMeal] = useState<string>("Lunch")

  const meals = [
    { name: "Breakfast", time: "7:00 AM - 10:00 AM" },
    { name: "Lunch", time: "11:30 AM - 1:30 PM" },
    { name: "Dinner", time: "5:00 PM - 8:00 PM" },
  ]

  const handleReservation = (status: "will-eat" | "skip") => {
    const newReservation: Reservation = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      meal: selectedMeal,
      status,
    }

    setReservations((prev) => {
      const filtered = prev.filter((r) => r.meal !== selectedMeal)
      return [newReservation, ...filtered]
    })

    setTimeout(() => {
      setReservations((prev) => prev.filter((r) => r.id !== newReservation.id))
    }, 3000)
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">One-Click Reservations</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Reserve your meal in one tap. Let the dining hall know if you're coming or skipping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Demo Section */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Today's Meals</h3>
              <div className="space-y-3">
                {meals.map((meal) => (
                  <div
                    key={meal.name}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${selectedMeal === meal.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    onClick={() => setSelectedMeal(meal.name)}
                  >
                    <div className="font-semibold">{meal.name}</div>
                    <div className="text-sm text-foreground/60">{meal.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Action</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Selected: <span className="font-semibold text-primary">{selectedMeal}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleReservation("will-eat")}
                  className="flex-1 bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition flex items-center justify-center gap-2"
                >
                  <Check size={20} />
                  <span>Will Eat</span>
                </button>
                <button
                  onClick={() => handleReservation("skip")}
                  className="flex-1 bg-muted text-foreground py-3 rounded-lg font-semibold hover:bg-muted/80 transition flex items-center justify-center gap-2"
                >
                  <X size={20} />
                  <span>Skip</span>
                </button>
              </div>
            </div>
          </div>

          {/* Feedback Display */}
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-semibold text-lg mb-4">Recent Reservations</h3>
            <div className="space-y-3 min-h-60">
              {reservations.length > 0 ? (
                reservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className={`p-4 rounded-lg border-2 animate-in fade-in slide-in-from-top-2 ${reservation.status === "will-eat" ? "border-accent/50 bg-accent/10" : "border-muted-foreground/50 bg-muted/30"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{reservation.meal}</div>
                        <div className="text-sm text-foreground/60">{reservation.date}</div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${reservation.status === "will-eat" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"}`}
                      >
                        {reservation.status === "will-eat" ? "✓ Confirmed" : "✗ Skipped"}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center text-foreground/40 text-center py-12">
                  <div>
                    <div className="text-3xl mb-2">📋</div>
                    <p>Make a reservation to see it here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
