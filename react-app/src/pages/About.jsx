import {Link} from "react-router-dom";
export default function About() {
  const values = [
    {
      title: "Excellence",
      description:
        "Unwavering commitment to superior craftsmanship and attention to detail in every project we undertake.",
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge solutions and contemporary design methodologies to exceed expectations.",
    },
    {
      title: "Integrity",
      description:
        "Building lasting relationships through transparency, accountability, and professional excellence.",
    },
    {
      title: "Precision",
      description:
        "Meticulous planning and execution ensuring flawless delivery from concept to completion.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fcf7ee] px-6 sm:px-8 py-16">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-6 text-[2.5rem] sm:text-[3rem] font-medium tracking-[0.01em] text-[#252525] font-serif">
            About Us
          </h2>

          <div className="w-16 h-px mx-auto mb-8 bg-[#025559]" />

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-light leading-[1.8] tracking-[0.02em] text-[#3f3f3f]">
            Founded on principles of excellence and innovation, we are a distinguished firm
            specializing in interior fitout and MEP engineering. Our legacy is built upon
            transforming architectural visions into tangible masterpieces through precision
            engineering and refined design sensibility.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white mt-20 mb-16 p-10 sm:p-14 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-6 text-[1.75rem] sm:text-[2rem] font-medium tracking-[0.02em] text-[#252525] font-serif">
              Our Philosophy
            </h3>

            <p className="mb-6 text-sm sm:text-base font-light leading-[1.8] tracking-[0.01em] text-[#585858]">
              We believe that exceptional spaces are born from the marriage of aesthetic
              sophistication and technical mastery. Every project represents an opportunity
              to elevate standards, challenge conventions, and deliver environments that
              inspire both function and contemplation.
            </p>

            <p className="text-sm sm:text-base font-light leading-[1.8] tracking-[0.01em] text-[#585858]">
              Our multidisciplinary approach integrates architectural understanding with
              engineering precision, ensuring seamless execution from initial concept through
              final delivery. We maintain an unwavering focus on quality, sustainability,
              and timeless design principles.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto space-y-1 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white py-8 px-10 sm:px-12 border-l border-[#025559] transition-all duration-300 hover:px-14 sm:hover:px-16"
            >
              <h3 className="mb-3 text-[1.5rem] sm:text-[1.75rem] font-medium tracking-[0.05em] text-[#252525] font-serif">
                {value.title}
              </h3>

              <p className="text-[0.9rem] sm:text-[0.95rem] font-light leading-[1.7] tracking-[0.01em] text-[#585858]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <Link to="/contact" className="inline-block bg-[#025559] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#252525] transition-colors">
            Get In Touch
          </Link>
        </div>

      </div>
    </section>
  );
}
