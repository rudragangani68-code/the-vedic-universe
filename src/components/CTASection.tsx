import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenContact,
}) => {
  return (
    <section
      id="contact"
      aria-label="Contact The Vedic Universe"
      className="
        min-h-0
        sm:min-h-[calc(100vh-42px)]
        flex items-center
        bg-[#F8F5EE]
        border-b border-[#E8E0D2]
        text-center
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          mx-auto
          px-5 sm:px-8
          py-14 sm:py-0
        "
      >

        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-[1px] bg-[#A9783F]" />

          <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#705B4B] font-medium">
            Begin Your Journey
          </span>

          <span className="w-8 h-[1px] bg-[#A9783F]" />
        </div>


        {/* Main Heading */}
        <h2
          className="
            font-serif
            text-4xl sm:text-5xl md:text-6xl
            font-normal
            text-[#4A1710]
            tracking-tight
            leading-[1.05]
            mb-5
          "
        >
          Bring Tradition Into Everyday Life.
        </h2>


        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#A9783F] mx-auto mb-6" />


        {/* Introduction */}
        <p
          className="
            font-sans
            text-sm sm:text-base
            text-[#5A4638]
            font-light
            leading-relaxed
            max-w-xl
            mx-auto
          "
        >
          Whether you are discovering traditional botanicals for the first
          time, looking for more information about our products, or simply
          wish to learn more about The Vedic Universe, we would be glad to
          hear from you.
        </p>


        {/* Inquiry Block */}
        <div className="mt-9">

          <p className="font-serif text-xl sm:text-2xl text-[#4A1710]">
            Have a Question?
          </p>

          <p className="font-sans text-[11px] sm:text-xs text-[#705B4B] font-light mt-2">
            Send us your question, request, or enquiry directly.
          </p>

        </div>


        {/* Inquiry Button */}
        <button
          type="button"
          id="contact-inquiry-btn"
          onClick={onOpenContact}
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            mt-7
            px-9
            py-4
            bg-[#5A170E]
            hover:bg-[#42110B]
            text-[#FFF5E5]
            border border-[#5A170E]
            text-[10px] sm:text-[11px]
            tracking-[0.22em]
            uppercase
            font-medium
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <span>MAKE AN INQUIRY</span>

          <ArrowUpRight
            className="
              w-3.5 h-3.5
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </button>

      </div>
    </section>
  );
};