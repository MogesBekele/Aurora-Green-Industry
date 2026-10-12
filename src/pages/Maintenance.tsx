import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Wrench, Settings, ClipboardList, AlertTriangle, Gauge } from 'lucide-react'
import { useRevealAll } from '../hooks/useReveal'

const serviceTypes = [
  {
    id: 'minor-service',
    icon: Wrench,
    title: 'Minor Compressor Service',
    description: 'Routine oil & filter changes, valve checks, and performance calibration.',
    items: ['Filter & oil replacement', 'Belt & tension inspection', 'Operating parameter checks'],
  },
  {
    id: 'major-service',
    icon: Settings,
    title: 'Major Compressor Overhaul',
    description: 'Full element teardown, seal replacements, and load validation testing.',
    items: ['Full element teardown', 'Bearings & seals renewal', 'Operational load testing'],
  },
  {
    id: 'preventive',
    icon: ClipboardList,
    title: 'Preventive Service Plans',
    description: 'Scheduled contracts tailored to operating hours to prevent breakdowns.',
    items: ['Fixed maintenance intervals', 'Genuine parts budgeting', 'Dedicated technician support'],
  },
  {
    id: 'troubleshooting',
    icon: AlertTriangle,
    title: 'Emergency Troubleshooting',
    description: 'Rapid fault isolation, on-site repairs, and urgent genuine parts sourcing.',
    items: ['Immediate fault isolation', 'Pressure drop diagnostics', 'Rapid parts supply'],
  },
  {
    id: 'industrial-maintenance',
    icon: Gauge,
    title: 'Industrial Plant Maintenance',
    description: 'Installation, piping commissioning, and preventative servicing of utility assets.',
    items: ['Equipment installation', 'Piping leak audits', 'Plant commissioning'],
  },
  {
    id: 'gas-support',
    icon: Settings,
    title: 'Gas & Oxygen Plant Support',
    description: 'Technical service for manifold panels, pressure reduction stations, and cylinders.',
    items: ['Manifold maintenance', 'Oxygen plant support', 'Regulator calibration'],
  },
]

const serviceItems = [
  'Preventive maintenance',
  'Minor compressor service',
  'Major compressor service',
  'Scheduled maintenance',
  'Troubleshooting & diagnostics',
  'Filter & separator replacement',
  'Lubricant & consumable replacement',
  'Technical support',
]

const processSteps = [
  { num: '01', title: 'Contact Us', description: 'Provide equipment model, serial number and service needed.' },
  { num: '02', title: 'Assessment', description: 'We assess equipment and define the service scope.' },
  { num: '03', title: 'Parts Arrangement', description: 'Required parts and materials are sourced.' },
  { num: '04', title: 'Technical Service', description: 'Service carried out to the agreed scope.' },
  { num: '05', title: 'Post-Service Checks', description: 'Final checks and service documentation.' },
]

export default function Maintenance() {
  const pageRef = useRevealAll()
  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-[#f6f8fa] py-20 relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl reveal-left">
            <h1
              className="text-4xl sm:text-6xl font-display font-900 text-[#111827] mb-4 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Maintenance &
              <span className="text-[#0097B2]"> Technical Services</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
              Compressor maintenance, service kits, and emergency troubleshooting across Ethiopia.
            </p>
            <Link
              to="/contact"
              id="maintenance-hero-cta"
              className="btn-gold text-white font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
            >
              Request Service <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Compressor maintenance overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="reveal-left">
              <h2
                className="text-3xl font-display font-800 text-[#111827] mb-4"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Compressor Maintenance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Supporting the full compressor service lifecycle — from routine scheduled maintenance to major overhauls.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#0097B2] mt-0.5 shrink-0" />
                    <span className="text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right grid grid-cols-1 gap-5">
              {serviceTypes.slice(0, 3).map(({ id, icon: Icon, title, description }) => (
                <div key={id} className="flex gap-4 p-5 rounded-xl bg-[#f6f8fa] border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#f6f8fa] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#111827]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All service types */}
      <section className="py-16 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Service Capabilities
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {serviceTypes.map(({ id, icon: Icon, title, description, items }) => (
              <div
                key={id}
                id={`maint-${id}`}
                className="reveal card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f8fa] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#111827]" />
                </div>
                <h3
                  className="text-xl font-display font-800 text-[#111827] mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                >
                  {title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-base font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0097B2] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service process */}
      <section className="py-16 bg-[#f6f8fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-display font-900 text-[#111827] mb-3"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Service Process
            </h2>
            <div className="divider-gold w-24 mx-auto mb-3" />
            <p className="text-gray-600 text-base font-medium">Five clear steps from contact to completion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children">
            {processSteps.map(({ num, title, description }) => (
              <div key={num} className="reveal text-center">
                <div className="w-14 h-14 rounded-full bg-[#0097B2] text-white font-display font-800 text-xl flex items-center justify-center mx-auto mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                  {num}
                </div>
                <h3 className="text-[#111827] font-bold text-base mb-1.5">{title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              id="maintenance-process-cta"
              className="btn-gold text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
            >
              Request Service <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

