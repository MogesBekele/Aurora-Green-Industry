import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ExternalLink,
  Package,
  Wrench,
  Cpu,
  Zap,
  Filter,
  Droplets,
  Home,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Award,
  Phone,
  Clock,
  Sparkles,
} from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const categories = [
  {
    id: 'genuine-parts',
    icon: Package,
    badge: 'OEM Components',
    title: 'Genuine Atlas Copco Parts',
    description:
      'Factory-certified compressor elements, intake valves, minimum pressure valves, motors, coolers, and OEM replacement components for maximum uptime and equipment longevity.',
    features: ['100% genuine factory warranty', 'Exact fit & optimal airflow', 'Prevent premature wear', 'Extended compressor lifespan'],
  },
  {
    id: 'service-kits',
    icon: Wrench,
    badge: 'Scheduled Maintenance',
    title: 'Service Kits & Preventative Packs',
    description:
      'Engineered preventive maintenance packs tailored for 4,000h, 8,000h, and major overhaul service intervals, containing all needed gaskets, seals, and wear items.',
    features: ['Pre-packaged convenience', 'All-in-one replacement parts', 'Guaranteed compatibility', 'Reduced planned downtime'],
  },
  {
    id: 'filters-separators',
    icon: Filter,
    badge: 'Air Purity',
    title: 'Filters & Air/Oil Separators',
    description:
      'High-efficiency air intake filters, line filters, and air-oil separator elements engineered to minimize pressure drop and guarantee ISO 8573-1 air purity standards.',
    features: ['Ultra-low oil carryover (< 3 ppm)', 'High dust-holding capacity', 'Lower energy consumption', 'Downstream equipment safety'],
  },
  {
    id: 'lubricants',
    icon: Droplets,
    badge: 'Synthetic & Mineral',
    title: 'Atlas Copco Lubricants (Roto-Inject & Roto-Xtend)',
    description:
      'Premium synthetic fluids specifically formulated for severe operating temperatures in Ethiopia, preventing thermal breakdown, varnish, and oxidation.',
    features: ['Up to 8,000 operating hours', 'Superior thermal stability', 'Anti-foaming chemistry', 'Protection against corrosion'],
  },
  {
    id: 'maintenance-plans',
    icon: Clock,
    badge: 'Service Contracts',
    title: 'Preventive & Predictive Maintenance',
    description:
      'Comprehensive planned service agreements, vibration analysis, thermographic scans, and rapid emergency troubleshooting dispatched across industrial hubs in Ethiopia.',
    features: ['Factory-trained technicians', 'Regular health assessments', 'Emergency on-site response', 'Tailored service contracts'],
  },
  {
    id: 'digital-services',
    icon: Cpu,
    badge: 'Industry 4.0',
    title: 'SMARTLINK & Digital Monitoring',
    description:
      'Cloud-enabled 24/7 compressor monitoring. Real-time telemetry, early fault prediction, operating status alerts, and remote optimization through SMARTLINK hardware.',
    features: ['24/7 remote condition tracking', 'Predictive failure alerts', 'Energy efficiency telemetry', 'Custom performance reports'],
  },
  {
    id: 'energy-optimization',
    icon: Zap,
    badge: 'Sustainability & ROI',
    title: 'AIRScan Energy Audits & Optimization',
    description:
      'Professional compressed air auditing that identifies leakages, artificial demand, and pressure losses to reduce electricity expenses by up to 30%.',
    features: ['Full system pressure profiling', 'Air leak quantification', 'VSD energy retrofit studies', 'Rapid payback period'],
  },
  {
    id: 'air-treatment',
    icon: Gauge,
    badge: 'Air Treatment',
    title: 'Dryers, Piping & Air Treatment',
    description:
      'Atlas Copco refrigerated and desiccant dryers (FD & FX series), zero-loss condensate drains, and lightweight leak-free AIRnet aluminium piping distribution systems.',
    features: ['Stable pressure dew points', 'Zero corrosion AIRnet piping', 'Energy-saving condensate drains', 'Complete air distribution solutions'],
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
            <span className="text-[#007c92] font-bold">Our complete offering</span>
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

      {/* ── Official Atlas Copco Signature Hero Banner ── */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-r from-[#008ba4] via-[#007c92] to-[#005f73] text-white">
        {/* Curved geometric swooshes matching official Atlas Copco brand style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Ambient lighting glows */}
          <div className="absolute -top-32 right-10 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#004e5f]/40 blur-2xl" />

          {/* Precision SVG swooshes reproducing Atlas Copco's wave graphics */}
          <svg
            className="absolute right-0 top-0 h-full w-2/3 lg:w-1/2 object-cover opacity-25"
            viewBox="0 0 800 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M100 0 C300 200, 500 400, 800 600 L800 0 Z"
              fill="url(#atlas-swoosh-1)"
            />
            <path
              d="M300 0 C450 180, 600 350, 800 450 L800 0 Z"
              fill="white"
              opacity="0.15"
            />
            <circle cx="700" cy="200" r="300" fill="url(#atlas-radial)" />
            <defs>
              <linearGradient id="atlas-swoosh-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
              </linearGradient>
              <radialGradient id="atlas-radial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <div className="max-w-4xl reveal-left">
            {/* Distributor Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-white">
              <Sparkles size={15} className="text-white" />
              <span>Official Atlas Copco Distributor • Aurora Green Industries</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-900 text-white mb-6 leading-[1.08] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Our complete offering
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed font-normal mb-10 max-w-3xl">
              Industries all over Ethiopia rely on our world-leading expertise. We offer innovative compressors,
              genuine OEM parts, air treatment systems, SMARTLINK digital monitoring, and certified maintenance
              solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                id="atlas-hero-quote-btn"
                className="bg-white text-[#007c92] hover:bg-gray-100 font-extrabold px-9 py-4 rounded-full text-base flex items-center gap-2.5 shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/maintenance"
                id="atlas-hero-maint-btn"
                className="border-2 border-white text-white hover:bg-white/15 font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 backdrop-blur-sm transition-all"
              >
                Service & Maintenance
                <ChevronRight size={18} />
              </Link>
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

      {/* ── Product & Service Catalog Grid (Official Card Style) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="reveal text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#007c92] font-extrabold uppercase tracking-widest text-xs sm:text-sm">
              Certified Solutions
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-[#111827] mt-2 mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Explore Our Portfolio
            </h2>
            <div className="w-24 h-1.5 bg-[#007c92] mx-auto mb-5 rounded-full" />
            <p className="text-gray-600 text-lg sm:text-xl font-medium">
              Explore genuine products, preventive kits, and technical services backed by Atlas Copco engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {categories.map(({ id, icon: Icon, badge, title, description, features }) => (
              <div
                key={id}
                id={`offering-${id}`}
                className="reveal flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#007c92]/50 shadow-sm hover:shadow-xl transition-all duration-300 p-8 group relative overflow-hidden"
              >
                {/* Top cyan accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 group-hover:bg-[#007c92] transition-colors" />

                {/* Badge and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#007c92] bg-[#007c92]/10 px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#f6f8fa] group-hover:bg-[#007c92] text-[#007c92] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </div>
                </div>

                <h3
                  className="text-2xl font-display font-900 text-[#111827] mb-3 group-hover:text-[#007c92] transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
                >
                  {title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  {description}
                </p>

                <div className="pt-4 border-t border-gray-100 mb-6">
                  <ul className="space-y-2">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                        <CheckCircle2 size={16} className="text-[#007c92] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between w-full font-bold text-sm text-[#007c92] group-hover:text-[#006073] pt-2"
                >
                  <span>Request Inquiry</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Official Parts & Service Verification Form ── */}
      <section className="py-20 lg:py-24 bg-[#f6f8fa] border-t border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          <div className="reveal bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007c92] bg-[#007c92]/10 px-3 py-1.5 rounded-full mb-4">
                  <ShieldCheck size={16} /> Genuine OEM Verification
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-display font-900 text-[#111827] mb-5 leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
                >
                  Request Atlas Copco Parts & Certified Service
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ensure 100% equipment reliability. Our certified technical team checks part numbers, cross-references
                  compressor serials, and dispatches genuine service kits across Ethiopia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Compressor model number (GA, GX, ZT, etc.)',
                    'Serial number plate check',
                    'OEM Part number verification',
                    'Air demand & flow audit request',
                    'Preventive service plan schedule',
                    'Emergency dispatch request',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#007c92] shrink-0" />
                      <span className="text-sm sm:text-base font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    id="atlas-submit-parts-request"
                    className="btn-gold text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 shadow-md"
                  >
                    Submit Parts Request <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+251944999966"
                    className="border-2 border-gray-300 text-gray-800 hover:border-[#111827] font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 transition-colors"
                  >
                    <Phone size={18} />
                    +251 944 999 966
                  </a>
                </div>
              </div>

              {/* Right Guarantee Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-[#1e293b] text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#007c92]/20 rounded-full blur-2xl" />
                <h3 className="text-2xl font-display font-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Why Genuine Atlas Copco Parts?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Non-genuine parts cause elevated operating temperatures, oil carryover, and premature element breakdown.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-bold text-[#0097B2]">Guaranteed Factory Tolerances</p>
                    <p className="text-gray-400 text-xs mt-1">Engineered to exact micron tolerances for peak energy efficiency.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-bold text-[#0097B2]">Warranty Protection</p>
                    <p className="text-gray-400 text-xs mt-1">Maintains manufacturer warranty and preserves machine value.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-bold text-[#0097B2]">Energy & Power Savings</p>
                    <p className="text-gray-400 text-xs mt-1">Minimal pressure drops mean lower kilowatt power consumption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Official Atlas Copco Ethiopia Website Banner ── */}
      <section className="py-14 bg-white border-t border-gray-100">
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
            className="inline-flex items-center gap-2.5 text-[#007c92] hover:text-[#005f73] font-extrabold text-base border border-[#007c92]/30 hover:border-[#007c92] px-6 py-3 rounded-full transition-all"
          >
            Visit atlascopco.com/en-et
            <ExternalLink size={17} />
          </a>
        </div>
      </section>
    </div>
  )
}
