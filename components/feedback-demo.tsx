"use client"

import type React from "react"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"

interface Feedback {
  id: string
  type: "appreciation" | "feedback"
  message: string
  timestamp: string
  anonymous: boolean
}

export default function FeedbackDemo() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [feedback, setFeedback] = useState("")
  const [feedbackType, setFeedbackType] = useState<"appreciation" | "feedback">("feedback")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return

    const newFeedback: Feedback = {
      id: Date.now().toString(),
      type: feedbackType,
      message: feedback,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      anonymous: true,
    }

    setFeedbacks((prev) => [newFeedback, ...prev].slice(0, 5))
    setFeedback("")

    setTimeout(() => {
      setFeedbacks((prev) => prev.filter((f) => f.id !== newFeedback.id))
    }, 4000)
  }

  return (
    <section id="feedback" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Anonymous Feedback</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Share appreciation or constructive feedback completely anonymously. Your identity is never revealed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Submission Form */}
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-semibold text-lg mb-6">Share Your Thoughts</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFeedbackType("feedback")}
                  className={`flex-1 py-2 px-4 rounded-lg transition font-medium flex items-center justify-center gap-2 ${feedbackType === "feedback" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}
                >
                  <MessageCircle size={18} />
                  Feedback
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackType("appreciation")}
                  className={`flex-1 py-2 px-4 rounded-lg transition font-medium flex items-center justify-center gap-2 ${feedbackType === "appreciation" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}
                >
                  <Heart size={18} />
                  Appreciation
                </button>
              </div>

              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type your anonymous message..."
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Send Anonymously
              </button>
            </form>
          </div>

          {/* Live Feed */}
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-semibold text-lg mb-4">Live Feed</h3>
            <div className="space-y-3 min-h-80">
              {feedbacks.length > 0 ? (
                feedbacks.map((f) => (
                  <div
                    key={f.id}
                    className={`p-4 rounded-lg border-l-4 animate-in fade-in slide-in-from-right-2 ${f.type === "appreciation" ? "bg-accent/10 border-accent" : "bg-secondary/10 border-secondary"}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {f.type === "appreciation" ? (
                          <Heart size={16} className="text-accent" />
                        ) : (
                          <MessageCircle size={16} className="text-secondary" />
                        )}
                        <span className="text-xs font-semibold text-foreground/60 uppercase">
                          {f.type === "appreciation" ? "❤️ Appreciation" : "💬 Feedback"}
                        </span>
                      </div>
                      <span className="text-xs text-foreground/50">{f.timestamp}</span>
                    </div>
                    <p className="text-foreground/80">{f.message}</p>
                    <p className="text-xs text-foreground/40 mt-2">🔒 Anonymous</p>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center text-foreground/40 text-center py-12">
                  <div>
                    <div className="text-3xl mb-2">💭</div>
                    <p>Feedback will appear here</p>
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
