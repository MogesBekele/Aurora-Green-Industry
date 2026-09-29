import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1f0e] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <img
                src="/agi_logo_new.png"
                alt="Aurora Green Industries PLC"
                className="h-20 w-auto rounded-lg bg-white p-2 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Compressed Air & Industrial Solutions — Atlas Copco Compressors, Genuine Parts, Maintenance Services & Industrial Gases.
            </p>
            <div className="divider-gold mb-6" />
            <div className="space-y-3">
              <a
                href="tel:+251944999966"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#c8922a] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1a472a] flex items-center justify-center shrink-0 group-hover:bg-[#c8922a] transition-colors">
                  <Phone size={13} />
                </div>
                +251 944 999 966
              </a>
              <a
                href="mailto:d.berossa@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#c8922a] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1a472a] flex items-center justify-center shrink-0 group-hover:bg-[#c8922a] transition-colors">
                  <Mail size={13} />
                </div>
                d.berossa@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#1a472a] flex items-center justify-center shrink-0">
                  <MapPin size={13} />
                </div>
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#c8922a] font-semibold text-sm uppercase tracking-wider mb-5">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Atlas Copco CSO', path: '/atlas-copco' },
                { label: 'Genuine Parts', path: '/atlas-copco' },
                { label: 'Industrial & Medical Gases', path: '/gases' },
                { label: 'Gas Equipment', path: '/gas-equipment' },
                { label: 'Maintenance & Service', path: '/maintenance' },
                { label: 'Energy Optimization', path: '/atlas-copco' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2d7a4f] group-hover:bg-[#c8922a] transition-colors inline-block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[#c8922a] font-semibold text-sm uppercase tracking-wider mb-5">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {[
                'Healthcare',
                'Manufacturing',
                'Welding & Fabrication',
                'Construction',
                'Mining',
                'Laboratories',
                'Water & Drilling',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/industries"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2d7a4f] group-hover:bg-[#c8922a] transition-colors inline-block" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c8922a] font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'About Aurora Green', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Request a Quote', path: '/contact' },
                { label: 'Request Service', path: '/contact' },
                { label: 'Request Gas Supply', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2d7a4f] group-hover:bg-[#c8922a] transition-colors inline-block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Official Atlas Copco Ethiopia:</p>
              <a
                href="https://www.atlascopco.com/en-et"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#4dbf82] hover:text-[#c8922a] transition-colors"
              >
                atlascopco.com/en-et
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} Aurora Green Industries PLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Atlas Copco | Genuine Parts | Maintenance & Service | Industrial & Medical Gases | Gas Equipment
          </p>
        </div>
      </div>
    </footer>
  )
}
