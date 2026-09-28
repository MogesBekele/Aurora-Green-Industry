import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Factory, Hammer, HardHat, Building2, Settings, FlaskConical, Droplets } from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    color: '#2d7a4f',
    bg: '#f0fdf5',
    description:
      'Medical oxygen, gas cylinders, cylinder valves, pressure gauges, gas equipment, gas supply and applicable technical support for hospitals and healthcare facilities.',
    solutions: ['Medical oxygen supply', 'Gas cylinders', 'Cylinder valves', 'Pressure gauges', 'Gas equipment', 'Technical support'],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    color: '#1a472a',
    bg: '#f0fdf5',
    description:
      'Atlas Copco compressors and CSO solutions, genuine parts, service kits, filters, lubricants, compressor maintenance and industrial gases for manufacturing facilities.',
    solutions: ['Atlas Copco CSO', 'Genuine spare parts', 'Service kits', 'Compressor maintenance', 'Industrial gases', 'Filters & lubricants'],
  },
  {
    id: 'welding-fabrication',
    icon: Hammer,
    title: 'Welding & Metal Fabrication',
    color: '#c8922a',
    bg: '#fdf3dc',
    description:
      'Oxygen, acetylene, argon, carbon dioxide, cylinders, cylinder valves, pressure gauges, regulators and related equipment for welding and fabrication operations.',
    solutions: ['Oxygen', 'Acetylene', 'Argon shielding gas', 'CO₂', 'Cylinders & valves', 'Regulators & gauges'],
  },
  {
    id: 'construction',
    icon: HardHat,
    title: 'Construction',
    color: '#484f58',
    bg: '#f6f8fa',
    description:
      'Compressors, genuine compressor spare parts, compressor maintenance, industrial gases, gas cylinders, valves and pressure gauges for construction applications.',
    solutions: ['Compressors', 'Genuine spare parts', 'Compressor maintenance', 'Industrial gases', 'Gas cylinders', 'Valves & gauges'],
  },
  {
    id: 'mining',
    icon: Building2,
    title: 'Mining',
    color: '#1a472a',
    bg: '#f0fdf5',
    description:
      'Compressed-air equipment, genuine Atlas Copco spare parts, compressor maintenance, preventive maintenance support, industrial gases and gas equipment for mining operations.',
    solutions: ['Compressed-air equipment', 'Atlas Copco parts', 'Preventive maintenance', 'Compressor service', 'Industrial gases', 'Gas equipment'],
  },
  {
    id: 'industrial-facilities',
    icon: Settings,
    title: 'Industrial Facilities',
    color: '#2d7a4f',
    bg: '#f0fdf5',
    description:
      'Atlas Copco compressors and CSO solutions, genuine parts, maintenance, industrial gases and gas equipment for industrial facilities and plants.',
    solutions: ['Atlas Copco CSO', 'Genuine parts', 'Preventive maintenance', 'Major service', 'Industrial gases', 'Gas equipment'],
  },
  {
    id: 'laboratories',
    icon: FlaskConical,
    title: 'Laboratories & Technical Applications',
    color: '#484f58',
    bg: '#f6f8fa',
    description:
      'Applicable oxygen, nitrogen, argon and carbon dioxide supply together with cylinders and gas-handling equipment for laboratories and technical applications.',
    solutions: ['Oxygen', 'Nitrogen', 'Argon', 'CO₂', 'Gas cylinders', 'Gas-handling equipment'],
  },
  {
    id: 'water-drilling',
    icon: Droplets,
    title: 'Water, Drilling & Field Applications',
    color: '#2d7a4f',
    bg: '#f0fdf5',
    description:
      'Where applicable, compressors, compressor parts, maintenance, industrial gases and gas equipment for water, drilling and field operations.',
    solutions: ['Compressors', 'Compressor parts', 'Field maintenance', 'Industrial gases', 'Gas equipment', 'Technical support'],
  },
]

export default function Industries() {
  return (
    <div>
      {/* Hero */}
      <section className="section-gradient-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Factory size={14} className="text-green-200" />
              <span className="text-green-200 text-sm font-medium">Industries We Serve</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Industrial Solutions for
              <span className="text-[#c8922a]"> Ethiopia's Industries</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              Different industries have different equipment, gas and maintenance requirements. Aurora Green Industries
              provides compressed-air solutions, genuine Atlas Copco parts, maintenance and technical services,
              industrial and medical gases, cylinders and gas equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      className="text-xl font-display font-700 text-[#0a1f0e] mb-3"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solutions.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-full border text-gray-700"
                          style={{ borderColor: `${color}30`, backgroundColor: bg }}
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
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl font-display font-800 text-[#0a1f0e] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Don't See Your Industry?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Contact us with your specific requirements. Our team will assess whether we can support
            your industry's compressed-air, gas or maintenance needs.
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
