import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-void border-t border-surface-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-header font-bold text-white mb-4">Velricon</h3>
            <p className="text-slate font-body max-w-md">
              Financial leadership without the cost of a full-time CFO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-header font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/startups" className="text-slate hover:text-white transition-colors font-body">
                  For Startups
                </Link>
              </li>
              <li>
                <Link href="/services/scaleups" className="text-slate hover:text-white transition-colors font-body">
                  For Scaleups
                </Link>
              </li>
              <li>
                <Link href="/services/smes" className="text-slate hover:text-white transition-colors font-body">
                  For SMEs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-header font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are" className="text-slate hover:text-white transition-colors font-body">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate hover:text-white transition-colors font-body">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate hover:text-white transition-colors font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-border">
          <p className="text-slate text-sm font-body text-center">
            © {currentYear} Velricon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

