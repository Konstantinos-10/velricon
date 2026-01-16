'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { trackEvent } from '@/lib/analytics'

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      {
        label: 'For Startups',
        href: '/services/startups',
      },
      {
        label: 'For Scaleups',
        href: '/services/scaleups',
      },
      {
        label: 'For Established SMEs',
        href: '/services/smes',
      },
      {
        label: 'Investor Ready Package',
        href: '/services/investor-ready',
      },
      {
        label: 'Bank Ready Package',
        href: '/services/bank-ready',
      },
    ],
  },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > 20
    }
    return false
  })
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Check initial scroll position immediately
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleStrategyCallClick = () => {
    trackEvent('strategy_call_click', { location: 'navbar' })
    window.location.href = '/contact'
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        ...(isScrolled 
          ? {
              backgroundColor: 'rgba(26, 31, 46, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
            }
          : {
              backgroundColor: 'transparent',
              background: 'transparent',
              backdropFilter: 'none',
              boxShadow: 'none',
            }
        ),
        transition: 'background-color 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-normal tracking-tight text-white">Velricon</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative" ref={item.children ? dropdownRef : null}>
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="relative"
                  >
                    <button
                      className="flex items-center gap-1 text-platinum hover:text-white transition-colors font-normal tracking-tight"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <Icon name="chevron-down" className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-elevation-layer rounded-2xl border border-surface-border shadow-xl p-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href!}
                              onClick={() => {
                                trackEvent('nav_service_click', { service: child.label })
                                setOpenDropdown(null)
                              }}
                              className="block px-4 py-3 rounded-xl text-platinum hover:text-white hover:bg-deep-void transition-colors font-normal tracking-tight"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-platinum hover:text-white transition-colors font-normal tracking-tight"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={handleStrategyCallClick} variant="link" size="default">
              Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {openDropdown === 'mobile' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-2 mt-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="w-full text-left px-4 py-2 text-platinum font-normal tracking-tight"
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        >
                          {item.label}
                        </button>
                        {openDropdown === item.label && (
                          <div className="pl-4 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href!}
                                onClick={() => {
                                  trackEvent('nav_service_click', { service: child.label })
                                  setOpenDropdown(null)
                                }}
                                className="block px-4 py-2 text-slate hover:text-white rounded-lg"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-4 py-2 text-platinum hover:text-white rounded-lg"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Button onClick={handleStrategyCallClick} variant="primary" size="default" shiny={false} className="w-full">
                    Strategy Call
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

