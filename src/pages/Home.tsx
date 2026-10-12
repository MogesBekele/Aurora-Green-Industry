import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Settings,
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
  'Genuine Atlas Copco parts & service kits',
  'Filters, separators & lubricants',
  'Preventive & predictive maintenance',
  'Digital & smart services (SMARTLINK)',
  'Energy & optimization services',
  'Air treatment accessories',
]

const industries = [
  { icon: Stethoscope, label: 'Healthcare', color: '#0097B2' },
  { icon: Factory, label: 'Manufacturing', color: '#111827' },
  { icon: Hammer, label: 'Welding & Fabrication', color: '#0097B2' },
  { icon: HardHat, label: 'Construction', color: '#0097B2' },
  { icon: Building2, label: 'Mining', color: '#111827' },
  { icon: Settings, label: 'Industrial Facilities', color: '#0097B2' },
  { icon: FlaskConical, label: 'Laboratories', color: '#0097B2' },
  { icon: Droplets, label: 'Water & Drilling', color: '#111827' },
]

export default function Home() {
  const heroRef = useReveal()
  const atlasRef = useReveal()

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
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0097B2] opacity-60" />

        <div
          ref={heroRef}
          className="reveal relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0097B2]/20 border border-[#0097B2]/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#0097B2] animate-pulse" />
            <span className="text-[#e6edf3] text-sm font-medium">
              Authorised Atlas Copco Distributor
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-900 text-white leading-tight mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
          >
            AURORA GREEN
            <span className="block text-[#0097B2]">INDUSTRIES PLC</span>
          </h1>

          <p className="text-2xl sm:text-3xl text-white font-bold mb-4">
            Compressed Air & Industrial Solutions
          </p>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-medium">
            Authorised distributor of Atlas Copco compressors, genuine parts, maintenance, and industrial & medical gases in Ethiopia.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {['Reliable Equipment', 'Genuine Parts', 'Technical Expertise'].map((v) => (
              <div key={v} className="flex items-center gap-2.5 text-white">
                <CheckCircle2 size={20} className="text-[#0097B2]" />
                <span className="text-base sm:text-lg font-semibold">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20 sm:mt-0 sm:mb-0">
            <Link
              to="/atlas-copco"
              id="hero-cta-atlas"
              className="btn-gold text-white font-semibold px-10 py-5 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              Explore Atlas Copco Solutions
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              id="hero-cta-contact"
              className="btn-outline-white text-white font-semibold px-10 py-5 rounded-full text-sm flex items-center gap-2 justify-center"
            >
              Contact Us
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-xs">Scroll</span>
          <div className="w-px h-8 bg-gray-400" />
        </div>
      </section>

      {/* ── Atlas Copco Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={atlasRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f6f8fa] border border-[#0097B2]/20 rounded-full px-4 py-1.5 mb-5">
                <Zap size={14} className="text-[#0097B2]" />
                <span className="text-[#111827] text-sm font-semibold">Atlas Copco CSO Solutions</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-display font-900 text-[#111827] mb-5 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              >
                Atlas Copco Compressed
                <span className="text-[#0097B2]"> Air Solutions</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                Authorised distributor of genuine Atlas Copco parts, preventive maintenance kits, and smart diagnostics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {atlasFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-[#0097B2] shrink-0" />
                    <span className="text-base font-semibold text-slate-800">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/atlas-copco"
                id="home-atlas-cta"
                className="btn-green inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm"
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
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <p className="text-white text-base font-bold mb-1">Authorised Distributor</p>
                    <p className="text-gray-200 text-xs">Atlas Copco branded products — Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#f6f8fa] flex items-center justify-center">
                    <Shield size={20} className="text-[#111827]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Genuine Parts</p>
                    <p className="text-base font-bold text-[#111827]">Atlas Copco</p>
                  </div>
                </div>
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
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-[#0097B2]/20 rounded-full px-4 py-1.5 mb-5">
                <Activity size={14} className="text-[#0097B2]" />
                <span className="text-[#0097B2] text-sm font-semibold">Gas Supply</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-display font-900 text-[#111827] mb-5 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              >
                Industrial & Medical
                <span className="text-[#0097B2]"> Gas Supply</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                High-purity oxygen, nitrogen, argon, CO₂, and acetylene with full cylinder supply and accessories.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {['Medical Oxygen', 'Industrial Oxygen', 'Nitrogen', 'Argon', 'Carbon Dioxide', 'Acetylene'].map((g) => (
                  <div
                    key={g}
                    className="bg-[#f6f8fa] rounded-xl px-3 py-3 text-center border border-gray-200"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111827]">{g}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/gases"
                id="home-gas-explore"
                className="btn-gold inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm"
              >
                Explore Gas Solutions
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section className="py-24 bg-[#f6f8fa] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-5xl font-display font-900 text-[#111827] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industries We Serve
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg font-medium">
              Tailored compressed-air and gas engineering solutions across Ethiopia's key sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/industries"
                className="industry-card rounded-xl p-5 text-center group bg-white shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f8fa] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0097B2] transition-colors">
                  <Icon size={22} className="text-[#111827] group-hover:text-white transition-colors" />
                </div>
                <p className="text-base font-bold text-gray-800 group-hover:text-[#0097B2] transition-colors">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2
            className="text-3xl sm:text-5xl font-display font-900 text-[#111827] mb-4 leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
          >
            Need Equipment, Parts, or Gas Supply?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg font-medium">
            Contact our specialists for quotes, parts verification, or service dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              id="closing-cta-contact"
              className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center shadow-sm"
            >
              Contact Aurora Green Industries
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+251944999966"
              className="border-2 border-gray-300 text-gray-800 hover:border-[#111827] hover:text-[#111827] transition-all font-semibold px-8 py-4 rounded-full text-sm flex items-center gap-2 justify-center"
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

