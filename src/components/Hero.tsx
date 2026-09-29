import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_ASSETS, BRAND_TAGLINE } from '../data/brand';
import heroMobileImage from '../assets/images/Hero_vertical.png';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      aria-label="Welcome to The Vedic Universe"
      className="relative overflow-hidden bg-[#F3E6D0]"
    >
      {/* =========================================================
          DESKTOP HERO
          Existing desktop composition — unchanged
      ========================================================= */}
      <div className="relative hidden sm:block min-h-[calc(100vh-42px)]">

        <img
          src={HERO_ASSETS.image}
          alt={HERO_ASSETS.alt}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F3E6D0]/35 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 min-h-[calc(100vh-42px)] max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center">

          <div className="w-full max-w-[560px] text-center lg:text-left">

            <h1 className="font-serif text-[42px] sm:text-[50px] md:text-[56px] lg:text-[58px] xl:text-[64px] font-normal leading-[1.05] text-[#4A1710] tracking-[-0.025em] mb-7">
              {BRAND_TAGLINE}
            </h1>

            <p className="font-sans text-[15px] sm:text-base lg:text-[17px] text-[#5A4638] leading-[1.75] max-w-lg mx-auto lg:mx-0 font-light mb-9">
              Rooted in India’s traditional knowledge, The Vedic Universe
              brings thoughtfully prepared botanicals into modern life — with
              respect for the wisdom and traditions from which they come.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">

              <button
                type="button"
                id="hero-explore-cta-btn"
                onClick={onExploreClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#5A170E] hover:bg-[#42110B] text-[#FFF5E5] text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 border border-[#5A170E] cursor-pointer"
              >
                <span>Explore Our Products</span>

                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE HERO
          Full viewport-height composition using dedicated
          vertical mobile artwork
      ========================================================= */}
      <div className="relative sm:hidden min-h-[calc(100vh-42px)] h-[calc(100vh-42px)] overflow-hidden">

        {/* Dedicated Vertical Mobile Hero Artwork */}
        <img
          src={heroMobileImage}
          alt={HERO_ASSETS.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Subtle readability layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(243,230,208,0.16) 0%, rgba(243,230,208,0.04) 38%, rgba(243,230,208,0) 58%, rgba(243,230,208,0.05) 100%)',
          }}
        />

        {/* =======================================================
            MOBILE HERO CONTENT
            Kept within the clean upper negative space.
            CTA remains above the botanical/product area.
        ======================================================= */}
        <div className="absolute inset-0 z-10">

          <div
            className="
              absolute
              left-[10%]
              top-[14%]
              w-[54%]
              text-left
            "
          >

            {/* Heading */}
            <h1
              className="
                font-serif
                text-[clamp(20px,6.2vw,30px)]
                leading-[1.04]
                font-normal
                text-[#4A1710]
                tracking-[-0.025em]
              "
            >
              {BRAND_TAGLINE}
            </h1>

            {/* Divider */}
            <div className="w-[22%] min-w-[24px] h-[1px] bg-[#A9783F] my-[7%]" />

            {/* Description */}
            <p
              className="
                font-sans
                text-[clamp(8px,2.35vw,11px)]
                leading-[1.55]
                text-[#5A4638]
                font-light
                mb-[8%]
              "
            >
              Rooted in India&rsquo;s traditional knowledge, The Vedic Universe
              brings thoughtfully prepared botanicals into modern life — with
              respect for the wisdom and traditions from which they come.
            </p>

            {/* CTA — stays above the botanical/product composition */}
            <button
              type="button"
              id="hero-explore-cta-btn-mobile"
              onClick={onExploreClick}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-1.5
                px-[7%]
                py-[5%]
                bg-[#5A170E]
                hover:bg-[#42110B]
                text-[#FFF5E5]
                text-[clamp(7px,1.9vw,9px)]
                tracking-[0.14em]
                uppercase
                font-medium
                transition-all
                duration-300
                border
                border-[#5A170E]
                cursor-pointer
                whitespace-nowrap
              "
            >
              <span>Explore Our Products</span>

              <ArrowUpRight
                className="
                  w-[clamp(8px,2.2vw,10px)]
                  h-[clamp(8px,2.2vw,10px)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};