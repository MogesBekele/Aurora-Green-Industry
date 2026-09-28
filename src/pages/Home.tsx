import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Settings,
  Flame,
  Wrench,
  Package,
  Zap,
  Shield,
  Activity,
  Building2,
  FlaskConical,
  Hammer,
  HardHat,
  Stethoscope,
  Factory,
  Droplets,
  Phone,
} from 'lucide-react'
import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const atlasFeatures = [
  'Genuine Atlas Copco parts',
  'Service kits',
  'Filters & separators',
  'Lubricants & consumables',
  'Preventive & predictive maintenance',
  'Digital & smart services',
  'Energy & optimization services',
  'Air treatment accessories',
]

const industries = [
  { icon: Stethoscope, label: 'Healthcare', color: '#2d7a4f' },
  { icon: Factory, label: 'Manufacturing', color: '#1a472a' },
  { icon: Hammer, label: 'Welding & Fabrication', color: '#c8922a' },
  { icon: HardHat, label: 'Construction', color: '#2d7a4f' },
  { icon: Building2, label: 'Mining', color: '#1a472a' },
  { icon: Settings, label: 'Industrial Facilities', color: '#c8922a' },
  { icon: FlaskConical, label: 'Laboratories', color: '#2d7a4f' },
  { icon: Droplets, label: 'Water & Drilling', color: '#1a472a' },
]

