import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 bg-[#fcf7ee]">
      <div className="max-w-5xl w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[2.5rem] sm:text-[3rem] font-medium tracking-[0.01em] text-[#252525] font-serif">
            Crafting Excellence
          </h2>

          <div className="w-16 h-px mx-auto mb-8 bg-[#025559]" />
        </div>

        {/* Main Content */}
        <div className="bg-white p-10 sm:p-14 lg:p-16">
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 text-center text-base sm:text-[1.125rem] font-light leading-[1.9] tracking-[0.02em] text-[#252525] font-sans">
              We are a distinguished firm specializing in interior fitout and MEP engineering,
              where architectural vision meets technical mastery. Our approach combines refined
              aesthetic sensibility with engineering precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="mb-3 text-[1.4rem] sm:text-[1.5rem] font-medium tracking-[0.03em] text-[#252525] font-serif">
                  Our Expertise
                </h3>

                <p className="text-[0.9rem] sm:text-[0.95rem] font-light leading-[1.7] tracking-[0.01em] text-[#585858] font-sans">
                  Comprehensive solutions spanning commercial and residential spaces,
                  mechanical systems, electrical infrastructure, and plumbing integration—each
                  executed with meticulous attention to detail.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-[1.4rem] sm:text-[1.5rem] font-medium tracking-[0.03em] text-[#252525] font-serif">
                  Our Philosophy
                </h3>

                <p className="text-[0.9rem] sm:text-[0.95rem] font-light leading-[1.7] tracking-[0.01em] text-[#585858] font-sans">
                  Exceptional spaces emerge from the synthesis of form and function.
                  We deliver environments that embody sophistication, sustainability,
                  and timeless design principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/about"
            className="inline-block bg-[#025559] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#252525] transition-colors font-sans"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
