import { useState } from "react";

const services = [
  "SS Balcony & Stair Railings",
  "Frameless Glass Railings",
  "SS Designer Entrance Gates",
  "SS Safety Window Grills",
  "Custom Architectural Fabrication",
  "Custom SS Furniture",
  "Other / Industrial Fitment",
];

const gradeOptions = [
  "SS 304 (Recommended Standard)",
  "SS 316 (Marine & Chemical Grade)",
  "SS 202 (Budget / Indoor)",
  "Need Technical Advice on Site",
];

function Contact({ prefilledProduct = "", onShowToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [needsSiteVisit, setNeedsSiteVisit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: prefilledProduct || "SS Balcony & Stair Railings",
    grade: "SS 304 (Recommended Standard)",
    approxSize: "",
    location: "Jodhpur, Rajasthan",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast(`${label} copied to clipboard!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const text =
      `*New Project Enquiry - Ramdev Steel*%0A%0A` +
      `*Name:* ${formData.name || "Customer"}%0A` +
      `*Phone:* ${formData.phone || "Not provided"}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Steel Grade:* ${formData.grade}%0A` +
      `*Approx Dimension:* ${formData.approxSize || "To be measured"}%0A` +
      `*Location:* ${formData.location || "Rajasthan"}%0A` +
      `*Site Visit Requested:* ${needsSiteVisit ? "Yes, please visit site" : "Not yet"}%0A` +
      `*Details:* ${formData.message || "Please share quotation"}`;

    window.open(`https://wa.me/919468815735?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28 lg:py-32 border-t border-slate-200/90 overflow-hidden w-full max-w-full">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <span>📍 Connect With Us</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Let's Build <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Something Strong.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base lg:ml-auto lg:max-w-xl">
            Have a blueprint, CAD drawing, or photo reference? Send your requirement online or
            schedule a free on-site measurement visit across Jodhpur and nearby areas.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-5 sm:p-7 shadow-md shadow-slate-200/50">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                Direct Contact Hub
              </span>
              <h3 className="mt-1.5 text-2xl font-bold text-slate-900">
                Speak With A Specialist
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Connect directly with our master fabricators for rapid estimates and technical advice.
              </p>

              {/* Phone Card */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-orange-400 shadow-sm">
                <a href="tel:+919468815735" className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.94 1.515L10 8a2 2 0 01-.5 1.94l-1.3 1.3a16 16 0 006.56 6.56l1.3-1.3A2 2 0 0118 16l3.485.76A2 2 0 0123 18.7V21a2 2 0 01-2 2C10.507 23 1 13.493 1 3a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Call Us Anytime</span>
                    <p className="text-sm font-bold text-slate-900">+91 94688 15735</p>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy("+919468815735", "Phone number")}
                  className="rounded-lg bg-slate-100 p-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition"
                  title="Copy Phone"
                >
                  📋
                </button>
              </div>

              {/* WhatsApp Action Card */}
              <a
                href="https://wa.me/919468815735?text=Hello%20Ramdev%20Steel!%20I%20am%20looking%20for%20a%20stainless%20steel%20fabrication%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50/70 p-4 transition hover:bg-emerald-100/70 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-700">Instant WhatsApp</span>
                    <p className="text-sm font-bold text-slate-900">Chat With Fabricator</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700">Online Now →</span>
              </a>

              {/* Email Card */}
              <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-orange-400 shadow-sm">
                <a href="mailto:info@ramdevsteel.com" className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Official Email</span>
                    <p className="text-sm font-bold text-slate-900">info@ramdevsteel.com</p>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy("info@ramdevsteel.com", "Email address")}
                  className="rounded-lg bg-slate-100 p-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition"
                  title="Copy Email"
                >
                  📋
                </button>
              </div>

              {/* Location Card */}
              <div className="mt-3 flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Workshop & Office</span>
                  <p className="text-sm font-bold text-slate-900">Ramdev Steel Industries</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Industrial Area, Jodhpur, Rajasthan - 342001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Jodhpur+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-bold text-orange-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

            </div>

            {/* Operating Hours Box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 text-xs shadow-sm">
              <span className="font-bold text-slate-900">Workshop & Site Visit Hours:</span>
              <div className="mt-2 flex justify-between text-slate-600">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-slate-900">9:00 AM - 8:00 PM</span>
              </div>
              <div className="mt-1 flex justify-between text-slate-600">
                <span>Sunday:</span>
                <span className="font-semibold text-orange-700">On Prior Appointment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quotation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
              
              {!submitted ? (
                <>
                  <div className="border-b border-slate-200 pb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                      Online Quotation & Site Visit Form
                    </span>
                    <h3 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
                      Request A Custom Quote
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500">
                      Fill out this quick form or send your message directly to our WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    
                    {/* Name + Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patel"
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 94688 XXXXX"
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Email + Location */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Project City / Area
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Jodhpur, Pali, Barmer"
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Service + Grade */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        >
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Preferred Steel Grade
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                        >
                          {gradeOptions.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Approx Dimensions */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Approximate Length or Dimensions (Optional)
                      </label>
                      <input
                        type="text"
                        name="approxSize"
                        value={formData.approxSize}
                        onChange={handleChange}
                        placeholder="e.g. 40 running feet balcony, 15x8 ft entrance gate"
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Project Details / Specific Requirements
                      </label>
                      <textarea
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your architectural style, height preferences, or design ideas..."
                        className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 shadow-sm"
                      />
                    </div>

                    {/* Site Visit Checkbox */}
                    <div className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/80 via-amber-50/50 to-orange-50/80 p-3.5 shadow-sm">
                      <input
                        type="checkbox"
                        id="siteVisit"
                        checked={needsSiteVisit}
                        onChange={(e) => setNeedsSiteVisit(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500/30 accent-orange-600"
                      />
                      <label htmlFor="siteVisit" className="text-xs text-slate-700 cursor-pointer">
                        <strong className="text-slate-900">Request Free On-Site Measurement Visit:</strong> Our technician will visit your site with laser tools and physical material samples.
                      </label>
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 rounded-xl bg-orange-600 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-700 active:scale-[0.98]"
                      >
                        Submit Enquiry Online
                      </button>

                      <button
                        type="button"
                        onClick={handleSendWhatsAppDirect}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59] active:scale-[0.98]"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.49 1.199.533 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.17-1.32c1.42.79 3.05 1.24 4.83 1.24 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.57 0-3.03-.43-4.3-1.18l-.31-.18-3.07.78.82-2.99-.2-.32C4.15 15.17 3.7 13.63 3.7 12c0-4.58 3.72-8.3 8.3-8.3s8.3 3.72 8.3 8.3-3.72 8.3-8.3 8.3z" />
                        </svg>
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                  </form>
                </>
              ) : (
                /* Success Feedback */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    Quotation Request Received!
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 max-w-md">
                    Thank you, <strong className="text-slate-900">{formData.name || "Customer"}</strong>. Our senior fabrication team has received your details for <strong className="text-orange-600">{formData.service}</strong>. We will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleSendWhatsAppDirect}
                      className="rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20ba59] transition"
                    >
                      Open in WhatsApp for Faster Response
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:text-slate-900 shadow-sm"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;