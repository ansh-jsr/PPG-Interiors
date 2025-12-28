import {
  Hammer,
  Wind,
  Paintbrush,
  Sparkles,
  LayoutGrid,
  Zap,
  Droplet,
  Palette,
  Wrench,
} from "lucide-react";
import {Link} from "react-router-dom";

/* -----------------------------
   DATA
-------------------------------- */
const services = [
  {
    icon: Paintbrush,
    title: "Wallpaper Fixing Works",
    description:
      "Expert installation of premium wallpapers with precision and attention to detail, ensuring seamless patterns and flawless finishes.",
    details: [
      "Surface preparation and priming for optimal adhesion",
      "Pattern matching and alignment for continuous designs",
      "Installation of vinyl, fabric, and specialty wallpapers",
      "Removal and replacement of existing wallcoverings",
      "Custom wallpaper solutions for commercial and residential spaces",
    ],
    image: "wallpaper.webp",
  },
  {
    icon: Wind,
    title: "Air-conditioning, Ventilation & Air Filtration Systems",
    description:
      "Complete installation and maintenance of HVAC systems, ensuring optimal air quality and climate control for your space.",
    details: [
      "Design and installation of central air conditioning systems",
      "Ventilation system setup for improved air circulation",
      "Advanced air filtration and purification solutions",
      "Preventive maintenance and system optimization",
      "Energy-efficient system upgrades and retrofitting",
    ],
    image: "airfiltration.webp",
  },
  {
    icon: Hammer,
    title: "Carpentry & Wood Flooring Works",
    description:
      "Custom carpentry solutions and professional wood flooring installation combining craftsmanship with modern techniques.",
    details: [
      "Hardwood and engineered flooring installation",
      "Custom built-in cabinetry and storage solutions",
      "Decorative trim, molding, and wainscoting",
      "Floor refinishing and restoration services",
    ],
    image: "carpentry.webp",
  },
  {
    icon: Sparkles,
    title: "Engraving & Ornamentation Works",
    description:
      "Bespoke decorative engraving and ornamental detailing for elegant, character-rich interiors.",
    details: [
      "Architectural molding and decorative plasterwork",
      "Custom engraving on metal, wood, and glass surfaces",
      "Gilding and metallic finishing applications",
      "Luxury detailing solutions",
    ],
    image: "engraving.webp",
  },
  {
    icon: LayoutGrid,
    title: "False Ceiling & Light Partitions Installation",
    description:
      "Sophisticated ceiling and partition systems that enhance aesthetics while optimizing spatial functionality.",
    details: [
      "Gypsum and suspended ceiling systems",
      "Integrated lighting and HVAC ceiling designs",
      "Glass and aluminum partition installations",
      "Decorative ceiling features and coffers",
    ],
    image: "/falseceiling.webp",
  },


  {
    icon: Palette,
    title: "Decoration Design & Implementation",
    description:
      "Comprehensive interior decoration services from concept to completion, creating cohesive and inspiring environments.",
    details: [
      "Complete interior design consultation and planning",
      "Color scheme development and material selection",
      "Furniture layout and space optimization",
      "Custom window treatments and soft furnishings",
      "Project management from design to final installation",
    ],
    image: "decorative.webp",
  },
  {
    icon: LayoutGrid,
    title: "Floor & Wall Tiling Works",
    description:
      "Professional tiling services with meticulous attention to alignment, spacing, and finish for residential and commercial projects.",
    details: [
      "Ceramic, porcelain, and natural stone installation",
      "Mosaic and decorative tile design work",
      "Waterproofing and substrate preparation",
      "Bathroom and kitchen tile installations",
      "Large format tile and rectified installations",
    ],
    image: "tiling.webp",
  },
];

