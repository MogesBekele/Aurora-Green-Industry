import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Atlas Copco', path: '/atlas-copco' },
  {
    label: 'Gases',
    path: '/gases',
    children: [
      { label: 'Industrial & Medical Gases', path: '/gases' },
      { label: 'Gas Equipment', path: '/gas-equipment' },
    ],
  },
  { label: 'Maintenance & Service', path: '/maintenance' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [gasOpen, setGasOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setGasOpen(false)
  }, [location])

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path))

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/agi_logo_new.png"
                alt="Aurora Green Industries PLC"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button
                      onMouseEnter={() => setGasOpen(true)}
                      onMouseLeave={() => setGasOpen(false)}
                      className={`nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(item.path)
                          ? 'text-[#111827] active'
                          : 'text-gray-700 hover:text-[#111827]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${gasOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      onMouseEnter={() => setGasOpen(true)}
                      onMouseLeave={() => setGasOpen(false)}
                      className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                        gasOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-56">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f6f8fa] hover:text-[#111827] transition-colors border-b border-gray-50 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-[#111827] active'
                        : 'text-gray-700 hover:text-[#111827]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                id="nav-cta-contact"
                className="ml-3 btn-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu bg-white border-t border-gray-100 pb-4">
            <div className="max-w-7xl mx-auto px-4 pt-2">
              {/* Mobile contact strip */}
              <div className="flex gap-4 py-3 border-b border-gray-100 mb-2">
                <a
                  href="tel:+251944999966"
                  className="flex items-center gap-1.5 text-xs text-[#111827] font-medium"
                >
                  <Phone size={12} />
                  +251 944 999 966
                </a>
              </div>
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-3 py-2.5 text-xs font-semibold text-[#0097B2] uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-6 py-2.5 text-sm text-gray-700 hover:text-[#111827] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-[#111827] bg-gray-100'
                        : 'text-gray-700 hover:text-[#111827] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="block w-full text-center btn-gold text-white font-semibold py-3 rounded-full text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

