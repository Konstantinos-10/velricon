import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a strategy call or get in touch with Velricon.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

