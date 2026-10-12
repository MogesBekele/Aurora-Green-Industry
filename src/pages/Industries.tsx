import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Factory, Hammer, HardHat, Building2, Settings, FlaskConical, Droplets } from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare & Hospitals',
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'Medical oxygen, cylinder supply, manifolds, and dedicated hospital technical support.',
    solutions: ['Medical oxygen supply', 'Gas cylinders', 'Cylinder valves', 'Pressure gauges', 'Gas equipment'],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Plants',
    color: '#111827',
    bg: '#f6f8fa',
    description: 'Atlas Copco CSO compressors, preventive service plans, genuine filtration, and plant utility gases.',
    solutions: ['Atlas Copco CSO', 'Genuine spare parts', 'Service kits', 'Compressor maintenance', 'Industrial gases'],
  },
  {
    id: 'welding-fabrication',
    icon: Hammer,
    title: 'Welding & Metal Fabrication',
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'Oxygen, acetylene, argon shielding gas, cutting regulators, and safety valves.',
    solutions: ['Oxygen', 'Acetylene', 'Argon shielding gas', 'CO₂', 'Cylinders & valves'],
  },
  {
    id: 'construction',
    icon: HardHat,
    title: 'Construction & Infrastructure',
    color: '#484f58',
    bg: '#f6f8fa',
    description: 'Mobile and stationary air compressors, genuine service kits, and on-site gas supply.',
    solutions: ['Compressors', 'Genuine spare parts', 'Compressor maintenance', 'Industrial gases', 'Gas cylinders'],
  },
  {
    id: 'mining',
    icon: Building2,
    title: 'Mining & Heavy Exploration',
    color: '#111827',
    bg: '#f6f8fa',
    description: 'Severe-duty compressed-air solutions, rapid parts dispatch, and field maintenance support.',
    solutions: ['Compressed-air equipment', 'Atlas Copco parts', 'Preventive maintenance', 'Industrial gases'],
  },
  {
    id: 'industrial-facilities',
    icon: Settings,
    title: 'Industrial Facilities & Utilities',
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'Compressed-air optimization, AIRnet piping systems, and bulk industrial gas networks.',
    solutions: ['Atlas Copco CSO', 'Genuine parts', 'Preventive maintenance', 'Industrial gases'],
  },
  {
    id: 'laboratories',
    icon: FlaskConical,
    title: 'Laboratories & Research',
    color: '#484f58',
    bg: '#f6f8fa',
    description: 'High-precision nitrogen, argon, and CO₂ with dual-stage regulators and ultra-pure cylinders.',
    solutions: ['Oxygen', 'Nitrogen', 'Argon', 'CO₂', 'Gas cylinders', 'Gas-handling equipment'],
  },
  {
    id: 'water-drilling',
    icon: Droplets,
    title: 'Water Well Drilling & Field Works',
    color: '#0097B2',
    bg: '#f6f8fa',
    description: 'High-pressure compressor support, field maintenance response, and industrial gas logistics.',
    solutions: ['Compressors', 'Compressor parts', 'Field maintenance', 'Industrial gases'],
  },
]

export default function Industries() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#f6f8fa] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-6xl font-display font-900 text-[#111827] mb-4 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industrial Solutions for
              <span className="text-[#0097B2]"> Ethiopia's Industries</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-medium">
              Compressed-air equipment, genuine parts, maintenance, and gas solutions for Ethiopia's key sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map(({ id, icon: Icon, title, description, solutions, color, bg }) => (
              <div
                key={id}
                id={`industry-${id}`}
                className="industry-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl sm:text-2xl font-display font-800 text-[#111827] mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                    >
                      {title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solutions.map((s) => (
                        <span
                          key={s}
                          className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border text-gray-800"
                          style={{ borderColor: `${color}40`, backgroundColor: bg }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl font-display font-800 text-[#111827] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Don't See Your Industry?
          </h2>
          <p className="text-gray-500 mb-7 max-w-lg mx-auto text-sm leading-relaxed">
            Contact us — our team will assess whether we can support your compressed-air, gas or maintenance needs.
          </p>
          <Link
            to="/contact"
            id="industries-cta"
            className="btn-green text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            Contact Aurora Green Industries <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

