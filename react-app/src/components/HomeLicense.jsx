export default function HomeLicense() {
  return (
    <section className="bg-[#fcf7ee] text-[#252525]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-px h-10 bg-[#025559]" />
            <span className="text-xs tracking-[0.25em] uppercase text-[#585858]">
              Official Documentation
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl">
            License
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div>
            <h3 className="font-serif text-xl mb-6">
              Registered Commercial License
            </h3>

            <p className="text-[#585858] leading-relaxed max-w-md mb-8">
              Our practice operates under a valid and officially issued
              commercial license, ensuring full compliance with
              regulatory standards and professional requirements.
            </p>

            {/* Subtle metadata list */}
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-[#252525]">License Category:</span>{" "}
                <span className="text-[#585858]">Department of Economic Development</span>
              </p>
              <p>
                <span className="text-[#252525]">Business Activity:</span>{" "}
                <span className="text-[#585858]">Interior Design & MEP Services</span>
              </p>
              <p>
                <span className="text-[#252525]">Status:</span>{" "}
                <span className="text-[#585858]">Active & Valid</span>
              </p>
            </div>
          </div>

          {/* License Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-4 border border-[#025559]/20">
              <img
                src="/License.webp"
                alt="Company Commercial License"
                className="max-w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
