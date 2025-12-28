import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHideIndicator(true);
    };

    window.addEventListener("scroll", onScroll, { once: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#fcf7ee] min-h-[100svh] relative overflow-x-hidden">
      {/* Main hero container */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 min-h-[100svh] flex items-center">
        <div
          className="
            w-full max-w-3xl mx-auto text-center
            opacity-0 translate-y-4
            animate-[fadeIn_0.6s_ease-out_forwards]
            motion-reduce:opacity-100
            motion-reduce:translate-y-0
          "
        >
          {/* Category / Label */}
          <div className="inline-block mb-8 sm:mb-10 border border-[#025559]/40 px-5 py-2 text-[10px] tracking-[0.3em] uppercase text-[#252525]">
            Architecture & Interiors
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#252525] mb-6 sm:mb-8">
            Designing Spaces
            <br />
            With Purpose & Precision
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#585858] leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            We create refined residential and commercial environments that
            balance timeless aesthetics with functional clarity, crafted for
            modern living.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto min-h-[44px] bg-[#025559] text-[#fcf7ee] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#252525] transition-colors inline-flex items-center justify-center"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-[44px] border border-[#025559] text-[#252525] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#025559]/10 transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — locked to safe viewport zone */}
      {!hideIndicator && (
        <div
          className="
            fixed inset-x-0
            bottom-[max(1.25rem,env(safe-area-inset-bottom))]
            flex justify-center
            md:hidden
            pointer-events-none
            motion-reduce:hidden
          "
        >
          <div
            className="
              relative w-6 h-6
              animate-[arrowHint_1.5s_ease-in-out_infinite]
            "
          >
            <span className="absolute left-1/2 top-0 w-[1px] h-3 bg-[#025559]/40 rotate-45 origin-bottom" />
            <span className="absolute left-1/2 top-0 w-[1px] h-3 bg-[#025559]/40 -rotate-45 origin-bottom" />
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes arrowHint {
            0% { opacity: 0; transform: translateY(0); }
            50% { opacity: 1; }
            100% { opacity: 0; transform: translateY(8px); }
          }
        `}
      </style>
    </section>
  );
}
