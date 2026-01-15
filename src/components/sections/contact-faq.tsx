'use client'

import { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, HelpCircle, X } from 'lucide-react'
import Link from 'next/link'
import { AnimatedGridBackground } from '@/components/ui/animated-grid-background'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type FaqItem = {
  id: string
  question: string
}

const faqItems: FaqItem[] = [
  { id: 'faq-1', question: 'Do we need a full-time CFO yet?' },
  { id: 'faq-2', question: 'What does a Fractional CFO engagement look like month-to-month?' },
  { id: 'faq-3', question: 'Are we ready to approach a bank for financing?' },
  { id: 'faq-4', question: "What’s typically needed for an investor-ready financial model?" },
  { id: 'faq-5', question: 'Can you work with our existing accountant or finance team?' },
  { id: 'faq-6', question: 'How fast can we get clarity on cash flow and forecasts?' },
]

const starterTemplate = (question: string) =>
  `Hi Velricon, I'd like to ask about: ${question}.\nContext: `

export function ContactFaq() {
  const sectionRef = useRef<HTMLElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-120px' })
  const prefersReducedMotion = useReducedMotion()

  const [selectedFaqId, setSelectedFaqId] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    stage: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedFaq = useMemo(
    () => faqItems.find((faq) => faq.id === selectedFaqId),
    [selectedFaqId]
  )

  const handleFaqSelect = (faq: FaqItem) => {
    setSelectedFaqId(faq.id)
    setMessage(starterTemplate(faq.question))
    requestAnimationFrame(() => messageRef.current?.focus())
  }

  const handleClearFaq = () => {
    setSelectedFaqId(null)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
    setErrors((prev) => ({ ...prev, message: '' }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}

    if (!formValues.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formValues.email.trim()) nextErrors.email = 'Please enter your email.'
    if (!message.trim()) nextErrors.message = 'Please include a short message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    console.log('Contact FAQ submission', {
      ...formValues,
      message,
      selectedFaq: selectedFaq?.question ?? null,
    })
  }

  const progressSteps = [
    formValues.name.trim().length > 0,
    formValues.email.trim().length > 0,
    formValues.company.trim().length > 0,
    formValues.stage.trim().length > 0,
    message.trim().length > 0,
  ]
  const completedCount = progressSteps.filter(Boolean).length

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-deep-void py-24 md:py-32 lg:py-40"
    >
      <AnimatedGridBackground className="z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="max-w-3xl"
        >
          <p className="text-xs font-body tracking-[0.3em] uppercase text-strategy-blue">
            Start a conversation
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight text-platinum">
            Questions, financing, or next steps
          </h2>
          <p className="mt-4 text-base md:text-lg font-body text-platinum/70">
            Choose a common question or write your own message.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
            className="rounded-2xl border border-white/15 bg-[linear-gradient(135deg,rgba(14,16,26,0.75),rgba(10,12,18,0.85))] backdrop-blur-[24px] p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hidden md:block"
          >
            <div className="flex items-center gap-2 text-platinum/70">
              <HelpCircle className="h-4 w-4 text-strategy-blue" />
              <p className="text-xs font-body tracking-[0.3em] uppercase">FAQ selection</p>
            </div>
            <div className="mt-6 space-y-3">
              {faqItems.map((faq) => {
                const isSelected = selectedFaqId === faq.id
                return (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => handleFaqSelect(faq)}
                    className={cn(
                      'group w-full rounded-xl border px-4 py-3 text-left transition-all duration-300',
                      'bg-elevation-layer/50 border-white/10 hover:border-strategy-blue/40 hover:-translate-y-0.5',
                      isSelected && 'border-strategy-blue/60 shadow-[0_0_20px_rgba(116,179,255,0.25)]'
                    )}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm font-body text-platinum/80 group-hover:text-platinum">
                        {faq.question}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] uppercase tracking-[0.2em] text-strategy-blue">
                          Selected
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
            className="relative rounded-2xl border border-white/15 bg-[linear-gradient(135deg,rgba(14,16,26,0.75),rgba(10,12,18,0.85))] backdrop-blur-[24px] p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          >
            <div
              className="pointer-events-none absolute left-3 top-6 bottom-6 w-px md:hidden"
              aria-hidden="true"
            >
              <div className="flex h-full flex-col gap-2">
                {progressSteps.map((isComplete, index) => (
                  <span
                    key={`progress-vertical-${index}`}
                    className={cn(
                      'flex-1 rounded-full transition-colors duration-300',
                      isComplete ? 'bg-electric-blue' : 'bg-white/15'
                    )}
                  />
                ))}
              </div>
            </div>
            <div
              className="hidden md:flex items-center gap-2 mb-6"
              aria-label={`Form progress: ${completedCount} of ${progressSteps.length} steps completed`}
            >
              {progressSteps.map((isComplete, index) => (
                <span
                  key={`progress-${index}`}
                  className={cn(
                    'h-1 flex-1 rounded-full transition-colors duration-300',
                    isComplete ? 'bg-electric-blue' : 'bg-white/10'
                  )}
                />
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                    Full name
                  </label>
                  <input
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-elevation-layer/60 px-3 py-2 text-sm text-platinum outline-none transition',
                      'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                    )}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-strategy-blue/80">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-elevation-layer/60 px-3 py-2 text-sm text-platinum outline-none transition',
                      'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                    )}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-strategy-blue/80">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                    Company (optional)
                  </label>
                  <input
                    name="company"
                    value={formValues.company}
                    onChange={handleInputChange}
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-elevation-layer/60 px-3 py-2 text-sm text-platinum outline-none transition',
                      'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                    )}
                  />
                </div>
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                    Stage (optional)
                  </label>
                  <select
                    name="stage"
                    value={formValues.stage}
                    onChange={handleInputChange}
                    className={cn(
                      'mt-2 w-full rounded-lg border bg-elevation-layer/60 px-3 py-2 text-sm text-platinum outline-none transition',
                      'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                    )}
                  >
                    <option value="">Select stage</option>
                    <option value="start-up">Start-up</option>
                    <option value="scale-up">Scale-up</option>
                    <option value="established-sme">Established SME</option>
                  </select>
                </div>
              </div>

              <div className="md:hidden">
                <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                  Select a question
                </label>
                <select
                  value={selectedFaqId ?? ''}
                  onChange={(event) => {
                    const selected = faqItems.find((faq) => faq.id === event.target.value)
                    if (selected) {
                      handleFaqSelect(selected)
                    } else {
                      handleClearFaq()
                    }
                  }}
                  className={cn(
                    'mt-2 w-full rounded-lg border bg-elevation-layer/60 px-3 py-2 text-sm text-platinum outline-none transition',
                    'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                  )}
                >
                  <option value="">Choose a FAQ question</option>
                  {faqItems.map((faq) => (
                    <option key={faq.id} value={faq.id}>
                      {faq.question}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-body uppercase tracking-[0.2em] text-slate">
                  Message
                </label>
                {selectedFaq && (
                  <div className="mt-2 flex items-center justify-between rounded-lg border border-strategy-blue/40 bg-elevation-layer/70 px-3 py-2">
                    <span className="text-xs text-strategy-blue">{selectedFaq.question}</span>
                    <button
                      type="button"
                      onClick={handleClearFaq}
                      className="text-slate hover:text-platinum transition"
                      aria-label="Clear selected question"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <textarea
                  ref={messageRef}
                  value={message}
                  onChange={handleMessageChange}
                  rows={6}
                  className={cn(
                    'mt-3 w-full rounded-lg border bg-elevation-layer/60 px-3 py-3 text-sm text-platinum outline-none transition',
                    'border-white/10 focus:border-strategy-blue/40 focus:ring-2 focus:ring-strategy-blue/20'
                  )}
                  placeholder="Write your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-strategy-blue/80">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-body font-medium text-white shadow-[0_0_24px_rgba(116,179,255,0.2)] transition hover:border-white/80 hover:shadow-[0_0_30px_rgba(116,179,255,0.28)]"
                >
                  Send message
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-body text-strategy-blue hover:text-platinum transition"
                >
                  Book a strategy call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
