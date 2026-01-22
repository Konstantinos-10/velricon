import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-void border-t border-surface-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-normal tracking-tight text-white mb-4">Velricon</h3>
            <p className="text-slate font-normal tracking-tight leading-relaxed max-w-md">
              Financial leadership that helps businesses grow with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium tracking-tight mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/investor-ready" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Investor-Ready Packages
                </Link>
              </li>
              <li>
                <Link href="/services/bank-ready" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Bank Financing & Refinancing
                </Link>
              </li>
              <li>
                <Link href="/services/ongoing-financial-leadership" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Ongoing Financial Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium tracking-tight mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate hover:text-white transition-colors font-normal tracking-tight">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-border">
          <p className="text-slate text-sm font-normal tracking-tight text-center">
            © {currentYear} Velricon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

