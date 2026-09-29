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
          1024px and above
          UNCHANGED
      ========================================================= */}
      <div className="relative hidden lg:block min-h-[calc(100dvh-42px)]">

        <img
          src={HERO_ASSETS.image}
          alt={HERO_ASSETS.alt}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F3E6D0]/35 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 min-h-[calc(100dvh-42px)] max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center">

          <div className="w-full max-w-[560px] text-center lg:text-left">

            <h1
              className="
                font-serif
                text-[42px]
                sm:text-[50px]
                md:text-[54px]
                lg:text-[52px]
                xl:text-[64px]
                font-normal
                leading-[1.04]
                text-[#4A1710]
                tracking-[-0.025em]
                mb-6
                max-w-[500px]
              "
            >
              {BRAND_TAGLINE}
            </h1>

            <p
              className="
                font-sans
                text-[15px]
                sm:text-base
                lg:text-[15px]
                xl:text-[17px]
                text-[#5A4638]
                leading-[1.7]
                max-w-[470px]
                mx-auto
                lg:mx-0
                font-light
                mb-8
              "
            >
              Rooted in India&rsquo;s traditional knowledge, The Vedic Universe
              brings thoughtfully prepared botanicals into modern life — with
              respect for the wisdom and traditions from which they come.
            </p>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-3
                mt-1
              "
            >
              <button
                type="button"
                id="hero-explore-cta-btn"
                onClick={onExploreClick}
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  bg-[#5A170E]
                  hover:bg-[#42110B]
                  text-[#FFF5E5]
                  text-[11px]
                  tracking-[0.2em]
                  uppercase
                  font-medium
                  transition-all
                  duration-300
                  border
                  border-[#5A170E]
                  cursor-pointer
                "
              >
                <span>Explore Our Products</span>

                <ArrowUpRight
                  className="
                    w-3.5
                    h-3.5
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
      </div>


      {/* =========================================================
          TABLET + MOBILE HERO
          Below 1024px

          Mobile composition remains unchanged.
          Tablet typography increased.
      ========================================================= */}
      <div
        className="
          relative
          lg:hidden
          min-h-[calc(100dvh-42px)]
          h-[calc(100dvh-42px)]
          overflow-hidden
        "
      >

        <img
          src={heroMobileImage}
          alt={HERO_ASSETS.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(243,230,208,0.16) 0%, rgba(243,230,208,0.04) 38%, rgba(243,230,208,0) 58%, rgba(243,230,208,0.05) 100%)',
          }}
        />

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

            {/* =================================================
                HERO HEADLINE
                Mobile: existing clamp
                Tablet: 40px
            ================================================= */}
            <h1
              className="
                font-serif
                text-[clamp(20px,6.2vw,30px)]
                sm:text-[40px]
                leading-[1.04]
                font-normal
                text-[#4A1710]
                tracking-[-0.025em]
              "
            >
              {BRAND_TAGLINE}
            </h1>


            {/* Decorative divider */}
            <div
              className="
                w-[22%]
                min-w-[24px]
                h-[1px]
                bg-[#A9783F]
                my-[7%]
              "
            />


            {/* =================================================
                HERO DESCRIPTION
                Mobile: existing clamp
                Tablet: 14px
            ================================================= */}
            <p
              className="
                font-sans
                text-[clamp(8px,2.35vw,11px)]
                sm:text-[14px]
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


            {/* =================================================
                EXPLORE CTA
                Existing layout preserved
            ================================================= */}
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