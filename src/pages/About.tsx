import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Eye, Target, Heart, TrendingUp } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Reliability', description: 'Dependable products, services and delivery that customers can count on.' },
  { icon: TrendingUp, title: 'Technical Excellence', description: 'Continuously developing our technical capabilities and service quality.' },
  { icon: Eye, title: 'Integrity', description: 'Honest, transparent and factual in everything we do and claim.' },
  { icon: Target, title: 'Customer Focus', description: 'Understanding customer requirements and providing appropriate solutions.' },
  { icon: Heart, title: 'Continuous Improvement', description: 'Developing our capabilities to serve a broader range of industrial customers.' },
]

const businesses = [
  {
    title: 'Compressed Air & Atlas Copco Solutions',
    color: '#1a472a',
    items: [
      'Atlas Copco Compressor Service & Optimization (CSO)',
      'Genuine parts, service kits, filters and separators',
      'Lubricants and consumables',
      'Maintenance and service plans',
      'Digital and smart services',
      'Energy and optimization services',
      'Air-treatment accessories',
    ],
  },
  {
    title: 'Industrial & Medical Gases',
    color: '#c8922a',
    items: [
      'Oxygen (medical and industrial)',
      'Nitrogen',
      'Argon',
      'Carbon dioxide',
      'Acetylene',
      'Cylinder supply and management',
      'Gas-handling equipment',
    ],
  },
  {
    title: 'Maintenance & Technical Services',
    color: '#484f58',
    items: [
      'Preventive maintenance',
      'Minor and major compressor service',
      'Troubleshooting and diagnostics',
      'Equipment inspection',
      'Gas and oxygen equipment support',
      'Industrial equipment maintenance',
    ],
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1f0e, #1a472a, #0f2d14)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c8922a] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#2d7a4f] -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-green-200 text-sm font-medium">About Aurora Green Industries</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Building Reliable Industrial
              <span className="text-[#c8922a]"> Solutions for Ethiopia</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              Aurora Green Industries PLC (AGI) is an Ethiopian industrial solutions company providing compressed-air
              equipment, genuine spare parts, maintenance and technical services, industrial and medical gases,
              cylinders and gas-handling equipment.
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl font-display font-800 text-[#0a1f0e] mb-5"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Our Approach
              </h2>
              <div className="bg-[#f0fdf5] rounded-2xl p-7 mb-6 border border-[#2d7a4f]/15">
                <p className="text-[#1a472a] font-semibold text-lg mb-3">Products + Parts + Service</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We believe industrial customers need more than a product. A compressor needs the right parts and
                  maintenance. A gas customer needs dependable supply and appropriate cylinders and equipment.
                  An industrial facility needs technical support when equipment requires attention.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our focus is to provide customers with reliable products, practical technical support and responsive
                service for the equipment and systems they depend on.
              </p>

              {/* Vision / Mission */}
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-[#1a472a] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c8922a]" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To become a trusted industrial solutions partner in Ethiopia.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a472a] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c8922a]" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To provide customers with dependable industrial equipment, genuine spare parts, gases and
                    technical services while continuously developing our technical capabilities and supporting
                    the productivity and reliability of the industries we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo large */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#f6f8fa] rounded-3xl p-12 w-full flex flex-col items-center border border-gray-100">
                <img
                  src="/agi_logo.jpg"
                  alt="Aurora Green Industries PLC"
                  className="h-48 w-auto object-contain mb-6"
                />
                <p className="text-center text-sm text-gray-500 leading-relaxed max-w-xs">
                  Aurora Green Industries PLC is developing its capabilities to serve a broader range of
                  industrial customers across Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="py-20 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#0a1f0e] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Business
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businesses.map(({ title, items, color }) => (
              <div key={title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-1.5" style={{ background: color }} />
                <div className="p-7">
                  <h3
                    className="text-lg font-display font-700 text-[#0a1f0e] mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />
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

      {/* Values */}
      <section className="py-20 section-gradient-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Values
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-[#c8922a]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-green-200/70 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl font-display font-800 text-[#0a1f0e] mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
          >
            Ready to Work With Aurora Green Industries?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you need Atlas Copco parts, compressor service, industrial gases or gas equipment,
            contact our team to discuss your requirements.
          </p>
          <Link
            to="/contact"
            id="about-cta"
            className="btn-green text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            Contact Aurora Green Industries <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
