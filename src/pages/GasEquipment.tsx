import { Link } from 'react-router-dom'
import { ArrowRight, Package, Settings, Gauge } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const equipment = [
  {
    id: 'gas-cylinders',
    icon: Package,
    title: 'Gas Cylinders',
    description: 'Certified high-pressure cylinders in standard capacities for medical and industrial gases.',
    items: [
      'Standard high-pressure cylinders',
      'Various capacities (10L – 50L)',
      'Certified safety valves & caps',
    ],
  },
  {
    id: 'valves-equipment',
    icon: Settings,
    title: 'Valves & Line Fittings',
    description: 'Durable brass and stainless cylinder valves, manifold connections, and gas hardware.',
    items: [
      'High-pressure cylinder valves',
      'Residual pressure valves (RPV)',
      'Manifolds & distribution blocks',
    ],
  },
  {
    id: 'pressure-gauges',
    icon: Gauge,
    title: 'Gauges & Regulators',
    description: 'Single and dual-stage pressure regulators with calibrated gauges for safe gas flow.',
    items: [
      'Dual-stage high-precision regulators',
      'Calibrated pressure test gauges',
      'Heavy-duty welding regulators',
    ],
  },
]

export default function GasEquipment() {
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
              Gas Cylinders, Valves
              <span className="text-[#0097B2]"> & Pressure Gauges</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
              Certified gas cylinders, precision control valves, regulators, and pressure gauges.
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Gas Equipment Range
            </h2>
            <div className="divider-gold w-24 mx-auto mb-3" />
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Provide existing component details or application requirements for replacement orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
            {equipment.map(({ id, icon: Icon, title, description, items }) => (
              <div
                key={id}
                id={`equip-${id}`}
                className="reveal card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="h-1.5 bg-[#0097B2]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#f6f8fa] flex items-center justify-center mb-5">
                    <Icon size={26} className="text-[#111827]" />
                  </div>
                  <h3
                    className="text-xl font-display font-800 text-[#111827] mb-2"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                  >
                    {title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-base font-semibold text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-[#0097B2] shrink-0" />
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
      <section className="py-14 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
          <h2
            className="text-2xl font-display font-800 text-[#111827] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Ready to Request Gas Equipment?
          </h2>
          <p className="text-gray-500 mb-7 max-w-lg mx-auto text-base leading-relaxed">
            Contact our team with your cylinder, valve, gauge or regulator requirements.
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

