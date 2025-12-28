import { Link } from "react-router-dom";
export default function HomeServices() {
  const services = [
    {
      title: "Interior Fitout",
      description:
        "Bespoke commercial and residential spaces crafted with precision and attention to detail.",
    },
    {
      title: "MEP Engineering",
      description:
        "Comprehensive mechanical, electrical, and plumbing solutions for modern infrastructure.",
    },
    {
      title: "Project Management",
      description:
        "End-to-end oversight ensuring timely delivery and exceptional quality standards.",
    },
    {
      title: "Design Consultation",
      description:
        "Strategic planning and conceptual design for spaces that inspire and function seamlessly.",
    },
  ];

  return (
    <section className="bg-[#fcf7ee] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-20">
          <h2 className="mb-6 text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] font-medium tracking-[0.01em] text-[#252525] font-serif">
            Our Services
          </h2>

          <div className="w-16 h-px mx-auto mb-8 bg-[#025559]" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-light leading-[1.8] tracking-[0.02em] text-[#3f3f3f]">
            We specialize in transforming visions into reality through meticulous
            craftsmanship and engineering excellence. Our integrated approach
            combines aesthetic sophistication with technical precision,
            delivering spaces that embody both form and function.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                p-8 sm:p-10 lg:p-12
                border-[#025559]

                /* Mobile: divider between all stacked items */
                border-b last:border-b-0

                /* Tablet & Desktop: reset mobile borders */
                sm:border-b-0
                ${index % 2 === 0 ? "sm:border-r" : ""}
                ${index < services.length - 2 ? "sm:border-b" : ""}
              `}
            >
              <span className="block mb-4 text-sm tracking-[0.05em] text-[#025559] font-serif">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-3 text-[1.5rem] sm:text-[1.6rem] font-medium tracking-[0.02em] text-[#252525] font-serif">
                {service.title}
              </h3>

              <p className="text-[0.9rem] font-light leading-[1.7] tracking-[0.01em] text-[#585858]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <Link to="/services"
            // type="button"
            className="inline-block bg-[#025559] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#252525] transition-colors "
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