/* -----------------------------
   PAGE
-------------------------------- */
export default function Services() {
  return (
    <main className="min-h-screen bg-[#fcf7ee] text-[#252525]">
      {/* HERO */}
      <section className="border-b border-[#025559]/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#025559] mb-5">
            Our Services
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[64px] leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Craftsmanship <br />
            <span className="text-[#025559]">Refined</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#252525]/70 leading-relaxed max-w-2xl">
            PPG Design LLC delivers excellence across all facets of interior
            design and construction, combining technical expertise with an
            unwavering commitment to aesthetic perfection.
          </p>
        </div>
      </section>

      {/* INTERIOR FIT-OUT HEADER */}
      <section className="pt-20 sm:pt-24">
        <SectionHeader
          icon={Palette}
          title="Interior Fit-Out Services"
          description="Our comprehensive interior fit-out services transform spaces with meticulous attention to detail and craftsmanship. From initial design to final installation, we deliver exceptional results that blend functionality with aesthetic excellence."
        />
      </section>

      {/* INTERIOR SERVICES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col lg:flex-row gap-8 lg:gap-10"
              >
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-white border border-[#025559]/10 overflow-hidden transition-colors hover:border-[#025559]/30">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-56 sm:h-64 object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#fcf7ee] border border-[#025559]/20 flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-5 h-5 text-[#025559]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <h3
                        className="text-xl sm:text-2xl leading-tight mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#252525]/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="pl-0 sm:pl-[56px] space-y-2.5">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-[#252525]/60 leading-relaxed"
                      >
                        <span className="text-[#025559] mt-1.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEP HEADER */}
      <section className="pt-20 sm:pt-24 border-t border-[#025559]/10">
        <SectionHeader
          icon={Wrench}
          title="MEP Services"
          description="Our Mechanical, Electrical, and Plumbing services ensure comprehensive building systems integration. We provide end-to-end solutions for complex infrastructure requirements, maintaining the highest standards of safety, efficiency, and reliability."
        />
      </section>

      {/* MEP SERVICES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
          <MEPBlock
            icon={Wrench}
            title="Mechanical Systems"
            image="mechanical.webp"
            points={[
              "HVAC system design, installation, and commissioning",
              "Ventilation and exhaust system solutions",
              "Climate control and building automation systems",
              "Energy-efficient upgrades and retrofitting",
              "Indoor air quality (IAQ) monitoring and air purification solutions",
            ]}
          />

          <MEPBlock
            icon={Zap}
            title="Electrical Systems"
            image="/electrical.webp"
            points={[
              "Electrical infrastructure design and installation",
              "Power distribution and load balancing",
              "Lighting design and control systems",
              "Emergency power and backup solutions",
              "Fire alarm and safety system integration",
            ]}
          />

          <MEPBlock
            icon={Droplet}
            title="Plumbing Systems"
            image="/plumbing.webp"
            points={[
              "Water supply and distribution networks",
              "Drainage and sewage system installation",
              "Sanitary fixtures and fittings",
              "Hot water and heater systems",
              "Fire sprinkler and suppression systems",
            ]}
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 sm:py-28 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-[48px] leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's Create Something Exceptional
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#252525]/70 mb-12">
            Partner with PPG Interior Design LLC to bring your vision to life with
            precision and artistry.
          </p>

          <Link to="/contact" className="inline-block bg-[#025559] text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#252525] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -----------------------------
   SECTION HEADER
-------------------------------- */
function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-[#268b84] flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>

        <div>
          <h2
            className="text-3xl sm:text-4xl mb-3 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#252525]/70 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   REUSABLE MEP BLOCK
-------------------------------- */
function MEPBlock({ icon: Icon, title, image, points }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="lg:w-80 flex-shrink-0">
        <div className="bg-white border border-[#025559]/10 overflow-hidden transition-colors hover:border-[#025559]/30">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-56 sm:h-64 object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-11 h-11 rounded-full bg-[#fcf7ee] border border-[#025559]/20 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-[#025559]" strokeWidth={1.5} />
          </div>

          <h3
            className="text-xl sm:text-2xl leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h3>
        </div>

        <ul className="pl-0 sm:pl-[56px] space-y-2.5">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm text-[#252525]/60 leading-relaxed"
            >
              <span className="text-[#025559] mt-1.5">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
