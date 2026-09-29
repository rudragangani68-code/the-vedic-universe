import React, { useEffect, useRef, useState } from 'react';

const WHY_US_ITEMS = [
  {
    label: 'Tradition',
    title: 'Respect for Ancient Knowledge',
    description:
      'We draw inspiration from India’s traditional knowledge systems and approach botanical wellness with respect for the principles and practices that have shaped them over generations.',
    additionalText:
      'Our aim is not to separate these traditions from their roots, but to present their botanical wisdom with care and make it easier to understand in the context of everyday life.',
  },
  {
    label: 'Integrity',
    title: 'Nothing Unnecessary',
    description:
      'We believe traditional botanicals should be presented with honesty and purpose, without adding unnecessary complexity to what is naturally valuable.',
    additionalText:
      'From the ingredients we choose to the way we communicate about them, we value simplicity, transparency and restraint. What belongs should have a reason to be there.',
  },
  {
    label: 'Clarity',
    title: 'Simple to Understand',
    description:
      'From the botanicals we offer to the way we present them, our aim is to make traditional wellness easier to understand and more approachable for everyday life.',
    additionalText:
      'Ancient knowledge does not need to feel distant or complicated. We believe thoughtful presentation can create a clear bridge between traditional wisdom and the modern individual.',
  },
  {
    label: 'Our Vision',
    title: 'Traditional Knowledge for Everyone',
    description:
      'We want to help more people reconnect with India’s traditional botanical knowledge and discover ways in which it can remain meaningful in modern life.',
    additionalText:
      'The Vedic Universe is built around a simple belief: knowledge becomes more valuable when it can be understood, appreciated and thoughtfully carried forward into the lives of a new generation.',
  },
];

export const BrandValues: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  /*
   * =========================================================
   * SECTION VISIBILITY
   * Carousel only becomes active when Why Us is visible
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
   * MOBILE AUTO-CAROUSEL
   * Runs only while the section is visible
   * =========================================================
   */
  useEffect(() => {
    if (
      isPaused ||
      !isSectionVisible
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === WHY_US_ITEMS.length - 1
          ? 0
          : previousIndex + 1
      );
    }, 2000);

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

    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    setIsPaused(true);
  };

  /*
   * =========================================================
   * TOUCH END / SWIPE
   * =========================================================
   */
  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isSectionVisible) {
      touchStartX.current = null;
      return;
    }

    const startX = touchStartX.current;

    if (startX === null) {
      setIsPaused(false);
      return;
    }

    const endX =
      event.changedTouches[0]?.clientX ?? startX;

    const differenceX = startX - endX;

    if (Math.abs(differenceX) > 40) {
      if (differenceX > 0) {
        // Swipe left → next card
        setCurrentIndex((previousIndex) =>
          previousIndex === WHY_US_ITEMS.length - 1
            ? 0
            : previousIndex + 1
        );
      } else {
        // Swipe right → previous card
        setCurrentIndex((previousIndex) =>
          previousIndex === 0
            ? WHY_US_ITEMS.length - 1
            : previousIndex - 1
        );
      }
    }

    touchStartX.current = null;
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
      id="values"
      aria-label="Why Us"
      className="min-h-[calc(100vh-42px)] h-[calc(100vh-42px)] flex items-center bg-[#DDB477] border-b border-[#F3E6D0] overflow-hidden"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            DESKTOP + TABLET
        ===================================================== */}
        <div className="hidden sm:flex w-full h-full flex-col justify-center py-6 sm:py-7 lg:py-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#4A1710] tracking-tight mb-1.5">
              Why The Vedic Universe
            </h2>

            <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#705B4B] font-medium block mb-2.5">
              What Guides Us
            </span>

            <p className="font-sans text-[11px] sm:text-xs text-[#5A4638] font-light leading-[1.55] max-w-xl mx-auto">
              The traditions we draw from shape not only what we offer, but how
              we choose to present it with respect, clarity and nothing
              unnecessary.
            </p>

          </div>


          {/* ===================================================
              DESKTOP 2 × 2 GRID
          =================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto w-full">

            {WHY_US_ITEMS.map((item) => (
              <article
                key={item.label}
                className="
                  bg-[#FFF5E5]
                  border
                  border-[#A9783F]/35
                  p-5
                  sm:p-5
                  lg:p-6
                  flex
                  flex-col
                  min-h-[225px]
                  transition-all
                  duration-300
                  hover:border-[#A9783F]/80
                "
              >

                <div>

                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#A9783F] font-medium">
                    {item.label}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl text-[#4A1710] font-normal leading-[1.12] mt-1.5">
                    {item.title}
                  </h3>

                </div>

                <p className="font-sans text-[11px] sm:text-[12px] text-[#5A4638] leading-[1.5] font-normal max-w-lg mt-3">
                  {item.description}
                </p>

                <p className="font-sans text-[10.5px] sm:text-[11px] text-[#705B4B] leading-[1.48] font-light max-w-lg mt-2">
                  {item.additionalText}
                </p>

              </article>
            ))}

          </div>

        </div>


        {/* =====================================================
            MOBILE
            Existing mobile composition unchanged
        ===================================================== */}
        <div className="sm:hidden w-full h-full flex flex-col">

          {/* Mobile Header */}
          <div className="shrink-0 text-center px-3 pt-4">

            <h2 className="font-serif text-[32px] leading-[1.03] font-normal text-[#4A1710] tracking-[-0.015em]">
              Why The Vedic Universe
            </h2>

            <span className="text-[8px] tracking-[0.22em] uppercase text-[#705B4B] font-medium block mt-2 mb-2.5">
              What Guides Us
            </span>

            <p className="font-sans text-[10.5px] text-[#5A4638] font-light leading-[1.5] max-w-[330px] mx-auto">
              The traditions we draw from shape not only what we offer, but how
              we choose to present it with respect, clarity and nothing
              unnecessary.
            </p>

          </div>


          {/* ===================================================
              MOBILE CAROUSEL
          =================================================== */}
          <div
            className="flex-1 min-h-0 flex flex-col items-center justify-start pt-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              touchAction: 'pan-y',
            }}
          >

            {/* Carousel Viewport */}
            <div className="relative w-[min(320px,calc(100vw-40px))] h-[390px] overflow-hidden shrink-0">

              {/* Sliding Track */}
              <div
                className="flex h-full w-[400%] transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`,
                }}
              >

                {WHY_US_ITEMS.map((item) => (
                  <article
                    key={item.label}
                    className="w-1/4 h-full shrink-0 bg-[#FFF5E5] border border-[#A9783F]/35 px-5 pt-6 pb-5 flex flex-col"
                  >

                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#A9783F] font-medium">
                      {item.label}
                    </span>

                    <h3 className="font-serif text-[27px] text-[#4A1710] font-normal leading-[1.08] mt-4">
                      {item.title}
                    </h3>

                    <p className="font-sans text-[12px] text-[#5A4638] leading-[1.6] font-normal mt-4">
                      {item.description}
                    </p>

                    <p className="font-sans text-[11px] text-[#705B4B] leading-[1.55] font-light mt-3">
                      {item.additionalText}
                    </p>

                    <div className="mt-auto pt-4">

                      <div className="w-full h-px bg-[#A9783F]/20" />

                    </div>

                  </article>
                ))}

              </div>

            </div>


            {/* =================================================
                MOBILE INDICATORS
            ================================================= */}
            <div className="flex items-center justify-center gap-2 mt-5">

              {WHY_US_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={`View ${item.title}`}
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

          </div>

        </div>

      </div>
    </section>
  );
};