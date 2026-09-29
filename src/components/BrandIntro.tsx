import React from 'react';
import brandPhilosophyImg from '../assets/images/brand_philosophy.jpg';

export const BrandIntro: React.FC = () => {
  return (
    <section
      id="brand-intro"
      aria-label="The Vedic Universe Philosophy"
      className="min-h-[calc(100vh-42px)] h-[calc(100vh-42px)] flex items-center bg-[#F3E6D0] border-b border-[#A9783F]/25 overflow-hidden"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-7 sm:py-9 lg:py-10">

        {/* =====================================================
            DESKTOP
        ===================================================== */}
        <div className="hidden sm:flex w-full h-full items-center">
          <article className="w-full max-w-6xl mx-auto">

            {/* =================================================
                TOP EDITORIAL COMPOSITION
            ================================================= */}
            <div className="grid grid-cols-[42%_1fr] gap-10 lg:gap-12 items-start">

              {/* IMAGE — LEFT */}
              <figure className="w-full">
                <div
                  className="
                    relative
                    w-full
                    aspect-[4/3]
                    overflow-hidden
                    bg-[#E8D6BC]
                    border
                    border-[#A9783F]/30
                  "
                >
                  <img
                    src={brandPhilosophyImg}
                    alt="Ancient botanical preparation instructions and traditional Ayurvedic preparation methods"
                    referrerPolicy="no-referrer"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-[112%]
                      object-cover
                      object-top
                    "
                    loading="lazy"
                  />
                </div>
              </figure>


              {/* TEXT — RIGHT */}
              <div className="pt-1">

                {/* Heading */}
                <header className="mb-7">

                  <h2 className="font-serif text-[42px] md:text-[48px] lg:text-[54px] xl:text-[58px] text-[#4A1710] font-normal leading-[0.98] tracking-[-0.025em]">
                    Some wisdom
                    <br />
                    <span className="italic">
                      should not be lost.
                    </span>
                  </h2>

                  <p className="text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#705B4B] font-medium mt-4">
                    The Vedic Universe Philosophy
                  </p>

                </header>


                {/* Paragraph 1 */}
                <p className="font-sans text-[13px] lg:text-[14px] text-[#4A1710] leading-[1.7] font-light mb-5">
                  India has carried generations of knowledge about plants, herbs,
                  preparation and everyday living. Yet as modern life moves
                  further away from these traditions, much of that knowledge can
                  become distant, unfamiliar or difficult to understand.
                </p>


                {/* Paragraph 2 */}
                <p className="font-sans text-[13px] lg:text-[14px] text-[#4A1710] leading-[1.7] font-light">
                  The Vedic Universe was created from a simple belief: traditional
                  botanical knowledge deserves to remain accessible, meaningful
                  and connected to everyday life. We look to the principles and
                  traditions behind these botanicals and seek to present them
                  with care, clarity and simplicity.
                </p>

              </div>

            </div>


            {/* =================================================
                FULL-WIDTH CONTINUATION
            ================================================= */}
            <div className="mt-7 lg:mt-8">

              <p className="font-sans text-[13px] lg:text-[14px] text-[#4A1710] leading-[1.7] font-light max-w-5xl">
                This is not about making ancient knowledge complicated, nor
                about changing it simply to make it contemporary. It is about
                creating a thoughtful bridge between the wisdom of the past and
                the way people live today.
              </p>

            </div>


            {/* =================================================
                CLOSING STATEMENT
            ================================================= */}
            <div className="mt-6 lg:mt-7">

              <div className="border-t border-[#A9783F]/30 pt-4">

                <p className="font-serif italic text-[18px] lg:text-[20px] text-[#4A1710] leading-[1.35]">
                  Preserve the wisdom.
                  <br />
                  Bring it closer to everyday life.
                </p>

              </div>

            </div>

          </article>
        </div>


        {/* =====================================================
            MOBILE — LOCKED / UNCHANGED
        ===================================================== */}
        <div className="sm:hidden w-full h-full flex flex-col">

          <article className="w-full h-full flex flex-col">

            <header className="shrink-0 pt-2 mb-4">

              <h2 className="font-serif text-[34px] leading-[1.02] text-[#4A1710] font-normal tracking-[-0.025em]">
                Some wisdom
                <br />
                <span className="italic">
                  should not be lost.
                </span>
              </h2>

              <p className="text-[8px] tracking-[0.22em] uppercase text-[#705B4B] font-medium mt-3">
                The Vedic Universe Philosophy
              </p>

            </header>


            <div className="flex-1 min-h-0 overflow-y-auto pr-1">

              <div className="text-[#4A1710]">

                <figure
                  className="
                    float-right
                    w-[48%]
                    ml-4
                    mb-3
                    mt-1
                  "
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8D6BC] border border-[#A9783F]/30">

                    <img
                      src={brandPhilosophyImg}
                      alt="Ancient botanical preparation instructions and traditional Ayurvedic preparation methods"
                      referrerPolicy="no-referrer"
                      className="
                        absolute
                        inset-0
                        w-full
                        h-[112%]
                        object-cover
                        object-top
                      "
                      loading="lazy"
                    />

                  </div>
                </figure>


                <p className="font-sans text-[11px] text-[#4A1710] leading-[1.58] font-light mb-3">
                  India has carried generations of knowledge about plants, herbs,
                  preparation and everyday living. Yet as modern life moves
                  further away from these traditions, much of that knowledge can
                  become distant, unfamiliar or difficult to understand.
                </p>


                <p className="font-sans text-[11px] text-[#4A1710] leading-[1.58] font-light mb-3">
                  The Vedic Universe was created from a simple belief: traditional
                  botanical knowledge deserves to remain accessible, meaningful
                  and connected to everyday life. We look to the principles and
                  traditions behind these botanicals and seek to present them
                  with care, clarity and simplicity.
                </p>


                <p className="font-sans text-[11px] text-[#4A1710] leading-[1.58] font-light">
                  This is not about making ancient knowledge complicated, nor
                  about changing it simply to make it contemporary. It is about
                  creating a thoughtful bridge between the wisdom of the past and
                  the way people live today.
                </p>


                <div className="clear-both pt-4 pb-2">

                  <div className="border-t border-[#A9783F]/30 pt-3">

                    <p className="font-serif italic text-[15px] text-[#4A1710] leading-[1.3]">
                      Preserve the wisdom.
                      <br />
                      Bring it closer to everyday life.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
};