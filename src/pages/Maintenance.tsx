import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Wrench, Settings, ClipboardList, AlertTriangle, Gauge } from 'lucide-react'

const serviceTypes = [
  {
    id: 'minor-service',
    icon: Wrench,
    title: 'Minor Compressor Service',
    description:
      'Routine scheduled maintenance and replacement of applicable service components, followed by operational checks.',
    items: ['Filter replacement', 'Oil change', 'Belt inspection', 'Operational checks', 'Service records'],
  },
  {
    id: 'major-service',
    icon: Settings,
    title: 'Major Compressor Service',
    description:
      'More extensive scheduled maintenance, inspection, component replacement, reassembly and operational checks according to the specific compressor and service requirement.',
    items: ['Full disassembly & inspection', 'Component replacement', 'Seal & valve replacement', 'Reassembly & alignment', 'Operational testing'],
  },
  {
    id: 'preventive',
    icon: ClipboardList,
    title: 'Preventive Maintenance',
    description:
      'Maintenance scheduling, service-interval planning, routine inspection, scheduled component replacement and maintenance records.',
    items: ['Maintenance scheduling', 'Service-interval planning', 'Routine inspection', 'Component tracking', 'Maintenance records'],
  },
  {
    id: 'troubleshooting',
    icon: AlertTriangle,
    title: 'Troubleshooting & Technical Support',
    description:
      'Initial assessment, equipment inspection, troubleshooting, component identification, parts identification and maintenance recommendations.',
    items: ['Initial assessment', 'Equipment inspection', 'Fault diagnosis', 'Parts identification', 'Maintenance recommendations'],
  },
  {
    id: 'industrial-maintenance',
    icon: Gauge,
    title: 'Industrial Equipment Maintenance',
    description:
      'Applicable industrial equipment maintenance, equipment inspection, installation support, commissioning support, troubleshooting and component replacement.',
    items: ['Equipment inspection', 'Installation support', 'Commissioning', 'Troubleshooting', 'Component replacement'],
  },
  {
    id: 'gas-support',
    icon: Settings,
    title: 'Gas & Oxygen Equipment Support',
    description:
      'Technical support including gas equipment maintenance, oxygen plant equipment support, cylinder filling equipment, gas manifold equipment, gas valves and components.',
    items: ['Gas equipment maintenance', 'Oxygen plant support', 'Cylinder filling equipment', 'Gas manifold equipment', 'Gas valve components'],
  },
]

const serviceItems = [
  'Preventive maintenance',
  'Minor compressor service',
  'Major compressor service',
  'Scheduled maintenance',
  'Inspection and condition assessment',
  'Troubleshooting',
  'Component replacement',
  'Filter and separator replacement',
  'Lubricant and consumable replacement',
  'Technical support',
]

const processSteps = [
  { num: '01', title: 'Contact Us', description: 'Contact us with equipment model, serial number and service requirement.' },
  { num: '02', title: 'Assessment', description: 'Assessment of the equipment and service scope.' },
  { num: '03', title: 'Parts Arrangement', description: 'Identification and arrangement of required parts/materials.' },
  { num: '04', title: 'Technical Service', description: 'Technical service according to the agreed scope.' },
  { num: '05', title: 'Post-Service Checks', description: 'Post-service checks and relevant service information.' },
]

export default function Maintenance() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #111827 60%, #111827 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0097B2] translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Wrench size={14} className="text-slate-100" />
              <span className="text-gray-300 text-sm font-medium">Compressor & Industrial Maintenance</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Maintenance &
              <span className="text-[#0097B2]"> Technical Services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Aurora Green Industries PLC provides technical maintenance and service support for compressors
              and industrial equipment, from scheduled preventive maintenance to emergency troubleshooting.
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl font-display font-800 text-[#111827] mb-5"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
              >
                Compressor Maintenance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-7">
                Our maintenance and technical service team supports compressor maintenance across the service lifecycle,
                from routine scheduled maintenance to major service interventions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#0097B2] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
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
      <section className="py-20 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-[#111827] mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Service Capabilities
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map(({ id, icon: Icon, title, description, items }) => (
              <div
                key={id}
                id={`maint-${id}`}
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f8fa] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#111827]" />
                </div>
                <h3
                  className="text-lg font-display font-700 text-[#111827] mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-[#0097B2] shrink-0" />
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
      <section className="py-20 section-gradient-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-display font-800 text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
            >
              Service Process
            </h2>
            <div className="divider-gold w-24 mx-auto mb-4" />
            <p className="text-gray-300 text-sm">A clear, five-step approach to every service engagement.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map(({ num, title, description }) => (
              <div key={num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0097B2] text-white font-display font-800 text-xl flex items-center justify-center mx-auto mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                  {num}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-300/80 text-xs leading-relaxed">{description}</p>
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

