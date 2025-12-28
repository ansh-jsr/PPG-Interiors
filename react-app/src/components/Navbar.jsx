import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="relative sticky top-0 z-50 w-full bg-[#fcf7ee]/80 border-b border-[#025559]/20">

      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Brand */}
        <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="h-full flex items-center"
>
  <img
    src="/BestDesign_logoWBG.png"
    alt="PPG Interiors"
    className="h-full max-h-full object-contain"
  />
</Link>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="
            md:hidden relative w-8 h-8 flex items-center justify-center
            focus:outline-none
            active:scale-[0.97]
            transition-transform
            motion-reduce:transition-none
          "
        >
          <span
            className={`
              absolute h-[1px] w-6 bg-[#252525]
              transition-transform duration-300
              motion-reduce:transition-none
              ${open ? "rotate-45" : "-translate-y-2"}
            `}
          />
          <span
            className={`
              absolute h-[1px] w-6 bg-[#252525]
              transition-opacity duration-300
              motion-reduce:transition-none
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute h-[1px] w-6 bg-[#252525]
              transition-transform duration-300
              motion-reduce:transition-none
              ${open ? "-rotate-45" : "translate-y-2"}
            `}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-[#252525]">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#025559] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#025559] transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#025559] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#025559] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-[#fcf7ee]
          border-t border-[#025559]/20
          shadow-sm
          z-40
          transform transition-all duration-300
          motion-reduce:transition-none
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col px-6 py-6 space-y-6 text-[11px] tracking-[0.3em] uppercase text-[#252525]">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setOpen(false);
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
