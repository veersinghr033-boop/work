import { useState } from "react";
import { FiPhoneCall, FiCopy, FiMail, FiMapPin, FiCheckCircle, FiSend, FiClock, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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

    window.open(`https://wa.me/918949708489?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28 lg:py-32 border-t border-slate-200/90 overflow-hidden w-full max-w-full">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm">
              <FiMapPin className="h-3.5 w-3.5 text-orange-600" />
              <span>Connect With Us</span>
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
        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-12 w-full min-w-0 max-w-full">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4 w-full min-w-0 max-w-full">

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-4 xs:p-4.5 sm:p-7 shadow-md shadow-slate-200/50 w-full min-w-0 max-w-full overflow-hidden">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                Direct Contact Hub
              </span>
              <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-slate-900 break-words">
                Speak With A Specialist
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Connect directly with our master fabricators for rapid estimates and technical advice.
              </p>

              {/* Phone Card */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 transition hover:border-orange-400 shadow-sm w-full min-w-0">
                <a href="tel:+918949708489" className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FiPhoneCall className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Call Us Anytime</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">+91 8949708489</p>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy("+918949708489", "Phone number")}
                  className="rounded-lg bg-slate-100 p-2.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition shrink-0 ml-2"
                  title="Copy Phone"
                >
                  <FiCopy className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* WhatsApp Action Card */}
              <a
                href="https://wa.me/918949708489?text=Hello%20Ramdev%20Steel!%20I%20am%20looking%20for%20a%20stainless%20steel%20fabrication%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between gap-2 rounded-2xl border border-emerald-300 bg-emerald-50/70 p-3.5 sm:p-4 transition hover:bg-emerald-100/70 shadow-sm w-full min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
                    <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block">Instant WhatsApp</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">Chat With Fabricator</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100/90 border border-emerald-200/90 px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1">
                  Online Now <FiArrowRight className="h-3 w-3" />
                </span>
              </a>

              {/* Email Card */}
              <div className="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 transition hover:border-orange-400 shadow-sm w-full min-w-0">
                <a href="mailto:info@ramdevsteel.com" className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Official Email</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">info@ramdevsteel.com</p>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy("info@ramdevsteel.com", "Email address")}
                  className="rounded-lg bg-slate-100 p-2.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition shrink-0 ml-2"
                  title="Copy Email"
                >
                  <FiCopy className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Location Card */}
              <div className="mt-3 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm w-full min-w-0">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Workshop & Office</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Ramdev Steel Industries</p>
                  <p className="mt-0.5 text-xs text-slate-500 break-words">
                    Industrial Area, Jodhpur, Rajasthan - 342001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Jodhpur+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <FiArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Operating Hours Box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 text-xs shadow-sm w-full min-w-0">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <FiClock className="h-4 w-4 text-orange-600" />
                <span>Workshop & Site Visit Hours:</span>
              </div>
              <div className="mt-2 flex justify-between text-slate-600 gap-2">
                <span>Monday - Saturday:</span>
                <span className="font-semibold text-slate-900 shrink-0">9:00 AM - 8:00 PM</span>
              </div>
              <div className="mt-1 flex justify-between text-slate-600 gap-2">
                <span>Sunday:</span>
                <span className="font-semibold text-orange-700 shrink-0">On Prior Appointment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quotation Form */}
          <div className="lg:col-span-7 w-full min-w-0 max-w-full">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-4 xs:p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 w-full min-w-0 max-w-full overflow-hidden">

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
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-700 active:scale-[0.98]"
                      >
                        <FiSend className="h-3.5 w-3.5" />
                        <span>Submit Enquiry Online</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendWhatsAppDirect}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#20ba59] active:scale-[0.98]"
                      >
                        <FaWhatsapp className="h-4 w-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                  </form>
                </>
              ) : (
                /* Success Feedback */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <FiCheckCircle className="h-8 w-8" />
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
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#20ba59] transition"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      <span>Open in WhatsApp for Faster Response</span>
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