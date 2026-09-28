import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Heart, Factory, FlaskConical, Hammer } from 'lucide-react'

const gases = [
  {
    id: 'medical-oxygen',
    title: 'Medical Oxygen',
    icon: Heart,
    color: '#2d7a4f',
    bg: '#f0fdf5',
    description:
      'We supply medical oxygen for healthcare applications, supporting hospitals and other healthcare facilities that depend on a reliable oxygen supply.',
    applications: ['Hospitals', 'Healthcare facilities', 'Respiratory therapy', 'Emergency services'],
  },
  {
    id: 'industrial-oxygen',
    title: 'Industrial Oxygen',
    icon: Flame,
    color: '#c8922a',
    bg: '#fdf3dc',
    description:
      'Industrial oxygen is used in welding, metal fabrication, cutting and other industrial processes. Supplied in cylinders according to customer requirements.',
    applications: ['Metal cutting', 'Welding', 'Fabrication', 'Industrial processes'],
  },
  {
    id: 'nitrogen',
    title: 'Nitrogen',
    icon: FlaskConical,
    color: '#1a472a',
    bg: '#f0fdf5',
    description:
      'Nitrogen is used in industrial, manufacturing and technical applications where an inert gas is required for blanketing, purging and pressure testing.',
    applications: ['Industrial processing', 'Manufacturing', 'Purging', 'Pressure testing'],
  },
  {
    id: 'argon',
    title: 'Argon',
    icon: Hammer,
    color: '#484f58',
    bg: '#f6f8fa',
    description:
      'Argon is commonly used as a shielding gas in welding and metal fabrication. Aurora Green Industries supplies argon for customers requiring shielding-gas supply.',
    applications: ['MIG/TIG welding', 'Metal fabrication', 'Shielding gas', 'Metallurgy'],
  },
  {
    id: 'carbon-dioxide',
    title: 'Carbon Dioxide (CO₂)',
    icon: Factory,
    color: '#484f58',
    bg: '#f6f8fa',
    description:
      'Aurora Green Industries supplies CO₂ in cylinders for customers requiring carbon dioxide gas for their applications.',
    applications: ['Industrial applications', 'Gas mixtures', 'MIG welding', 'Various industries'],
  },
  {
    id: 'acetylene',
    title: 'Acetylene',
    icon: Flame,
    color: '#c8922a',
    bg: '#fdf3dc',
    description:
      'Acetylene is used in gas welding, cutting and other high-temperature industrial applications. Aurora Green Industries supplies acetylene for welding and fabrication requirements.',
    applications: ['Oxy-acetylene welding', 'Metal cutting', 'Brazing', 'High-temp applications'],
  },
]

export default function Gases() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#6b4c0e] via-[#c8922a] to-[#9a6e1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
              <Flame size={14} className="text-yellow-200" />
              <span className="text-yellow-100 text-sm font-medium">Industrial & Medical Gas Supply</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industrial & Medical
              <span className="block text-yellow-200">Gases in Ethiopia</span>
            </h1>
            <p className="text-yellow-100/90 text-lg leading-relaxed mb-8">
              Aurora Green Industries PLC supplies industrial and medical gases for healthcare, manufacturing,
              welding and fabrication, laboratories, construction and other industrial applications. Our gas
              portfolio includes oxygen, nitrogen, argon, carbon dioxide and acetylene.
            </p>
            <Link
              to="/contact"
              id="gases-hero-cta"
              className="bg-white text-[#9a6e1a] font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 hover:bg-yellow-50 transition-colors"
            >
              Request Gas Supply <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gas grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Gas Portfolio
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Cylinder supply, gas-handling equipment and delivery solutions for each product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gases.map(({ id, icon: Icon, title, description, applications, color, bg }) => (
              <div
                key={id}
                id={`gas-${id}`}
                className="card-hover rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                <div className="p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3
                    className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {applications.map((app) => (
                      <span
                        key={app}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
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
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#6b4c0e] to-[#c8922a] rounded-2xl p-10 text-center text-white">
            <h2
              className="text-2xl font-display font-800 mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Gas Supply Request
            </h2>
            <p className="text-yellow-100/90 mb-6 leading-relaxed max-w-xl mx-auto text-sm">
              Contact us with the gas required, quantity, cylinder size, delivery location and required frequency.
              Our team will confirm availability and arrange supply.
            </p>
            <Link
              to="/contact"
              id="gases-supply-cta"
              className="bg-white text-[#9a6e1a] font-semibold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2 hover:bg-yellow-50 transition-colors"
            >
              Request Gas Supply <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
