import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ExternalLink,
  Home,
  ChevronRight,
  ArrowRight,
  Award,
  Phone,
} from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const serviceCards = [
  {
    id: 'compressors',
    title: 'Piston & Screw Compressors',
    subtitle: 'Explore our complete range of Atlas Copco air compressors for every industrial application across Ethiopia.',
    services: [
      'Piston Air Compressors & High-Pressure Boosters',
      'Rotary Screw Compressors (GA / GX Series)',
      'Oil-Free Air Compressors (Class 0 Purity)',
      'Variable Speed Drive (VSD) Energy Savers',
    ],
  },
  {
    id: 'genuine-parts',
    title: 'Genuine OEM Parts & Service Kits',
    subtitle: 'Maximize uptime and safeguard equipment with factory-certified spare parts and scheduled interval kits.',
    services: [
      'Factory-Certified OEM Elements, Valves & Motors',
      'Pre-Packaged 4,000h & 8,000h Maintenance Kits',
      'Precision Air Intake, Oil Filters & Separator Elements',
      'Roto-Inject & Roto-Xtend Premium Synthetic Lubricants',
    ],
  },
  {
    id: 'maintenance-services',
    title: 'Compressor Service & Field Maintenance',
    subtitle: 'Benefit from factory-trained engineers supporting your installation throughout its lifecycle.',
    services: [
      'Preventive Maintenance Contracts & Minor/Major Overhauls',
      'Vibration Analysis, Thermographic & Element Inspections',
      'Factory-Certified Diagnostic & Repair Interventions',
      'Emergency On-Site Response Across All Ethiopian Hubs',
    ],
  },
  {
    id: 'air-treatment-optimization',
    title: 'Air Treatment, Piping & Energy Audits',
    subtitle: 'End-to-end air distribution and digital monitoring solutions designed for optimal energy efficiency.',
    services: [
      'Refrigerated (FD/FX) & High-Efficiency Desiccant Dryers',
      'Corrosion-Free AIRnet Leak-Free Aluminium Piping',
      'SMARTLINK 24/7 Cloud Telemetry & Predictive Alerts',
      'AIRScan Energy Audits with Up to 30% Power Reductions',
    ],
  },
]

const highlightStats = [
  { value: '100%', label: 'Genuine OEM Parts', detail: 'Factory certified' },
  { value: '24/7', label: 'SMARTLINK Support', detail: 'Real-time telemetry' },
  { value: 'Up to 30%', label: 'Energy Savings', detail: 'With AIRScan audits' },
  { value: 'Ethiopia', label: 'Nationwide Dispatch', detail: 'From Addis Ababa' },
]