export default function Home() {
  const heroRef = useReveal()
  const atlasRef = useReveal()
  const maintenanceRef = useReveal()
  const gasRef = useReveal()

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/hero_compressor.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient" />

        {/* Decorative green glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2d7a4f] to-transparent opacity-60" />

        <div
          ref={heroRef}
          className="reveal relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c8922a]/20 border border-[#c8922a]/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#c8922a] animate-pulse" />
            <span className="text-[#e8c270] text-sm font-medium">
              Authorised Atlas Copco Distributor — Addis Ababa
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-900 text-white leading-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
          >
            AURORA GREEN
            <span className="block text-[#c8922a]">INDUSTRIES PLC</span>
          </h1>

          <p className="text-xl sm:text-2xl text-green-200 font-medium mb-3">
            Compressed Air & Industrial Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            Atlas Copco Compressors, Genuine Parts & Professional Service
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Aurora Green Industries PLC provides industrial customers in Ethiopia with compressed-air equipment,
            Atlas Copco products and genuine spare parts, compressor maintenance and technical services, as well
            as industrial and medical gases and related gas equipment.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {['Reliable Equipment', 'Genuine Parts', 'Technical Expertise'].map((v) => (
              <div key={v} className="flex items-center gap-2 text-white">
                <CheckCircle2 size={16} className="text-[#4dbf82]" />
                <span className="text-sm font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/atlas-copco"
              id="hero-cta-atlas"
              className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              Explore Atlas Copco Solutions
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              id="hero-cta-contact"
              className="btn-outline-white text-white font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              Contact Us
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* ── Atlas Copco Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={atlasRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f0fdf5] border border-[#2d7a4f]/20 rounded-full px-4 py-1.5 mb-5">
                <Zap size={14} className="text-[#2d7a4f]" />
                <span className="text-[#1a472a] text-sm font-semibold">Atlas Copco CSO Solutions</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-5 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Atlas Copco Compressed
                <span className="text-[#2d7a4f]"> Air Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Aurora Green Industries PLC provides Atlas Copco Compressor Service and Optimization
                solutions for customers in Ethiopia. From genuine spare parts and service kits to
                maintenance, digital services and compressed-air optimization, we support customers
                in maintaining reliable compressed-air systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {atlasFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#2d7a4f] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/atlas-copco"
                id="home-atlas-cta"
                className="btn-green inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm"
              >
                Explore Atlas Copco Solutions
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero_compressor.jpg"
                  alt="Industrial compressors"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f0e]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white text-sm font-semibold mb-1">Authorised Distributor</p>
                    <p className="text-green-200 text-xs">Atlas Copco branded products — Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#f0fdf5] flex items-center justify-center">
                    <Shield size={18} className="text-[#1a472a]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Genuine Parts</p>
                    <p className="text-sm font-bold text-[#1a472a]">Atlas Copco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars Section ── */}
      <section className="py-24 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Core Services
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto">
              Industrial solutions spanning compressed air, gases, and technical service — all from a single trusted partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maintenance */}
            <div ref={maintenanceRef} className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-[#1a472a] to-[#2d7a4f]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-[#f0fdf5] flex items-center justify-center mb-5">
                  <Wrench size={26} className="text-[#1a472a]" />
                </div>
                <h3
                  className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Maintenance & Technical Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Aurora Green Industries provides compressor maintenance and technical support, including
                  preventive maintenance, minor and major service, troubleshooting, equipment inspection
                  and applicable industrial maintenance services.
                </p>
                <Link
                  to="/contact"
                  id="home-maintenance-cta"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a472a] hover:text-[#c8922a] transition-colors"
                >
                  Request Service <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Gases */}
            <div ref={gasRef} className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-delay-200">
              <div className="h-2 bg-gradient-to-r from-[#c8922a] to-[#d9a847]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
                  <Flame size={26} className="text-[#c8922a]" />
                </div>
                <h3
                  className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Industrial & Medical Gases
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our gas business supplies oxygen, nitrogen, argon, carbon dioxide and acetylene
                  for healthcare, manufacturing, welding, fabrication and other industrial applications.
                </p>
                <Link
                  to="/gases"
                  id="home-gases-cta"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c8922a] hover:text-[#1a472a] transition-colors"
                >
                  Explore Gas Solutions <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Gas Equipment */}
            <div className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-delay-400">
              <div className="h-2 bg-gradient-to-r from-[#30363d] to-[#484f58]" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-5">
                  <Package size={26} className="text-[#30363d]" />
                </div>
                <h3
                  className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Gas Equipment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We supply gas cylinders and related components including cylinder valves, pressure
                  gauges, regulators, fittings and accessories for compressed-gas applications.
                </p>
                <Link
                  to="/contact"
                  id="home-gasequip-cta"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#1a472a] transition-colors"
                >
                  Contact Us <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gas Visual Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/gas_cylinders.jpg"
                  alt="Industrial gas cylinders"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-[#c8922a]/20 rounded-full px-4 py-1.5 mb-5">
                <Activity size={14} className="text-[#c8922a]" />
                <span className="text-[#c8922a] text-sm font-semibold">Gas Supply</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-5 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Industrial & Medical
                <span className="text-[#c8922a]"> Gas Supply</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We supply oxygen, nitrogen, argon, carbon dioxide and acetylene for healthcare,
                manufacturing, welding, fabrication, laboratories and industrial applications.
                Cylinder supply, gas-handling equipment and delivery solutions available.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {['Medical Oxygen', 'Industrial Oxygen', 'Nitrogen', 'Argon', 'Carbon Dioxide', 'Acetylene'].map((g) => (
                  <div
                    key={g}
                    className="bg-amber-50 rounded-xl px-3 py-2.5 text-center border border-[#c8922a]/15"
                  >
                    <span className="text-sm font-medium text-[#6b4c0e]">{g}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/gases"
                id="home-gas-explore"
                className="btn-gold inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm"
              >
                Explore Gas Solutions
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section className="py-24 section-gradient-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Industries We Serve
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-green-200 max-w-xl mx-auto text-sm">
              Providing compressed-air solutions, Atlas Copco parts, maintenance, gases and gas equipment
              across Ethiopia's industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/industries"
                className="industry-card rounded-xl p-5 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf5] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1a472a] transition-colors">
                  <Icon size={22} className="text-[#1a472a] group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1a472a] transition-colors">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 bg-[#0a1f0e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#2d7a4f] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#c8922a] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2
            className="text-3xl sm:text-4xl font-display font-800 text-white mb-5"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Need a Compressor, Part, Service or Industrial Gas?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need. Our team will help you identify the appropriate product or service
            for your equipment and application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              id="closing-cta-contact"
              className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              Contact Aurora Green Industries
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+251944999966"
              className="btn-outline-white text-white font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              <Phone size={16} />
              +251 944 999 966
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
