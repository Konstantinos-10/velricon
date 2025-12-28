export type BookingProvider = 'hubspot' | 'calendly'

export const bookingConfig = {
  provider: (process.env.NEXT_PUBLIC_BOOKING_PROVIDER || 'calendly') as BookingProvider,
  hubspot: {
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '',
    meetingId: process.env.NEXT_PUBLIC_HUBSPOT_MEETING_ID || '',
  },
  calendly: {
    url: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
  },
}

