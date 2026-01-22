import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/ContactHero'
import { ContactBookingSection } from '@/components/sections/ContactBookingSection'
import { ContactFaq } from '@/components/sections/contact-faq'

export const metadata: Metadata = {
  title: 'Contact Us | Velricon',
  description: 'Connect with Velricon for strategic financial leadership, bank financing preparation, and professional investor-ready support.',
}

export default function ContactPage() {
  return (
    <main className="bg-deep-void min-h-screen">
      <ContactHero />
      <ContactBookingSection />
      <ContactFaq />
    </main>
  )
}
