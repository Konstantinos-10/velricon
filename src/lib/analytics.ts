'use client'

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, properties)
  }
  
  // Also log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties)
  }
}

