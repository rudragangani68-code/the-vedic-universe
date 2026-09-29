import React from 'react';
import { BRAND_STORY_DATA, BRAND_TAGLINE } from '../data/brand';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About the Founder"
      className="min-h-[calc(100vh-42px)] h-[calc(100vh-42px)] flex items-center bg-[#F3E6D0] border-b border-[#A9783F]/25 overflow-hidden"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-8">

        {/* =====================================================
            DESKTOP
        ===================================================== */}
        <div className="hidden sm:flex w-full h-full items-center">

          <article className="w-full max-w-6xl mx-auto">

            {/* =================================================
                FOUNDER HEADING
            ================================================= */}
            <header className="mb-5">

              <h2 className="font-serif text-[42px] md:text-[48px] lg:text-[54px] xl:text-[58px] text-[#4A1710] font-normal leading-[0.98] tracking-[-0.025em]">
                {BRAND_STORY_DATA.heading}
              </h2>

              <p className="text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#705B4B] font-medium mt-3">
                {BRAND_STORY_DATA.subheading}
              </p>

            </header>


            {/* =================================================
                EDITORIAL STORY
                IMAGE FLOATS LEFT
            ================================================= */}
            <div className="text-[#5A4638]">

              {/* FLOATING FOUNDER PORTRAIT */}
              <figure
                className="
                  float-left
                  w-[34%]
                  max-w-[350px]
                  mr-8
                  mb-4
                  mt-1
                "
              >

                <div className="relative aspect-[3/4] overflow-hidden bg-[#E8D6BC] border border-[#A9783F]/30">

                  <img
                    src={BRAND_STORY_DATA.image}
                    alt={BRAND_STORY_DATA.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                </div>

              </figure>


              {/* TAGLINE */}
              <p className="font-serif italic text-[18px] lg:text-[20px] text-[#5A4638] leading-[1.35] mb-5">
                &ldquo;{BRAND_TAGLINE}&rdquo;
              </p>


              {/* FOUNDER STORY */}
              <div className="space-y-4 max-w-none">

                {BRAND_STORY_DATA.paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="font-sans text-[13px] lg:text-[14px] text-[#5A4638] leading-[1.7] font-light"
                    >
                      {paragraph}
                    </p>
                  )
                )}

              </div>


              {/* CLEAR FLOAT + VISION */}
              <div className="clear-both pt-5">

                <div className="border-t border-[#A9783F]/30 pt-4">

                  <p className="font-serif italic text-[18px] lg:text-[20px] text-[#4A1710] leading-[1.35]">
                    A vision to keep India&rsquo;s traditional knowledge alive,
                    accessible and meaningful for generations to come.
                  </p>

                </div>

              </div>

            </div>

          </article>

        </div>


        {/* =====================================================
            MOBILE
        ===================================================== */}
        <div className="sm:hidden w-full h-full flex flex-col">

          <article className="w-full h-full flex flex-col">

            {/* =================================================
                FOUNDER HEADING
            ================================================= */}
            <header className="shrink-0 pt-2 mb-3">

              <h2 className="font-serif text-[30px] leading-[1] text-[#4A1710] font-normal tracking-[-0.02em]">
                {BRAND_STORY_DATA.heading}
              </h2>

              <p className="text-[8px] tracking-[0.22em] uppercase text-[#705B4B] font-medium mt-2">
                {BRAND_STORY_DATA.subheading}
              </p>

            </header>


            {/* =================================================
                EDITORIAL STORY
                IMAGE FLOATS LEFT
            ================================================= */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-1">

              <div className="text-[#5A4638]">

                {/* FLOATING FOUNDER PORTRAIT */}
                <figure
                  className="
                    float-left
                    w-[43%]
                    mr-4
                    mb-3
                    mt-1
                  "
                >

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#E8D6BC] border border-[#A9783F]/30">

                    <img
                      src={BRAND_STORY_DATA.image}
                      alt={BRAND_STORY_DATA.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                  </div>

                </figure>


                {/* TAGLINE */}
                <p className="font-serif italic text-[14px] text-[#5A4638] leading-[1.35] mb-4">
                  &ldquo;{BRAND_TAGLINE}&rdquo;
                </p>


                {/* FOUNDER STORY */}
                <div className="space-y-3">

                  {BRAND_STORY_DATA.paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="font-sans text-[10.8px] text-[#5A4638] leading-[1.58] font-light"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                </div>


                {/* CLEAR FLOAT + VISION */}
                <div className="clear-both pt-4 pb-2">

                  <div className="border-t border-[#A9783F]/30 pt-3">

                    <p className="font-serif italic text-[14px] text-[#4A1710] leading-[1.3]">
                      A vision to keep India&rsquo;s traditional knowledge
                      alive, accessible and meaningful for generations to come.
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