import React from 'react';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { BRAND_TAGLINE, CONTACT_INFO } from '../data/brand';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-[#4A1710] text-[#F3E6D0] border-t border-[#5A170E]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 sm:gap-10 lg:gap-14 py-12 sm:py-14">

          {/* =================================================
              BRAND
          ================================================= */}
          <div className="md:col-span-5 text-left">

            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase font-normal text-[#FFF5E5] leading-tight">
              The Vedic Universe
            </h3>

            <p className="font-serif italic text-sm sm:text-base text-[#A9783F] leading-relaxed max-w-sm mt-4">
              &ldquo;{BRAND_TAGLINE}&rdquo;
            </p>

            <p className="font-sans text-[11px] sm:text-xs text-[#DDB477] leading-[1.65] max-w-sm font-light mt-4">
              A modern Indian Ayurvedic wellness brand inspired by traditional
              Indian knowledge and designed for contemporary lifestyles.
            </p>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div className="md:col-span-3 text-left">

            <h4 className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#DDB477] font-medium mb-5">
              Navigation
            </h4>

            <ul className="space-y-2.5 text-[12px] sm:text-xs text-[#F3E6D0] font-light">

              <li>
                <a
                  href="#home"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#brand-intro"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  Philosophy
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  Our Products
                </a>
              </li>

              <li>
                <a
                  href="#ayurveda"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  Ayurveda
                </a>
              </li>

              <li>
                <a
                  href="#values"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  Why Us
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  About the Founder
                </a>
              </li>

              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#FFF5E5] transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Enquiries
                </button>
              </li>

            </ul>

          </div>


          {/* =================================================
              CONTACT & SOCIAL
          ================================================= */}
          <div className="md:col-span-4 text-left">

            <h4 className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#DDB477] font-medium mb-5">
              Contact &amp; Inquiries
            </h4>

            <ul className="space-y-3 text-[12px] sm:text-xs text-[#F3E6D0] font-light">

              {/* Email */}
              <li className="flex items-start gap-2.5">

                <Mail className="w-4 h-4 text-[#A9783F] shrink-0 mt-0.5 stroke-[1.5]" />

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FFF5E5] transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>

              </li>


              {/* Phone */}
              <li className="flex items-start gap-2.5">

                <Phone className="w-4 h-4 text-[#A9783F] shrink-0 mt-0.5 stroke-[1.5]" />

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#FFF5E5] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>

              </li>


              {/* Address */}
              <li className="flex items-start gap-2.5">

                <MapPin className="w-4 h-4 text-[#A9783F] shrink-0 mt-0.5 stroke-[1.5]" />

                <span className="leading-[1.55]">
                  {CONTACT_INFO.address}
                </span>

              </li>

            </ul>


            {/* Social */}
            <div className="mt-5">

              <span className="text-[10px] tracking-[0.2em] uppercase text-[#DDB477] font-medium block mb-2.5">
                Social
              </span>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] sm:text-xs text-[#F3E6D0] hover:text-[#FFF5E5] transition-colors group"
              >

                <Instagram className="w-4 h-4 text-[#A9783F] group-hover:scale-110 transition-transform" />

                <span>
                  Instagram ({CONTACT_INFO.instagramHandle})
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="border-t border-[#705B4B]/40 py-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] text-[#DDB477] font-light">

            <div>
              © 2026 The Vedic Universe. All Rights Reserved.
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 text-[#F3E6D0] hover:text-[#FFF5E5] transition-colors"
            >
              <span>Back to Top</span>

              <ArrowUp className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};