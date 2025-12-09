"use client"

import { Zap } from "lucide-react"

export default function FutureFeatures() {
  const features = [
    {
      icon: "📸",
      title: "AI Plate Scanner",
      description:
        "Computer vision technology automatically identifies dishes and tracks inventory in real-time. Smart cameras monitor food levels and freshness indicators.",
      status: "Coming Q2 2025",
    },
    {
      icon: "🔥",
      title: "Crowd Heatmap",
      description:
        "Visual floor heatmaps show real-time density across dining halls. Visitors instantly see the least crowded areas and optimal entry points.",
      status: "Coming Q2 2025",
    },
    {
      icon: "📲",
      title: "Smart Wristband Integration",
      description:
        "Tap your wristband to reserve meals and provide feedback without even touching your phone. Seamless tap-to-reserve experience.",
      status: "Coming Q3 2025",
    },
    {
      icon: "🔐",
      title: "QR Code Verification",
      description:
        "Scan QR codes at entry points for instant validation. Staff verification system with real-time no-show tracking.",
      status: "Coming Q3 2025",
    },
  ]

  return (
    <section id="future" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-accent" size={24} />
            <h2 className="text-3xl sm:text-4xl font-bold">Coming Soon: Hardware Features</h2>
            <Zap className="text-accent" size={24} />
          </div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Next-generation tech transforms dining halls into intelligent, efficient spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-primary/20 p-6 hover:border-primary/50 transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 mb-4">{feature.description}</p>
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                    {feature.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-12 bg-background rounded-xl border border-border p-8">
          <h3 className="font-semibold text-xl mb-6">Advanced Technology Stack</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-semibold">Machine Learning</div>
              <p className="text-xs text-foreground/60 mt-1">Plate recognition & crowd prediction</p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📡</div>
              <div className="text-sm font-semibold">Edge Compute</div>
              <p className="text-xs text-foreground/60 mt-1">Real-time processing at venue</p>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔋</div>
              <div className="text-sm font-semibold">IoT Devices</div>
              <p className="text-xs text-foreground/60 mt-1">Wristbands, scanners & sensors</p>
            </div>
            <div className="bg-foreground/5 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-sm font-semibold">Real-Time APIs</div>
              <p className="text-xs text-foreground/60 mt-1">Seamless data sync & updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
