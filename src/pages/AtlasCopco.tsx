import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ExternalLink, Package, Wrench, Cpu, Zap, Filter, Droplets, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'genuine-parts',
    icon: Package,
    title: 'Genuine Atlas Copco Parts',
    description:
      'We supply genuine Atlas Copco parts for compressor maintenance and reliable operation. Includes compressor elements, valves, motors and other genuine compressor components.',
    accent: '#1a472a',
    bg: '#f0fdf5',
  },
  {
    id: 'service-kits',
    icon: Wrench,
    title: 'Service Kits',
    description:
      'Pre-packaged maintenance kits for scheduled compressor service interventions — designed to make planned maintenance efficient and complete.',
    accent: '#2d7a4f',
    bg: '#f0fdf5',
  },
  {
    id: 'filters-separators',
    icon: Filter,
    title: 'Filters & Separators',
    description:
      'Air, oil and line filtration solutions, including applicable filters and separators that support clean, reliable compressed-air systems.',
    accent: '#1a472a',
    bg: '#f0fdf5',
  },
  {
    id: 'lubricants',
    icon: Droplets,
    title: 'Lubricants & Consumables',
    description:
      'Atlas Copco lubricants and consumables applicable to compressor maintenance and operation, sourced as genuine products.',
    accent: '#c8922a',
    bg: '#fdf3dc',
  },
  {
    id: 'maintenance-plans',
    icon: CheckCircle2,
    title: 'Preventive & Predictive Maintenance',
    description:
      'Maintenance and service support designed around scheduled interventions and equipment requirements, helping customers plan and budget for uptime.',
    accent: '#1a472a',
    bg: '#f0fdf5',
  },
  {
    id: 'digital-services',
    icon: Cpu,
    title: 'Digital & Smart Services — Industry 4.0',
    description:
      'Digital and smart services including Optimizer and SMARTLINK solutions for connected compressor monitoring and data-driven maintenance.',
    accent: '#30363d',
    bg: '#f6f8fa',
  },
  {
    id: 'energy-optimization',
    icon: Zap,
    title: 'Energy & Optimization Services',
    description:
      'Energy recovery, AIRScan, AIRnet, controllers and upgrades within the CSO portfolio, supporting compressed-air efficiency.',
    accent: '#c8922a',
    bg: '#fdf3dc',
  },
  {
    id: 'air-treatment',
    icon: Filter,
    title: 'Air Treatment Accessories',
    description:
      'Air-treatment accessories supporting compressed-air system requirements including dryers, aftercoolers, and related components.',
    accent: '#2d7a4f',
    bg: '#f0fdf5',
  },
]

export default function AtlasCopco() {
  return (
    <div>
      {/* Page hero */}
      <section className="section-gradient-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-green-200 text-sm font-medium">Authorised Distributor — Addis Ababa</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Atlas Copco Compressor
              <span className="text-[#c8922a]"> Service & Optimization</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8">
              Aurora Green Industries PLC is an Authorised Distributor in Addis Ababa for Atlas Copco branded products.
              We provide Compressor Service and Optimization (CSO) solutions covering genuine parts, maintenance,
              digital services and compressed-air optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                id="atlas-cta-parts"
                className="btn-gold text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2"
              >
                Request Genuine Parts <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                id="atlas-cta-service"
                className="btn-outline-white text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2"
              >
                Request Compressor Service <ChevronRight size={15} />
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
              className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              CSO Product & Service Portfolio
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
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
                  <CheckCircle2 size={15} className="text-[#2d7a4f] shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                id="atlas-parts-request"
                className="btn-green text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2"
              >
                Request Genuine Parts <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                id="atlas-service-request"
                className="btn-gold text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2"
              >
                Request Compressor Service <ArrowRight size={15} />
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
            className="inline-flex items-center gap-2 text-[#1a472a] font-semibold hover:text-[#c8922a] transition-colors"
          >
            atlascopco.com/en-et
            <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </div>
  )
}
