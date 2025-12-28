import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f3ebdc] px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Brand / Studio Name */}
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-[#585858]">
            Interior Design Studio
          </p>
          <h3 className="mt-3 text-lg md:text-xl font-serif text-[#252525]">
            PPG Interior Design LLC
          </h3>
        </div>

        {/* Business Info */}
        <div className="space-y-2 text-sm text-[#3f3f3f]">
          <p>Residential & Commercial Interiors</p>
          <p>Space Planning · Turnkey Projects · Custom Design</p>
          <p className="text-xs text-[#585858]">
            Based in Dubai 
            {/* · Working Pan-India */}
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="flex justify-center">
          <span className="h-px w-16 bg-[#025559]/40" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#585858]">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