export default function AtlasCopco() {
  const pageRef = useRevealAll()

  return (
    <div ref={pageRef} className="bg-white">
      {/* ── Official Sub-bar & Breadcrumb ── */}
      <div className="bg-[#fcfbf9] border-b border-gray-200 py-3 px-4 sm:px-8">
        <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#007c92] transition-colors flex items-center gap-1 font-medium text-gray-700">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-600 font-medium">Atlas Copco Ethiopia</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#007c92] font-bold">Compressors, Parts & Service</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs font-semibold text-gray-500">
            <span className="inline-flex items-center gap-1.5 text-[#007c92] bg-[#007c92]/10 px-2.5 py-1 rounded-full">
              <Award size={13} /> Authorised Distributor
            </span>
            <span className="text-gray-400">|</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* ── Top Hero: Atlas Copco Compressor Section with Real Machinery & Exact Logo ── */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden border-b border-gray-200"
        style={{
          backgroundImage: 'url(/hero_compressor.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        {/* Transparent gradient: leaves compressor machinery clearly visible while providing readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <div className="max-w-3xl reveal-left">
            {/* Atlas Copco Official Logo Card with Exact Dimension & Brand Colors */}
            <div className="inline-flex items-center gap-4 bg-white px-7 py-4 rounded-2xl shadow-2xl mb-8 border border-white/80">
              <img
                src="/atlas_copco_logo.svg"
                alt="Atlas Copco"
                className="h-14 sm:h-16 w-auto object-contain"
                style={{ aspectRatio: '167 / 80' }}
              />
              <div className="h-10 w-px bg-gray-200" />
              <div className="text-left">
                <span className="block text-xs font-black uppercase tracking-wider text-[#007c92]">
                  Authorised Distributor
                </span>
                <span className="block text-sm font-bold text-[#111827]">
                  Aurora Green Industries PLC
                </span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-white mb-6 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Genuine Atlas Copco
              <span className="block text-[#0097B2]">Compressors & Parts</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Factory-certified equipment, genuine OEM spare parts, and dedicated field engineering for industrial plants across Ethiopia.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-white mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0097B2] shrink-0" />
                <span>100% Genuine OEM Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0097B2] shrink-0" />
                <span>Factory-Trained Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#0097B2] shrink-0" />
                <span>Nationwide Dispatch</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                id="atlas-compressor-cta-quote"
                className="btn-gold text-white font-bold px-9 py-4 rounded-full text-base sm:text-lg flex items-center gap-2.5 shadow-xl transition-all"
              >
                Request Parts or Service
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+251944999966"
                id="atlas-compressor-cta-phone"
                className="btn-outline-white text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg flex items-center gap-2.5 transition-all"
              >
                <Phone size={18} />
                +251 944 999 966
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip ── */}
      <section className="bg-[#f6f8fa] border-b border-gray-200 py-8">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlightStats.map(({ value, label, detail }) => (
              <div key={label} className="p-3">
                <p className="text-2xl sm:text-4xl font-display font-900 text-[#007c92]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {value}
                </p>
                <p className="text-base sm:text-lg font-bold text-[#111827] mt-1">{label}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product & Service Portfolio (Atlas Copco Cyan Cards with Bold Lists on Gray Background) ── */}
      <section className="py-20 lg:py-28 bg-[#edf0f2] border-t border-b border-gray-300">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="reveal text-center mb-14 max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-900 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Explore Our Portfolio
            </h2>
            <div className="w-20 h-1 bg-[#008ba4] mx-auto mb-3 rounded-full" />
            <p className="text-gray-600 text-base font-semibold">
              Atlas Copco compressed air equipment, genuine parts, and expert service spans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
            {serviceCards.map(({ id, title, subtitle, services }) => (
              <div
                key={id}
                id={`service-card-${id}`}
                className="reveal relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl bg-[#008ba4] text-white flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Atlas Copco signature angled polygon on the right */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
                    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-2xl sm:text-3xl font-display font-900 text-white mb-3"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
                  >
                    {title}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-6 font-medium max-w-xl opacity-95">
                    {subtitle}
                  </p>

                  {/* Service provided list in BOLD */}
                  <div className="mb-8 pt-3 border-t border-white/20">
                    <p className="text-xs uppercase tracking-wider font-black text-white/90 mb-3.5">
                      Services &amp; Equipment Provided:
                    </p>
                    <ul className="space-y-3">
                      {services.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-white mt-0.5 shrink-0" strokeWidth={2.5} />
                          <span className="text-base sm:text-lg font-black text-white leading-snug tracking-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-2">
                  <Link
                    to="/contact"
                    className="bg-white text-[#00748d] hover:bg-gray-100 font-black px-7 py-3.5 rounded-full text-sm sm:text-base inline-flex items-center gap-2.5 shadow-md transition-all transform group-hover:translate-x-1"
                  >
                    Contact our expert
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Official Atlas Copco Ethiopia Website Banner ── */}
      <section className="py-14 bg-[#f6f8fa] border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-center">
          <p className="text-gray-500 text-sm mb-2 font-medium">Global Brand Credentials</p>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">
            Official Atlas Copco Ethiopia Global Portal
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm mb-6">
            Aurora Green Industries PLC represents Atlas Copco products and technical services in Ethiopia. You can also view the global manufacturer catalog.
          </p>
          <a
            href="https://www.atlascopco.com/en-et"
            target="_blank"
            rel="noopener noreferrer"
            id="atlas-official-link"
            className="inline-flex items-center gap-2.5 text-[#007c92] hover:text-[#005f73] font-extrabold text-base border border-[#007c92]/30 hover:border-[#007c92] px-6 py-3 rounded-full transition-all bg-white shadow-sm"
          >
            Visit atlascopco.com/en-et
            <ExternalLink size={17} />
          </a>
        </div>
      </section>
    </div>
  )
}
