
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Eye, Target, Heart, TrendingUp } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const values = [
  { icon: Shield, title: 'Reliability', description: 'Dependable products and delivery customers count on.' },
  { icon: TrendingUp, title: 'Technical Excellence', description: 'Continuously improving our service quality.' },
  { icon: Eye, title: 'Integrity', description: 'Honest and transparent in everything we do.' },
  { icon: Target, title: 'Customer Focus', description: 'Solutions tailored to your requirements.' },
  { icon: Heart, title: 'Continuous Improvement', description: 'Expanding capabilities across Ethiopia.' },
]

const businesses = [
  {
    title: 'Compressed Air & Atlas Copco',
    color: '#111827',
    items: [
      'Atlas Copco CSO — genuine parts & service kits',
      'Filters, separators & lubricants',
      'Preventive maintenance plans',
      'Digital & energy optimization services',
    ],
  },
  {
    title: 'Industrial & Medical Gases',
    color: '#0097B2',
    items: [
      'Medical & industrial oxygen',
      'Nitrogen, argon & CO₂',
      'Acetylene',
      'Cylinder supply & gas-handling equipment',
    ],
  },
  {
    title: 'Maintenance & Technical Services',
    color: '#484f58',
    items: [
      'Preventive & scheduled maintenance',
      'Minor & major compressor service',
      'Troubleshooting & diagnostics',
      'Gas & oxygen equipment support',
    ],
  },
]

export default function About() {
  const pageRef = useRevealAll()
  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-[#f6f8fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl reveal-left">
            <h1
              className="text-4xl sm:text-6xl font-display font-900 text-[#111827] mb-4 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Reliable Industrial
              <span className="text-[#0097B2]"> Solutions for Ethiopia</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-medium">
              Ethiopia's authorised Atlas Copco partner for compressed-air systems, genuine parts, maintenance, and industrial gases.
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="reveal-left">
              <h2
                className="text-3xl font-display font-800 text-[#111827] mb-5"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Our Approach
              </h2>
              <div className="bg-[#f6f8fa] rounded-2xl p-6 mb-5 border border-[#0097B2]/15">
                <p className="text-[#111827] font-bold text-xl mb-1">Products + Parts + Service</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Genuine OEM equipment, pre-emptive maintenance, and responsive technical engineering — under one roof.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-4">
                    To become a trusted industrial solutions partner across Ethiopia.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0097B2]" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed pl-4">
                    Provide dependable equipment, genuine parts, gases and technical services while supporting the productivity of the industries we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="reveal-right flex flex-col items-center justify-center">
              <div className="bg-[#f6f8fa] rounded-3xl p-10 w-full flex flex-col items-center border border-gray-100">
                <img
                  src="/agi_logo_new.png"
                  alt="Aurora Green Industries PLC"
                  className="h-44 w-auto object-contain mb-4"
                />
                <p className="text-center text-base text-gray-500 leading-relaxed max-w-xs">
                  Aurora Green Industries PLC — serving a growing range of industrial customers across Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Our Business
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {businesses.map(({ title, items, color }) => (
              <div key={title} className="reveal bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-1.5" style={{ background: color }} />
                <div className="p-6">
                  <h3
                    className="text-lg font-display font-700 text-[#111827] mb-4"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-gray-700">
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-900 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Our Core Values
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 stagger-children">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="reveal text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#f6f8fa] border border-gray-200 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#0097B2]" />
                </div>
                <h3 className="text-[#111827] font-bold text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
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
            Ready to Work With Aurora Green Industries?
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto text-base leading-relaxed">
            Contact our team for Atlas Copco parts, compressor service, or gas supply.
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

