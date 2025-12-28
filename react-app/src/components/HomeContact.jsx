import React from "react";

const HomeContact = () => {
  return (
    <section className="bg-[#fcf7ee] text-[#252525]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#025559]" />
            <span className="text-xs tracking-widest uppercase text-[#025559]">
              Get in touch
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-4">
            Start Your Project
          </h2>

          <p className="text-sm sm:text-base text-[#585858] leading-relaxed">
            Let’s discuss how thoughtful design and careful execution can bring
            your ideas to life.
          </p>
        </div>

        {/* White Form Box */}
        <div className="mt-20">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="max-w-4xl mx-auto bg-white border border-[#025559]/20 px-8 sm:px-12 lg:px-16 py-12 space-y-10"
          >
            {/* Netlify required hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#025559] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent border-b border-[#025559]/40 py-2 text-sm focus:outline-none focus:border-[#025559]"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-[#025559] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent border-b border-[#025559]/40 py-2 text-sm focus:outline-none focus:border-[#025559]"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#025559] mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                className="w-full bg-transparent border-b border-[#025559]/40 py-2 text-sm focus:outline-none focus:border-[#025559]"
              >
                <option>Architecture</option>
                <option>Interior Design</option>
                <option>Consultation</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#025559] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                required
                className="w-full bg-transparent border-b border-[#025559]/40 py-2 text-sm resize-none focus:outline-none focus:border-[#025559]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="inline-block bg-[#025559] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#252525] transition-colors"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          {/* Contact Info — MOVED & ALIGNED */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <p className="text-xs tracking-widest uppercase text-[#025559] mb-4">
                  Location
                </p>
                <p className="text-sm leading-relaxed text-[#3f3f3f]">
                  Opal Tower 1708 Business Bay <br />
                  Dubai
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xs tracking-widest uppercase text-[#025559] mb-4">
                  Email
                </p>
                <p className="text-sm text-[#3f3f3f] leading-relaxed">
                  info@ppginteriors.com
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xs tracking-widest uppercase text-[#025559] mb-4">
                  Phone
                </p>
                <p className="text-sm text-[#3f3f3f] leading-relaxed">
                  +971 52 328 3686
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
