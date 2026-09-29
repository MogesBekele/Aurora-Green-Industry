import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Package, Wrench, Flame, Settings } from 'lucide-react'

const quickActions = [
  { id: 'qa-quote', icon: ArrowRight, label: 'Request a Quote', subject: 'Request a Quote' },
  { id: 'qa-parts', icon: Package, label: 'Request Genuine Parts', subject: 'Genuine Parts Request' },
  { id: 'qa-service', icon: Wrench, label: 'Request Compressor Service', subject: 'Compressor Service Request' },
  { id: 'qa-gas', icon: Flame, label: 'Request Gas Supply', subject: 'Gas Supply Request' },
  { id: 'qa-equipment', icon: Settings, label: 'Request Gas Equipment', subject: 'Gas Equipment Request' },
]

const serviceOptions = [
  'Genuine Atlas Copco Parts',
  'Compressor Service',
  'Preventive Maintenance',
  'Service Kit',
  'Industrial Gas Supply',
  'Medical Gas Supply',
  'Gas Cylinders',
  'Gas Equipment (Valves / Gauges / Regulators)',
  'Energy Optimization / AIRScan',
  'Digital / Smart Services',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    serial: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const setSubject = (subject: string) => {
    setForm((f) => ({ ...f, service: subject }))
    const el = document.getElementById('contact-form')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-gradient-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl font-display font-900 text-white mb-5 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900 }}
            >
              Let's Discuss
              <span className="text-[#0097B2]"> Your Requirement</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need an Atlas Copco part, compressor service, industrial gas, cylinder, valve,
              pressure gauge or another industrial solution, contact Aurora Green Industries PLC.
            </p>
          </div>
        </div>
      </section>

      {/* Quick action buttons */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">Quick Contact</p>
          <div className="flex flex-wrap gap-3">
            {quickActions.map(({ id, icon: Icon, label, subject }) => (
              <button
                key={id}
                id={id}
                onClick={() => setSubject(subject)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#111827] text-[#111827] text-sm font-semibold hover:bg-[#111827] hover:text-white transition-all"
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2
                  className="text-2xl font-display font-800 text-[#111827] mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                >
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#111827] flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                      <a
                        href="tel:+251944999966"
                        className="text-[#111827] font-semibold hover:text-[#007b91] transition-colors"
                      >
                        +251 944 999 966
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#111827] flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                      <a
                        href="mailto:d.berossa@gmail.com"
                        className="text-[#111827] font-semibold hover:text-[#007b91] transition-colors text-sm break-all"
                      >
                        d.berossa@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#111827] flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-[#111827] font-semibold">Addis Ababa, Ethiopia</p>
                      <p className="text-gray-500 text-sm">Aurora Green Industries PLC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info box */}
              <div className="bg-[#111827] rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-3 text-[#0097B2]">What to Include</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    'Product or service required',
                    'Compressor brand & model',
                    'Serial number (if applicable)',
                    'Part number (if known)',
                    'Gas type & quantity needed',
                    'Delivery location',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#0097B2] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div id="contact-form" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#f6f8fa] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-[#0097B2]" />
                    </div>
                    <h3
                      className="text-2xl font-display font-800 text-[#111827] mb-3"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Aurora Green Industries PLC. Our team will review your
                      requirement and respond promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', company: '', phone: '', email: '', service: '', serial: '', message: '' })
                      }}
                      className="mt-6 btn-green text-white font-semibold px-6 py-3 rounded-full text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h2
                      className="text-2xl font-display font-800 text-[#111827] mb-7"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}
                    >
                      Send Us a Message
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="name">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="company">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+251 ..."
                          className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="email">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="service">
                        Product or Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                      >
                        <option value="">Select a service or product...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="serial">
                        Equipment Model / Serial Number (if applicable)
                      </label>
                      <input
                        id="serial"
                        name="serial"
                        type="text"
                        value={form.serial}
                        onChange={handleChange}
                        placeholder="e.g. Atlas Copco GA 55, SN: XXXXXXX"
                        className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa]"
                      />
                    </div>

                    <div className="mb-7">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="message">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your requirement, quantity, delivery location, urgency, or any other details..."
                        className="form-input w-full rounded-xl px-4 py-3 text-sm bg-[#f6f8fa] resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={loading}
                      className="btn-green w-full text-white font-semibold py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

