import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactViewProps {
  prefilledProduct?: string;
  prefilledInquiryType?: string;
  onSuccessInquirySubmit?: () => void;
}

export default function ContactView({
  prefilledProduct = '',
  prefilledInquiryType = 'Buy Product'
}: ContactViewProps) {
  // Setup form states
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    whatsApp: '',
    email: '',
    city: '',
    interestedProduct: prefilledProduct,
    inquiryType: (prefilledInquiryType as any) || 'Buy Product',
    message: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validateForm = (): boolean => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone Number is required.';
    if (!formData.city.trim()) tempErrors.city = 'City / Area is required.';
    
    // Check email pattern
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format (e.g. name@host.com).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API posting
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        whatsApp: '',
        email: '',
        city: '',
        interestedProduct: '',
        inquiryType: 'Buy Product',
        message: '',
        preferredContact: 'WhatsApp'
      });
    }, 1200);
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* SECTION 1: HEADER */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Inquiry Desk</span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl text-[#0a192f]">Connect with Our Branch Manager</h1>
          <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
            Have questions about catalog pricing, installation support, or authorized parts? Fill in our quick inquiry portal.
          </p>
        </div>
      </section>

      {/* SECTION 2: MAP / FORM ADVISORY DOUBLE GRIDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Side: Branch Office detail columns */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Branch Headquarters</span>
              <h2 className="font-serif font-light text-2xl text-[#0a192f] tracking-tight">Direct Address Details</h2>
              <p className="text-xs sm:text-sm text-[#0a192f]/70 font-light leading-relaxed">
                Our main showroom and local product inventory coordinates are located in Illinois, serving Chicago and surrounding metropolitan zones. Feel free to arrange a drop-in with Jonathan.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[#0a192f]/80">
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#0a192f]/5 shadow-sm">
                <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0a192f] font-serif font-semibold text-sm mb-1">Distributor HQ Office</strong>
                  1200 Elite Kitchen Way, Suite 400<br />
                  Chicago, IL 60611
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#0a192f]/5 shadow-sm">
                <Phone className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0a192f] font-serif font-semibold text-sm mb-1">Direct Office Desk</strong>
                  <a href="tel:+15552345678" className="hover:text-[#c5a059] transition-colors font-mono hover:underline">
                    (555) 234-5678
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#0a192f]/5 shadow-sm">
                <Mail className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0a192f] font-serif font-semibold text-sm mb-1">Email Contact</strong>
                  <a href="mailto:branch-manager@classicaregal-dist.com" className="hover:text-[#c5a059] transition-colors hover:underline">
                    branch-manager@classicaregal-dist.com
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Clean Blueprint Map representation */}
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-wider font-sans text-[#0a192f]/50 block font-bold mb-2">Showroom Map Coordinates</span>
              <div className="rounded-2xl border border-[#0a192f]/5 bg-[#f1f0ec] relative overflow-hidden aspect-video shadow-inner flex items-center justify-center p-6">
                {/* Clean Blueprint vector grids representing high craft UI */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative text-center space-y-2 z-10 p-4 rounded-xl bg-white/95 border border-[#0a192f]/10 text-[#0a192f] max-w-[220px]">
                  <h4 className="font-serif font-bold text-xs text-[#0a192f]">Chicago Showroom</h4>
                  <p className="text-[10px] text-[#0a192f]/60 font-light">Suite 400 close to Magnificent Mile district</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] flex items-center justify-center gap-1 hover:underline mt-1"
                  >
                    View Map Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Working Inquiry Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#0a192f]/5 p-6 md:p-8 shadow-sm">
            <h3 className="font-serif font-light text-lg md:text-xl text-[#0a192f] tracking-tight mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#c5a059]" /> Branch Request Portal
            </h3>
            <p className="text-[#0a192f]/60 text-xs sm:text-sm font-light mb-8">
              Fill in your contact preferences and interested categories. Our neighborhood representative will reach out in under 24 hours.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-2xl bg-[#f1f0ec] border border-[#0a192f]/10 text-center space-y-4 my-10"
                >
                  <CheckCircle2 className="w-14 h-14 text-[#4f772d] mx-auto" />
                  <h4 className="font-serif text-lg text-[#0a192f]">Success! Your Inquiry Has Been Transferred</h4>
                  <p className="text-[#0a192f]/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                    Thank you, your application details have been received securely. Branch Manager Jonathan Harris or an authorized kitchen representative will ring you shortly to coordinate your request.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 bg-[#0a192f] text-white hover:bg-opacity-90 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer"
                    >
                      Fill another Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-sans text-sm text-[#0a192f]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Beatrice Vance"
                        className={`w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border rounded-xl focus:ring-2 outline-none transition-all ${
                          errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-[#0a192f]/10 focus:ring-[#0a192f]/5 focus:border-[#0a192f]'
                        }`}
                        id="form-full-name"
                      />
                      {errors.fullName && (
                        <p className="text-red-600 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Beatrice Vance"
                        className={`w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border rounded-xl focus:ring-2 outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#0a192f]/10 focus:ring-[#0a192f]/5 focus:border-[#0a192f]'
                        }`}
                        id="form-email"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone number */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={`w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border rounded-xl focus:ring-2 outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-[#0a192f]/10 focus:ring-[#0a192f]/5 focus:border-[#0a192f]'
                        }`}
                        id="form-phone"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.phone}</p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        WhatsApp Number <span className="text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsApp"
                        value={formData.whatsApp}
                        onChange={handleInputChange}
                        placeholder="WhatsApp Number"
                        className="w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border border-[#0a192f]/10 rounded-xl focus:ring-2 focus:ring-[#0a192f]/5 focus:border-[#0a192f] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* City / Service location area */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        City / Area <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className={`w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border rounded-xl focus:ring-2 outline-none transition-all ${
                          errors.city ? 'border-red-400 focus:ring-red-200' : 'border-[#0a192f]/10 focus:ring-[#0a192f]/5 focus:border-[#0a192f]'
                        }`}
                        id="form-city"
                      />
                      {errors.city && (
                        <p className="text-red-600 text-xs flex items-center gap-1 mt-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.city}</p>
                      )}
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2 text-left">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                        Inquiry Category Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border border-[#0a192f]/10 rounded-xl focus:ring-2 focus:ring-[#0a192f]/5 focus:border-[#0a192f] outline-none font-sans text-sm"
                        id="form-inquiry-type"
                      >
                        <option value="Buy Product">Buy Cookware System</option>
                        <option value="Product Demonstration">Private Kitchen Cooking Demo</option>
                        <option value="Water Filter Inquiry">Club WaterSystem Installation</option>
                        <option value="Replacement Parts">Authorized Parts & Gaskets</option>
                        <option value="Business Opportunity">Business Distributorship Opportunities</option>
                        <option value="After-Sales Support">Warranty & Customer Support Help</option>
                      </select>
                    </div>
                  </div>

                  {/* Interested Product (Input pre-fillable) */}
                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                      Product of Interest <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="interestedProduct"
                      value={formData.interestedProduct}
                      onChange={handleInputChange}
                      placeholder="Product of Interest"
                      className="w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border border-[#0a192f]/10 rounded-xl focus:ring-2 focus:ring-[#0a192f]/5 focus:border-[#0a192f] outline-none transition-all"
                      id="form-interested-product"
                    />
                  </div>

                  {/* Message box */}
                  <div className="space-y-2 text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                      Message / Custom Request Notes
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you are looking for..."
                      className="w-full p-3.5 bg-[#f1f0ec]/70 focus:bg-white border border-[#0a192f]/10 rounded-xl focus:ring-2 focus:ring-[#0a192f]/5 focus:border-[#0a192f] outline-none transition-all font-sans"
                      id="form-message"
                    ></textarea>
                  </div>

                  {/* Preferred contact channel radio pills */}
                  <div className="space-y-3 text-left">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/60">
                      Preferred Response Medium
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['WhatsApp', 'Phone', 'Email'].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 px-5 py-2.5 border border-[#0a192f]/10 hover:bg-[#faf9f6] rounded-full cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleInputChange}
                            className="bg-white border-neutral-300 text-[#0a192f] focus:ring-[#0a192f] w-3.5 h-3.5"
                          />
                          <span className="text-xs font-bold uppercase tracking-widest text-[#0a192f]/70">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-4 text-left">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#0a192f] hover:bg-opacity-90 text-white font-sans font-bold rounded-full text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95 disabled:opacity-50"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>Processing Transfer...</>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" /> Send Secure Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
