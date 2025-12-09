"use client"

import { useState, useEffect } from "react"
import { Users, TrendingUp } from "lucide-react"

interface DiningHallStats {
  name: string
  currentOccupancy: number
  maxCapacity: number
  trend: "up" | "down" | "stable"
  estimatedWaitTime: number
}

export default function LiveStatsDemo() {
  const [stats, setStats] = useState<DiningHallStats[]>([
    { name: "North Hall", currentOccupancy: 45, maxCapacity: 100, trend: "up", estimatedWaitTime: 8 },
    { name: "South Hall", currentOccupancy: 72, maxCapacity: 120, trend: "down", estimatedWaitTime: 12 },
    { name: "East Commons", currentOccupancy: 28, maxCapacity: 80, trend: "stable", estimatedWaitTime: 2 },
  ])
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((hall) => ({
          ...hall,
          currentOccupancy: Math.max(
            5,
            Math.min(hall.maxCapacity - 5, hall.currentOccupancy + (Math.random() * 20 - 10)),
          ),
          trend: Math.random() > 0.5 ? "up" : Math.random() > 0.5 ? "down" : "stable",
          estimatedWaitTime: Math.max(1, Math.floor(Math.random() * 25)),
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [isRunning])

  const getOccupancyColor = (occupancy: number, max: number) => {
    const percentage = (occupancy / max) * 100
    if (percentage < 40) return "bg-accent"
    if (percentage < 70) return "bg-secondary"
    return "bg-destructive"
  }

  const getOccupancyLabel = (occupancy: number, max: number) => {
    const percentage = (occupancy / max) * 100
    if (percentage < 40) return "✓ Not Busy"
    if (percentage < 70) return "⚠️ Moderately Busy"
    return "🔴 Very Busy"
  }

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Live Crowd Analytics</h2>
            <p className="text-foreground/70 text-lg">
              Real-time occupancy and wait time estimates powered by client-side simulation
            </p>
          </div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap ${isRunning ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}
          >
            {isRunning ? "⏸ Pause" : "▶ Resume"}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((hall) => (
            <div
              key={hall.name}
              className="bg-background rounded-xl border border-border p-6 hover:border-primary/50 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{hall.name}</h3>
                  <p className="text-sm text-foreground/60">
                    {getOccupancyLabel(hall.currentOccupancy, hall.maxCapacity)}
                  </p>
                </div>
                <TrendingUp
                  size={20}
                  className={
                    hall.trend === "up" ? "text-destructive" : hall.trend === "down" ? "text-accent" : "text-secondary"
                  }
                />
              </div>

              {/* Occupancy Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">
                    {Math.round(hall.currentOccupancy)} / {hall.maxCapacity}
                  </span>
                  <span className="text-xs text-foreground/60">
                    {Math.round((hall.currentOccupancy / hall.maxCapacity) * 100)}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getOccupancyColor(hall.currentOccupancy, hall.maxCapacity)} transition-all`}
                    style={{ width: `${(hall.currentOccupancy / hall.maxCapacity) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-foreground/60 mb-1">Wait Time</div>
                  <div className="text-lg font-bold">{hall.estimatedWaitTime} min</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-foreground/60 mb-1 flex items-center gap-1">
                    <Users size={12} /> Available Seats
                  </div>
                  <div className="text-lg font-bold">{Math.round(hall.maxCapacity - hall.currentOccupancy)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-background rounded-xl border border-border p-6">
          <h3 className="font-semibold text-lg mb-4">How It Works</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">Real-Time Updates</div>
              <p className="text-sm text-foreground/70">Live occupancy data streams from our edge network</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold">Smart Predictions</div>
              <p className="text-sm text-foreground/70">AI analyzes trends to estimate wait times</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Instant Alerts</div>
              <p className="text-sm text-foreground/70">Get notified when your hall has low wait times</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
