import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Heart, Factory, FlaskConical, Hammer } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const gases = [
  {
    id: 'medical-oxygen',
    title: 'Medical Oxygen',
    icon: Heart,
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'High-purity medical-grade oxygen for hospitals, clinics, and emergency facilities.',
    applications: ['Hospitals', 'Healthcare clinics', 'Respiratory therapy', 'Emergency response'],
  },
  {
    id: 'industrial-oxygen',
    title: 'Industrial Oxygen',
    icon: Flame,
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'High-efficiency oxygen for metal cutting, fabrication, and thermal processes.',
    applications: ['Metal cutting', 'Oxy-fuel welding', 'Heavy fabrication', 'Industrial smelting'],
  },
  {
    id: 'nitrogen',
    title: 'Nitrogen',
    icon: FlaskConical,
    color: '#111827',
    bg: '#f6f8fa',
    description: 'Inert dry nitrogen for blanketing, purging, pressure testing, and manufacturing.',
    applications: ['Pipeline purging', 'Pressure testing', 'Laser cutting', 'Food & pharma packaging'],
  },
  {
    id: 'argon',
    title: 'Argon',
    icon: Hammer,
    color: '#484f58',
    bg: '#f6f8fa',
    description: 'Ultra-pure shielding gas for TIG/MIG welding and stainless steel fabrication.',
    applications: ['TIG & MIG welding', 'Stainless fabrication', 'Aluminum welding', 'Specialty metallurgy'],
  },
  {
    id: 'carbon-dioxide',
    title: 'Carbon Dioxide (CO₂)',
    icon: Factory,
    color: '#484f58',
    bg: '#f6f8fa',
    description: 'Industrial and beverage-grade CO₂ for welding shielding and refrigeration.',
    applications: ['MIG welding shielding', 'Food & beverage', 'Water treatment', 'pH balance systems'],
  },
  {
    id: 'acetylene',
    title: 'Acetylene',
    icon: Flame,
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'High-temperature fuel gas for oxy-acetylene welding, metal cutting, and brazing.',
    applications: ['Oxy-acetylene cutting', 'Field welding', 'Brazing & heating', 'Structural steel'],
  },
]

export default function Gases() {
  const pageRef = useRevealAll()
  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-[#f6f8fa] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl reveal-left">
            <h1
              className="text-4xl sm:text-6xl font-display font-900 text-[#111827] mb-4 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industrial & Medical
              <span className="block text-[#0097B2]">Gases in Ethiopia</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
              Reliable cylinder gas supply for healthcare, manufacturing, and fabrication across Ethiopia.
            </p>
            <Link
              to="/contact"
              id="gases-hero-cta"
              className="bg-[#0097B2] text-white hover:bg-[#007b91] font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 transition-colors shadow-sm"
            >
              Request Gas Supply <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gas grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Gas Products
            </h2>
            <div className="divider-gold w-24 mx-auto mb-3" />
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Cylinder supply, gas-handling equipment and delivery for each product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {gases.map(({ id, icon: Icon, title, description, applications, color, bg }) => (
              <div
                key={id}
                id={`gas-${id}`}
                className="reveal card-hover rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <div className="h-1.5" style={{ backgroundColor: color }} />
                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3
                    className="text-xl font-display font-800 text-[#111827] mb-2"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                  >
                    {title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {applications.map((app) => (
                      <span
                        key={app}
                        className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="reveal bg-white border border-gray-200 shadow-sm rounded-2xl p-8 text-center">
            <h2
              className="text-2xl font-display font-800 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Gas Supply Request
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed max-w-lg mx-auto text-base">
              Contact us with the gas type, quantity, cylinder size, and delivery location.
            </p>
            <Link
              to="/contact"
              id="gases-supply-cta"
              className="bg-[#0097B2] text-white hover:bg-[#007b91] font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 transition-colors shadow-sm"
            >
              Request Gas Supply <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

