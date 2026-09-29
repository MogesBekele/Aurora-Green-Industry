import { Link } from 'react-router-dom'
import { CheckCircle2, ExternalLink, Package, Wrench, Cpu, Zap, Filter, Droplets } from 'lucide-react'

const services = [
  {
    id: 'genuine-parts',
    icon: Package,
    title: 'Genuine Atlas Copco Parts',
    description:
      'We supply genuine Atlas Copco parts for compressor maintenance and reliable operation. Includes compressor elements, valves, motors and other genuine compressor components.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'service-kits',
    icon: Wrench,
    title: 'Service Kits',
    description:
      'Pre-packaged maintenance kits for scheduled compressor service interventions — designed to make planned maintenance efficient and complete.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'filters-separators',
    icon: Filter,
    title: 'Filters & Separators',
    description:
      'Air, oil and line filtration solutions, including applicable filters and separators that support clean, reliable compressed-air systems.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'lubricants',
    icon: Droplets,
    title: 'Lubricants & Consumables',
    description:
      'Atlas Copco lubricants and consumables applicable to compressor maintenance and operation, sourced as genuine products.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'maintenance-plans',
    icon: CheckCircle2,
    title: 'Preventive & Predictive Maintenance',
    description:
      'Maintenance and service support designed around scheduled interventions and equipment requirements, helping customers plan and budget for uptime.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'digital-services',
    icon: Cpu,
    title: 'Digital & Smart Services — Industry 4.0',
    description:
      'Digital and smart services including Optimizer and SMARTLINK solutions for connected compressor monitoring and data-driven maintenance.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'energy-optimization',
    icon: Zap,
    title: 'Energy & Optimization Services',
    description:
      'Energy recovery, AIRScan, AIRnet, controllers and upgrades within the CSO portfolio, supporting compressed-air efficiency.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
  {
    id: 'air-treatment',
    icon: Filter,
    title: 'Air Treatment Accessories',
    description:
      'Air-treatment accessories supporting compressed-air system requirements including dryers, aftercoolers, and related components.',
    accent: '#0097B2',
    bg: '#f3f4f6',
  },
]

export default function AtlasCopco() {
  return (
    <div>
      {/* Page hero */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        {/* Subtle background overlay to match the metallic/dark blue feel */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Atlas Copco Compressor
              <span className="text-gray-300"> Service & Optimization</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium">
              Aurora Green Industries PLC is an Authorised Distributor in Addis Ababa for Atlas Copco branded products.
              We provide Compressor Service and Optimization (CSO) solutions covering genuine parts, maintenance,
              digital services and compressed-air optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                id="atlas-cta-parts"
                className="bg-[#0097B2] text-white hover:bg-[#007b91] transition-colors font-bold px-7 py-3.5 rounded text-sm flex items-center gap-2 shadow-lg"
              >
                Request Genuine Parts
              </Link>
              <Link
                to="/contact"
                id="atlas-cta-service"
                className="bg-[#0097B2] text-white hover:bg-[#007b91] transition-colors font-bold px-7 py-3.5 rounded text-sm flex items-center gap-2 shadow-lg"
              >
                Request Compressor Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-slate-900 mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              CSO Product & Service Portfolio
            </h2>
            <div className="w-24 h-1 bg-[#0097B2] mx-auto mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our Atlas Copco Compressor Service and Optimization offering covers the following products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map(({ id, icon: Icon, title, description, accent, bg }) => (
              <div
                key={id}
                id={`atlas-${id}`}
                className="card-hover rounded-2xl p-7 border border-gray-100 bg-white shadow-sm flex gap-5"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={24} style={{ color: accent }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-display font-700 text-[#0a1f0e] mb-2"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts request info */}
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2
              className="text-2xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Parts & Service Request
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To help us identify your requirement accurately, please provide the following information when contacting us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Compressor brand',
                'Compressor model',
                'Serial number',
                'Part number (if known)',
                'Service required',
                'Current equipment condition',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#0097B2] shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                id="atlas-parts-request"
                className="bg-[#0097B2] text-white hover:bg-[#007b91] transition-colors font-bold px-7 py-3 rounded text-sm flex items-center gap-2"
              >
                Request Genuine Parts
              </Link>
              <Link
                to="/contact"
                id="atlas-service-request"
                className="bg-[#0097B2] text-white hover:bg-[#007b91] transition-colors font-bold px-7 py-3 rounded text-sm flex items-center gap-2"
              >
                Request Compressor Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas Copco link */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm mb-3">Official Atlas Copco Ethiopia website</p>
          <a
            href="https://www.atlascopco.com/en-et"
            target="_blank"
            rel="noopener noreferrer"
            id="atlas-official-link"
            className="inline-flex items-center gap-2 text-[#0097B2] font-semibold hover:text-[#007b91] transition-colors"
          >
            atlascopco.com/en-et
            <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </div>
  )
}
