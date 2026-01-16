'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BookingEmbed } from '@/components/booking/BookingEmbed'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    trackEvent('booking_embed_view', { page: 'contact' })
  }, [])

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl font-body font-light text-platinum/90 max-w-2xl mx-auto">
            Book a strategy call to discuss how we can help your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Embed */}
          <div>
            <Card className="h-full">
              <h2 className="text-2xl font-accent font-light tracking-tight text-white mb-6">
                Book a Strategy Call
              </h2>
              <BookingEmbed />
            </Card>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <Card className="h-full">
              <h2 className="text-2xl font-accent font-light tracking-tight text-white mb-6">
                Send a Message
              </h2>
              <p className="text-platinum font-body mb-6">
                Prefer to send a message? Fill out the form below and we'll get back to you.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-platinum font-body mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-2xl bg-deep-void border border-surface-border text-white font-body focus:outline-none focus:ring-2 focus:ring-strategy-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-platinum font-body mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-2xl bg-deep-void border border-surface-border text-white font-body focus:outline-none focus:ring-2 focus:ring-strategy-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-platinum font-body mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl bg-deep-void border border-surface-border text-white font-body focus:outline-none focus:ring-2 focus:ring-strategy-blue resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="link"
                  size="lg"
                  className="w-full rounded-2xl font-body font-medium"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}

