import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewProduct,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  /*
   * =========================================================
   * SECTION VISIBILITY
   * Carousel becomes active when Products is visible
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
   * Only runs while Products section is visible
   * =========================================================
   */
  useEffect(() => {
    if (
      products.length <= 1 ||
      isPaused ||
      !isSectionVisible
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === products.length - 1
          ? 0
          : previousIndex + 1
      );
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    products.length,
    isPaused,
    isSectionVisible,
  ]);

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

    touchStartY.current =
      event.touches[0]?.clientY ?? null;

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
      touchStartY.current = null;
      return;
    }

    const startX = touchStartX.current;
    const startY = touchStartY.current;

    if (startX === null || startY === null) {
      setIsPaused(false);
      return;
    }

    const endX =
      event.changedTouches[0]?.clientX ?? startX;

    const endY =
      event.changedTouches[0]?.clientY ?? startY;

    const differenceX = startX - endX;
    const differenceY = startY - endY;

    if (
      Math.abs(differenceX) > 40 &&
      Math.abs(differenceX) > Math.abs(differenceY)
    ) {
      if (differenceX > 0) {
        setCurrentIndex((previousIndex) =>
          previousIndex === products.length - 1
            ? 0
            : previousIndex + 1
        );
      } else {
        setCurrentIndex((previousIndex) =>
          previousIndex === 0
            ? products.length - 1
            : previousIndex - 1
        );
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;

    setIsPaused(false);
  };

  /*
   * =========================================================
   * POINTER HOLD
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
      id="products"
      aria-label="Our Ayurvedic Essentials"
      className="
        h-auto
        sm:min-h-[calc(100vh-42px)]
        sm:h-auto
        flex
        items-center
        bg-[#DDB477]
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
          px-4
          sm:px-6
          lg:px-10
        "
      >

        {/* =====================================================
            DESKTOP + TABLET
            Content-driven height.
            No fixed viewport height.
        ===================================================== */}
        <div
          className="
            hidden
            sm:flex
            w-full
            h-auto
            flex-col
            justify-center
            py-7
            sm:py-8
            lg:py-10
          "
        >

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#4A1710] tracking-tight mb-2">
              Tradition, Made for Everyday Life.
            </h2>

            <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#705B4B] font-medium block mb-3">
              Our Botanical Essentials
            </span>

            <p className="font-sans text-xs sm:text-sm text-[#5A4638] font-light leading-relaxed max-w-xl mx-auto">
              Our botanicals are where this philosophy becomes part of everyday
              life — presented simply, thoughtfully and with respect for the
              traditions from which they come.
            </p>

          </div>


          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
              />
            ))}

          </div>


          {/* Closing Brand Note */}
          <div className="mt-7 pt-4 border-t border-[#A9783F]/35 text-center">

            <p className="font-serif italic text-base sm:text-lg text-[#4A1710]">
              Rooted in tradition. Made for everyday life.
            </p>

          </div>

        </div>


        {/* =====================================================
            MOBILE
            Equal-height product carousel
        ===================================================== */}
        <div className="sm:hidden w-full h-full flex flex-col pt-3 pb-3">

          {/* ===================================================
              MOBILE HEADER
          =================================================== */}
          <div className="shrink-0 text-center px-2">

            <h2 className="font-serif text-[30px] leading-[1.02] font-normal text-[#4A1710] tracking-[-0.015em]">
              Tradition, Made for
              <br />
              Everyday Life.
            </h2>

            <span className="text-[8px] tracking-[0.22em] uppercase text-[#705B4B] font-medium block mt-2 mb-2">
              Our Botanical Essentials
            </span>

            <p className="font-sans text-[10.5px] text-[#5A4638] font-light leading-[1.45] max-w-[330px] mx-auto">
              Our botanicals are where this philosophy becomes part of everyday
              life — presented simply, thoughtfully and with respect for the
              traditions from which they come.
            </p>

          </div>


          {/* ===================================================
              MOBILE PRODUCT CAROUSEL
              Fixed-height frame so every product is identical
          =================================================== */}
          <div
            className="shrink-0 flex items-center justify-center mt-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >

            {/* Single-card viewport */}
            <div className="w-full max-w-[430px] h-[455px] overflow-hidden">

              {/* Sliding Track */}
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >

                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-full min-w-full h-full shrink-0 px-1"
                  >

                    {/* =========================================
                        COMPACT MOBILE PRODUCT CARD
                        Equal height for every product
                    ========================================= */}
                    <article className="w-full h-full flex flex-col bg-[#FFF5E5] border border-[#A9783F]/30 overflow-hidden">

                      {/* Product Image */}
                      <div
                        className="relative w-full h-[54%] shrink-0 bg-[#F3E6D0] overflow-hidden cursor-pointer border-b border-[#A9783F]/25"
                        onClick={() => onViewProduct(product)}
                      >

                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />

                        {/* Quantity */}
                        <div className="absolute top-3 left-3 bg-[#DDB477]/95 backdrop-blur-xs border border-[#A9783F]/50 px-2.5 py-1 text-[8px] tracking-[0.16em] uppercase text-[#4A1710] font-medium">
                          {product.netQuantity}
                        </div>

                      </div>


                      {/* Product Information */}
                      <div className="flex-1 min-h-0 flex flex-col px-4 py-3.5">

                        {/* Category */}
                        {product.sanskritName && (
                          <p className="text-[8px] tracking-[0.18em] uppercase text-[#705B4B] font-medium mb-1">
                            {product.sanskritName}
                          </p>
                        )}


                        {/* Product Name */}
                        <h3
                          onClick={() => onViewProduct(product)}
                          className="font-serif text-[20px] leading-[1.08] text-[#4A1710] font-normal cursor-pointer mb-2"
                        >
                          {product.name}
                        </h3>


                        {/* Description */}
                        <p className="font-sans text-[10.5px] text-[#5A4638] leading-[1.45] font-light line-clamp-2">
                          {product.shortDescription}
                        </p>


                        {/* Bottom Product Details */}
                        <div className="mt-auto pt-2.5 border-t border-[#A9783F]/25 flex items-center justify-between gap-3">

                          {/* Price */}
                          <div>

                            <div className="flex items-baseline gap-1">

                              <span className="font-serif text-[19px] text-[#4A1710] font-normal">
                                {product.currency}
                                {product.price}
                              </span>

                              <span className="text-[7px] tracking-[0.08em] uppercase text-[#705B4B]/70 font-light">
                                incl. taxes
                              </span>

                            </div>

                            <span className="text-[7px] tracking-[0.12em] uppercase text-[#705B4B] block mt-0.5">
                              {product.netQuantity}
                            </span>

                          </div>


                          {/* View Button */}
                          <button
                            type="button"
                            id={`mobile-view-product-btn-${product.id}`}
                            onClick={() => onViewProduct(product)}
                            className="inline-flex items-center gap-1 px-3.5 py-2.5 bg-[#5A170E] hover:bg-[#42110B] text-[#FFF5E5] border border-[#5A170E] text-[8px] tracking-[0.16em] uppercase font-medium transition-all duration-200 cursor-pointer shrink-0"
                          >
                            <span>VIEW</span>

                            <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
                          </button>

                        </div>

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
          <div className="shrink-0 flex items-center justify-center gap-2 mt-2">

            {products.map((product, index) => (
              <button
                key={product.id}
                type="button"
                aria-label={`View ${product.name}`}
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
              CLOSING BRAND NOTE
          =================================================== */}
          <div className="shrink-0 mt-3 pt-2.5 border-t border-[#A9783F]/35 text-center">

            <p className="font-serif italic text-[14px] text-[#4A1710] leading-tight">
              Rooted in tradition. Made for everyday life.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};