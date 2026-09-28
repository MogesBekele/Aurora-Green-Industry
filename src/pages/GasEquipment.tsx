import { Link } from 'react-router-dom'
import { ArrowRight, Package, Settings, Gauge } from 'lucide-react'

const equipment = [
  {
    id: 'gas-cylinders',
    icon: Package,
    title: 'Gas Cylinders',
    description:
      'Aurora Green Industries supplies gas cylinders for compressed-gas applications. Customers can contact our team regarding cylinder availability, specifications and supply requirements.',
    items: [
      'Standard gas cylinders',
      'Various cylinder sizes',
      'Multiple gas types',
      'Cylinder supply & management',
    ],
  },
  {
    id: 'valves-equipment',
    icon: Settings,
    title: 'Valves & Gas Equipment',
    description:
      'Our gas-equipment range includes gas cylinder valves, gas valves, pressure gauges, pressure regulators, gas fittings, gas accessories and cylinder-related equipment.',
    items: [
      'Gas cylinder valves',
      'Pressure gauges',
      'Pressure regulators',
      'Gas fittings & accessories',
    ],
  },
  {
    id: 'pressure-gauges',
    icon: Gauge,
    title: 'Pressure Gauges & Regulators',
    description:
      'We supply pressure gauges and regulators for gas cylinder and gas handling applications. Customers can provide existing component information for replacement identification.',
    items: [
      'Pressure gauges',
      'Single-stage regulators',
      'Two-stage regulators',
      'Specialty regulators',
    ],
  },
]

export default function GasEquipment() {
  return (
    <div>
      {/* Hero */}
      <section className="section-gradient-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <Package size={14} className="text-gray-300" />
              <span className="text-gray-300 text-sm font-medium">Gas Cylinders & Equipment</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Gas Cylinders, Valves
              <span className="text-[#c8922a]"> & Pressure Gauges</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Aurora Green Industries supplies gas cylinders and related components including cylinder valves,
              pressure gauges, regulators, fittings and accessories for compressed-gas applications.
            </p>
            <Link
              to="/contact"
              id="gasequip-hero-cta"
              className="btn-gold text-white font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
            >
              Request Gas Equipment <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Gas Equipment Range
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              For replacement components, customers can provide existing component information or application requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipment.map(({ id, icon: Icon, title, description, items }) => (
              <div
                key={id}
                id={`equip-${id}`}
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1a472a] to-[#c8922a]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#f0fdf5] flex items-center justify-center mb-5">
                    <Icon size={26} className="text-[#1a472a]" />
                  </div>
                  <h3
                    className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a4f] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl font-display font-800 text-[#0a1f0e] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Ready to Request Gas Equipment?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Contact our team with your cylinder, valve, gauge or regulator requirements.
            For replacement components, provide existing component details or application requirements.
          </p>
          <Link
            to="/contact"
            id="gasequip-cta"
            className="btn-green text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            Request Gas Equipment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
