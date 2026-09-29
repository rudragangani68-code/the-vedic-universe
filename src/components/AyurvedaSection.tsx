import React, { useEffect, useRef, useState } from 'react';
import { AYURVEDA_SECTION_DATA } from '../data/brand';
import { Leaf, Sun, Wind } from 'lucide-react';

export const AyurvedaSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const icons = [
    <Wind
      className="w-5 h-5 text-[#4A1710] stroke-[1.5]"
      key="wind"
    />,
    <Sun
      className="w-5 h-5 text-[#A9783F] stroke-[1.5]"
      key="sun"
    />,
    <Leaf
      className="w-5 h-5 text-[#4A1710] stroke-[1.5]"
      key="leaf"
    />,
  ];

  const pillarLabels = [
    '01 — TRADITION',
    '02 — DAILY RHYTHM',
    '03 — NOURISHMENT',
  ];

  /*
   * =========================================================
   * SECTION VISIBILITY
   * Carousel only becomes active when Ayurveda is visible
   * =========================================================
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * =========================================================
   * MOBILE AUTO CAROUSEL
   * =========================================================
   */
  useEffect(() => {
    if (
      AYURVEDA_SECTION_DATA.pillars.length <= 1 ||
      isPaused ||
      !isSectionVisible
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === AYURVEDA_SECTION_DATA.pillars.length - 1
          ? 0
          : previousIndex + 1
      );
    }, 3500);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, isSectionVisible]);

  /*
   * =========================================================
   * TOUCH START
   * =========================================================
   */
  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isSectionVisible) return;

    touchStartY.current =
      event.touches[0]?.clientY ?? null;

    setIsPaused(true);
  };

  /*
   * =========================================================
   * TOUCH END / VERTICAL SWIPE
   * =========================================================
   */
  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isSectionVisible) {
      touchStartY.current = null;
      return;
    }

    const startY = touchStartY.current;

    if (startY === null) {
      setIsPaused(false);
      return;
    }

    const endY =
      event.changedTouches[0]?.clientY ?? startY;

    const differenceY = startY - endY;

    if (Math.abs(differenceY) > 40) {
      if (differenceY > 0) {
        // Swipe up → next pillar
        setCurrentIndex((previousIndex) =>
          previousIndex === AYURVEDA_SECTION_DATA.pillars.length - 1
            ? 0
            : previousIndex + 1
        );
      } else {
        // Swipe down → previous pillar
        setCurrentIndex((previousIndex) =>
          previousIndex === 0
            ? AYURVEDA_SECTION_DATA.pillars.length - 1
            : previousIndex - 1
        );
      }
    }

    touchStartY.current = null;
    setIsPaused(false);
  };

  /*
   * =========================================================
   * HOLD TO PAUSE
   * =========================================================
   */
  const handlePointerDown = () => {
    if (!isSectionVisible) return;

    setIsPaused(true);
  };

  const handlePointerUp = () => {
    setIsPaused(false);
  };

  return (
    <section
      ref={sectionRef}
      id="ayurveda"
      aria-label="The Wisdom of Ayurveda"
      className="min-h-[calc(100vh-42px)] h-[calc(100vh-42px)] flex items-center bg-[#F3E6D0] border-b border-[#A9783F]/30 overflow-hidden"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* =====================================================
            DESKTOP + TABLET
            Existing composition remains unchanged
        ===================================================== */}
        <div className="hidden sm:flex w-full h-full flex-col justify-center py-7 sm:py-8 lg:py-9">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-7 sm:mb-8">

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#4A1710] tracking-tight mb-2">
              {AYURVEDA_SECTION_DATA.heading}
            </h2>

            <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#654F42] font-medium block mb-3">
              The Tradition Behind Our Botanicals
            </span>

            <p className="font-sans text-xs sm:text-sm text-[#5A4638] font-light leading-relaxed max-w-2xl mx-auto">
              Ayurveda is part of the wider knowledge tradition from which
              India&rsquo;s understanding of herbs, food, daily routines and
              wellbeing has developed. For The Vedic Universe, this tradition
              provides the context for understanding the botanicals we bring
              into everyday life.
            </p>

          </div>


          {/* Three Classical Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">

            {AYURVEDA_SECTION_DATA.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-[#DDB477] border border-[#A9783F]/35 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#A9783F]/80"
              >

                <div>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xs bg-[#FFF5E5] border border-[#A9783F]/40 flex items-center justify-center mb-4">
                    {icons[idx % icons.length]}
                  </div>

                  {/* Sanskrit / Category */}
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#654F42] font-medium block mb-1.5">
                    {pillar.sanskrit}
                  </span>

                  {/* Pillar Heading */}
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#4A1710] font-normal leading-snug mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] sm:text-xs text-[#5A4638] leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                </div>

                {/* Editorial Label */}
                <div className="mt-5 pt-3 border-t border-[#FFF5E5]/70 text-[9px] tracking-[0.2em] uppercase text-[#654F42] font-medium">
                  {pillarLabels[idx]}
                </div>

              </div>
            ))}

          </div>


          {/* =================================================
              WELLBEING REFLECTION — DESKTOP
          ================================================= */}
          <div className="w-[92%] mx-auto mt-7 sm:mt-8 text-center">

            <div className="bg-[#FFF5E5] border border-[#A9783F]/40 px-6 sm:px-9 py-4 sm:py-5">

              {/* Sanskrit */}
              <p className="font-serif text-2xl sm:text-3xl md:text-[32px] text-[#4A1710] leading-[1.3]">
                सर्वे सन्तु निरामयाः
              </p>

              {/* Pronunciation */}
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#705B4B] font-medium mt-2">
                Sarve Santu Niramayah
              </p>

              {/* Meaning */}
              <div className="mt-3 pt-3 border-t border-[#A9783F]/25">

                <p className="font-serif italic text-base sm:text-lg text-[#4A1710] leading-relaxed">
                  “May everyone be free from illness.”
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            MOBILE AYURVEDA
            One viewport-height section
            Vertical automatic carousel
        ===================================================== */}
        <div className="sm:hidden w-full h-full flex flex-col pt-3 pb-3">

          {/* ===================================================
              MOBILE HEADER
          =================================================== */}
          <div className="shrink-0 text-center px-2">

            <h2 className="font-serif text-[31px] leading-[1.03] font-normal text-[#4A1710] tracking-[-0.015em]">
              {AYURVEDA_SECTION_DATA.heading}
            </h2>

            <span className="text-[8px] tracking-[0.22em] uppercase text-[#654F42] font-medium block mt-2 mb-2.5">
              The Tradition Behind Our Botanicals
            </span>

            <p className="font-sans text-[10.5px] text-[#5A4638] font-light leading-[1.45] max-w-[340px] mx-auto">
              Ayurveda is part of the wider knowledge tradition from which
              India&rsquo;s understanding of herbs, food, daily routines and
              wellbeing has developed. For The Vedic Universe, this tradition
              provides the context for understanding the botanicals we bring
              into everyday life.
            </p>

          </div>


          {/* ===================================================
              MOBILE VERTICAL CAROUSEL
          =================================================== */}
          <div
            className="flex-1 min-h-0 flex items-center justify-center mt-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >

            {/* Carousel viewport */}
            <div className="w-full max-w-[390px] h-full max-h-[355px] overflow-hidden">

              {/* Vertical track */}
              <div
                className="w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translateY(-${currentIndex * 100}%)`,
                }}
              >

                {AYURVEDA_SECTION_DATA.pillars.map((pillar, idx) => (
                  <div
                    key={pillar.title}
                    className="w-full h-full min-h-full shrink-0 flex items-center"
                  >

                    {/* Pillar Card */}
                    <article className="w-full h-full max-h-[355px] bg-[#DDB477] border border-[#A9783F]/35 p-5 flex flex-col justify-between">

                      <div>

                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xs bg-[#FFF5E5] border border-[#A9783F]/40 flex items-center justify-center mb-5">
                          {icons[idx % icons.length]}
                        </div>

                        {/* Sanskrit / Category */}
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#654F42] font-medium block mb-2">
                          {pillar.sanskrit}
                        </span>

                        {/* Pillar Heading */}
                        <h3 className="font-serif text-[25px] text-[#4A1710] font-normal leading-[1.08] mb-4">
                          {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-[11.5px] text-[#5A4638] leading-[1.6] font-normal">
                          {pillar.description}
                        </p>

                      </div>

                      {/* Editorial Label */}
                      <div className="pt-4 border-t border-[#FFF5E5]/70 text-[8px] tracking-[0.2em] uppercase text-[#654F42] font-medium">
                        {pillarLabels[idx]}
                      </div>

                    </article>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* ===================================================
              MOBILE CAROUSEL INDICATORS
          =================================================== */}
          <div className="shrink-0 flex items-center justify-center gap-2 mt-2.5">

            {AYURVEDA_SECTION_DATA.pillars.map((pillar, index) => (
              <button
                key={pillar.title}
                type="button"
                aria-label={`View ${pillar.title}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(false);
                }}
                className={`
                  h-[2px]
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? 'w-7 bg-[#4A1710]'
                      : 'w-3 bg-[#A9783F]/50'
                  }
                `}
              />
            ))}

          </div>


          {/* ===================================================
              MOBILE SANSKRIT REFLECTION
          =================================================== */}
          <div className="shrink-0 mt-3 bg-[#FFF5E5] border border-[#A9783F]/40 px-4 py-3 text-center">

            {/* Sanskrit */}
            <p className="font-serif text-[22px] text-[#4A1710] leading-[1.2]">
              सर्वे सन्तु निरामयाः
            </p>

            {/* Pronunciation */}
            <p className="font-sans text-[8px] tracking-[0.17em] uppercase text-[#705B4B] font-medium mt-1.5">
              Sarve Santu Niramayah
            </p>

            {/* Meaning */}
            <div className="mt-2 pt-2 border-t border-[#A9783F]/25">

              <p className="font-serif italic text-[13px] text-[#4A1710] leading-relaxed">
                “May everyone be free from illness.”
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};