'use client'

import { useEffect, useRef } from 'react'
import { bookingConfig } from '@/config/booking'

interface BookingEmbedProps {
  provider?: 'hubspot' | 'calendly'
  className?: string
}

export function BookingEmbed({ provider, className = '' }: BookingEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeProvider = provider || bookingConfig.provider

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ''

    if (activeProvider === 'hubspot') {
      const { portalId, meetingId } = bookingConfig.hubspot
      if (!portalId || !meetingId) {
        container.innerHTML = '<p className="text-slate">HubSpot configuration missing. Please set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_MEETING_ID</p>'
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://js.hs-scripts.com/${portalId}.js`
      script.async = true
      script.defer = true
      document.body.appendChild(script)

      const embedScript = document.createElement('script')
      embedScript.type = 'text/javascript'
      embedScript.innerHTML = `
        (function() {
          var hsMeeting = document.createElement('script');
          hsMeeting.type = 'text/javascript';
          hsMeeting.async = true;
          hsMeeting.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hsMeeting);
        })();
      `
      document.body.appendChild(embedScript)

      const meetingDiv = document.createElement('div')
      meetingDiv.className = 'meetings-iframe-container'
      meetingDiv.setAttribute('data-src', `https://meetings.hubspot.com/${meetingId}`)
      container.appendChild(meetingDiv)
    } else {
      // Calendly
      const { url } = bookingConfig.calendly
      if (!url) {
        container.innerHTML = '<p className="text-slate">Calendly configuration missing. Please set NEXT_PUBLIC_CALENDLY_URL</p>'
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)

      const calendlyDiv = document.createElement('div')
      calendlyDiv.className = 'calendly-inline-widget'
      calendlyDiv.setAttribute('data-url', url)
      calendlyDiv.style.minWidth = '320px'
      calendlyDiv.style.height = '700px'
      container.appendChild(calendlyDiv)
    }
  }, [activeProvider])

  return (
    <div 
      ref={containerRef} 
      className={`rounded-3xl overflow-hidden bg-elevation-layer border border-surface-border ${className}`}
    />
  )
}

