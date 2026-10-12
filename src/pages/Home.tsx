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
import { useRevealAll } from '../hooks/useReveal'

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
  const pageRef = useRevealAll()

  return (
    <div ref={pageRef}>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[94vh] flex items-center justify-center overflow-hidden py-20 lg:py-28"
        style={{
          backgroundImage: 'url(/hero_compressor.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Transparent gradient matching Atlas Copco page: leaves compressor machinery clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#0097B2] opacity-70" />

        <div className="reveal relative z-10 text-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2.5 bg-[#0097B2]/20 border border-[#0097B2]/40 rounded-full px-5 py-2 mb-8 backdrop-blur-sm shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0097B2] animate-pulse" />
            <span className="text-white text-sm sm:text-base font-bold drop-shadow-md">
              Authorised Atlas Copco Distributor
            </span>
          </div>

          <h1
            className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-display font-900 text-white leading-[1.08] mb-6 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
          >
            AURORA GREEN
            <span className="block text-[#0097B2]">INDUSTRIES PLC</span>
          </h1>

          <p className="reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-5 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Compressed Air &amp; Industrial Solutions
          </p>
          <p className="reveal text-lg sm:text-xl md:text-2xl text-white max-w-4xl lg:max-w-5xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Authorised distributor of Atlas Copco compressors, genuine parts, maintenance, and industrial &amp; medical gases in Ethiopia.
          </p>

          <div className="reveal flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-14 mb-12">
            {['Reliable Equipment', 'Genuine Parts', 'Technical Expertise'].map((v) => (
              <div key={v} className="flex items-center gap-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                <CheckCircle2 size={24} className="text-[#0097B2] shrink-0" />
                <span className="text-lg sm:text-xl font-bold">{v}</span>
              </div>
            ))}
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-5 justify-center mt-6 mb-16 sm:mb-0">
            <Link
              to="/atlas-copco"
              id="hero-cta-atlas"
              className="btn-gold text-white font-bold px-10 sm:px-12 py-5 rounded-full text-base sm:text-lg flex items-center gap-3 justify-center shadow-lg"
            >
              Explore Atlas Copco Solutions
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              id="hero-cta-contact"
              className="btn-outline-white text-white font-bold px-10 sm:px-12 py-5 rounded-full text-base sm:text-lg flex items-center gap-3 justify-center shadow-lg"
            >
              Contact Us
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Atlas Copco Section ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 bg-[#f6f8fa] border border-[#0097B2]/20 rounded-full px-4 py-1.5 mb-5">
                <Zap size={16} className="text-[#0097B2]" />
                <span className="text-[#111827] text-sm sm:text-base font-bold">Atlas Copco CSO Solutions</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-[#111827] mb-6 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              >
                Atlas Copco Compressed
                <span className="text-[#0097B2]"> Air Solutions</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                Authorised distributor of genuine Atlas Copco parts, preventive maintenance kits, and smart diagnostics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 stagger-children">
                {atlasFeatures.map((f) => (
                  <div key={f} className="reveal flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#0097B2] shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-slate-800">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/atlas-copco"
                id="home-atlas-cta"
                className="btn-green inline-flex items-center gap-2.5 text-white font-bold px-8 sm:px-10 py-4 rounded-full text-base shadow-md"
              >
                Explore Atlas Copco Solutions
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="reveal-right relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl reveal-scale">
                <img
                  src="/hero_compressor.jpg"
                  alt="Industrial compressors"
                  className="w-full h-96 lg:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <p className="text-white text-lg font-bold mb-1">Authorised Distributor</p>
                    <p className="text-gray-200 text-sm">Atlas Copco branded products — Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f6f8fa] flex items-center justify-center">
                    <Shield size={24} className="text-[#111827]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Genuine Parts</p>
                    <p className="text-lg font-black text-[#111827]">Atlas Copco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gas Visual Section ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/gas_cylinders.jpg"
                  alt="Industrial gas cylinders"
                  className="w-full h-96 lg:h-[460px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-right">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-[#0097B2]/20 rounded-full px-4 py-1.5 mb-5">
                <Activity size={16} className="text-[#0097B2]" />
                <span className="text-[#0097B2] text-sm sm:text-base font-bold">Gas Supply</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-[#111827] mb-6 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
              >
                Industrial & Medical
                <span className="text-[#0097B2]"> Gas Supply</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                High-purity oxygen, nitrogen, argon, CO₂, and acetylene with full cylinder supply and accessories.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-10 stagger-children">
                {['Medical Oxygen', 'Industrial Oxygen', 'Nitrogen', 'Argon', 'Carbon Dioxide', 'Acetylene'].map((g) => (
                  <div
                    key={g}
                    className="reveal bg-[#f6f8fa] rounded-xl px-4 py-3.5 text-center border border-gray-200 shadow-sm"
                  >
                    <span className="text-base sm:text-lg font-extrabold text-[#111827]">{g}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/gases"
                id="home-gas-explore"
                className="btn-gold inline-flex items-center gap-2.5 text-white font-bold px-8 sm:px-10 py-4 rounded-full text-base shadow-md"
              >
                Explore Gas Solutions
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section className="py-24 lg:py-32 bg-[#f6f8fa] border-t border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="reveal text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-[#111827] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industries We Serve
            </h2>
            <div className="divider-gold w-28 mx-auto mb-5" />
            <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
              Tailored solutions across Ethiopia's key industrial and healthcare sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children">
            {industries.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/industries"
                className="reveal industry-card rounded-2xl p-6 lg:p-8 text-center group bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f6f8fa] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0097B2] transition-colors">
                  <Icon size={26} className="text-[#111827] group-hover:text-white transition-colors" />
                </div>
                <p className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-[#0097B2] transition-colors">
                  {label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="reveal max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-900 text-[#111827] mb-6 leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
          >
            Need Equipment, Parts, or Gas Supply?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-xl font-medium">
            Contact our specialists for quotes, parts verification, or service dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              id="closing-cta-contact"
              className="btn-gold text-white font-bold px-10 py-5 rounded-full text-base sm:text-lg flex items-center gap-3 justify-center shadow-md"
            >
              Contact Aurora Green Industries
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+251944999966"
              className="border-2 border-gray-300 text-gray-800 hover:border-[#111827] hover:text-[#111827] transition-all font-bold px-10 py-5 rounded-full text-base sm:text-lg flex items-center gap-3 justify-center"
            >
              <Phone size={18} />
              +251 944 999 966
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
