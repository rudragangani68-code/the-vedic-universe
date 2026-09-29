import React from 'react';
import brandPhilosophyImg from '../assets/images/brand_philosophy.jpg';

export const BrandIntro: React.FC = () => {
  return (
    <section
      id="brand-intro"
      aria-label="The Vedic Universe Philosophy"
      className="
        min-h-0
        h-auto
        sm:min-h-0
        sm:h-auto
        flex
        items-center
        bg-[#F3E6D0]
        border-b
        border-[#A9783F]/25
        overflow-hidden
      "
    >
      <div
        className="
          w-full
          h-auto
          sm:h-auto
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-5
          sm:py-10
          lg:py-12
          flex
          items-center
        "
      >

        {/* =========================================================
            DESKTOP + TABLET
            Content-driven height
        ========================================================= */}
        <div className="hidden sm:grid w-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[5/4] lg:aspect-[4/3] overflow-hidden bg-[#E8D6BC]">

              <img
                src={brandPhilosophyImg}
                alt="Traditional Ayurvedic botanicals and natural materials representing The Vedic Universe philosophy"
                className="w-full h-full object-cover"
                loading="lazy"
              />

            </div>
          </div>


          {/* Philosophy Story */}
          <div className="lg:col-span-7">

            <h2 className="font-serif text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px] text-[#4A1710] font-normal leading-[1.06] tracking-[-0.02em] mb-2">
              Some wisdom
              <br />
              <span className="italic">
                should not be lost.
              </span>
            </h2>

            <p className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#705B4B] font-medium mb-5">
              The Vedic Universe Philosophy
            </p>


            <div className="space-y-3.5 max-w-2xl">

              {/* Paragraph 1 */}
              <p className="font-sans text-[13px] sm:text-[14px] text-[#4A1710] leading-[1.7] font-light">
                India has carried generations of knowledge about plants, herbs,
                preparation and everyday living. Yet as modern life moves
                further away from these traditions, much of that knowledge can
                become distant, unfamiliar or difficult to understand.
              </p>

              {/* Paragraph 2 */}
              <p className="font-sans text-[13px] sm:text-[14px] text-[#4A1710] leading-[1.7] font-light">
                The Vedic Universe was created from a simple belief: traditional
                botanical knowledge deserves to remain accessible, meaningful
                and connected to everyday life. We look to the principles and
                traditions behind these botanicals and seek to present them
                with care, clarity and simplicity.
              </p>

              {/* Paragraph 3 */}
              <p className="font-sans text-[13px] sm:text-[14px] text-[#4A1710] leading-[1.7] font-light">
                This is not about making ancient knowledge complicated, nor
                about changing it simply to make it contemporary. It is about
                creating a thoughtful bridge between the wisdom of the past and
                the way people live today.
              </p>

            </div>


            {/* Closing Statement */}
            <div className="mt-5 pt-4 border-t border-[#A9783F]/30">

              <p className="font-serif italic text-base sm:text-lg text-[#4A1710] leading-relaxed">
                Preserve the wisdom.
                <br />
                Bring it closer to everyday life.
              </p>

            </div>

          </div>

        </div>


        {/* =========================================================
            MOBILE PHILOSOPHY
            Content-driven height
        ========================================================= */}
        <div className="sm:hidden w-full flex flex-col pt-5 pb-6">

          {/* =======================================================
              MOBILE IMAGE
              Full width
              No image label
          ======================================================= */}
          <div className="relative w-full h-[27.5vh] min-h-[175px] max-h-[225px] shrink-0 overflow-hidden bg-[#E8D6BC]">

            <img
              src={brandPhilosophyImg}
              alt="Traditional Ayurvedic botanicals and natural materials representing The Vedic Universe philosophy"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Subtle Editorial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1710]/15 via-transparent to-transparent pointer-events-none" />

          </div>


          {/* =======================================================
              MOBILE CONTENT
          ======================================================= */}
          <div className="w-full flex flex-col pt-5">

            {/* Main Heading */}
            <h2 className="font-serif text-[35px] leading-[1.02] text-[#4A1710] font-normal tracking-[-0.025em]">
              Some wisdom
              <br />
              <span className="italic">
                should not be lost.
              </span>
            </h2>


            {/* Section Context */}
            <p className="text-[8px] tracking-[0.22em] uppercase text-[#705B4B] font-medium mt-2.5 mb-3">
              The Vedic Universe Philosophy
            </p>


            {/* =====================================================
                STORY
                Full text in normal document flow
            ===================================================== */}
            <div className="w-full">

              <div className="space-y-3">

                {/* Paragraph 1 */}
                <p className="font-sans text-[12px] text-[#4A1710] leading-[1.58] font-light">
                  India has carried generations of knowledge about plants, herbs,
                  preparation and everyday living. Yet as modern life moves
                  further away from these traditions, much of that knowledge can
                  become distant, unfamiliar or difficult to understand.
                </p>

                {/* Paragraph 2 */}
                <p className="font-sans text-[12px] text-[#4A1710] leading-[1.58] font-light">
                  The Vedic Universe was created from a simple belief:
                  traditional botanical knowledge deserves to remain accessible,
                  meaningful and connected to everyday life. We look to the
                  principles and traditions behind these botanicals and seek to
                  present them with care, clarity and simplicity.
                </p>

                {/* Paragraph 3 */}
                <p className="font-sans text-[12px] text-[#4A1710] leading-[1.58] font-light">
                  This is not about making ancient knowledge complicated, nor
                  about changing it simply to make it contemporary. It is about
                  creating a thoughtful bridge between the wisdom of the past
                  and the way people live today.
                </p>

              </div>

            </div>


            {/* =====================================================
                CLOSING STATEMENT
                Appropriate spacing
            ===================================================== */}
            <div className="mt-5 pt-3 border-t border-[#A9783F]/30 shrink-0">

              <p className="font-serif italic text-[16px] text-[#4A1710] leading-[1.3]">
                Preserve the wisdom.
                <br />
                Bring it closer to everyday life.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};