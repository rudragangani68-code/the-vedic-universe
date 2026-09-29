import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
}) => {
  return (
    <article
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-[#FFF5E5] border border-[#A9783F]/30 hover:border-[#A9783F] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-sm"
    >
      {/* Product Image Area */}
      <div
        className="relative w-full aspect-[4/3] bg-[#F3E6D0] overflow-hidden cursor-pointer border-b border-[#A9783F]/25"
        onClick={() => onViewProduct(product)}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover p-4 sm:p-5 transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Net Quantity Badge */}
        <div className="absolute top-3 left-3 bg-[#DDB477]/95 backdrop-blur-xs border border-[#A9783F]/50 px-2.5 py-1 text-[10px] tracking-[0.16em] uppercase text-[#4A1710] font-medium">
          {product.netQuantity}
        </div>

        {/* Quick View Hover Indicator */}
        <div className="absolute inset-0 bg-[#4A1710]/0 group-hover:bg-[#4A1710]/5 transition-colors duration-300 pointer-events-none flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#4A1710] text-[#FFF5E5] text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-2 border border-[#A9783F] shadow-xs">
            Quick View
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 text-left">

        {/* Botanical / Sanskrit Name */}
        {product.sanskritName && (
          <p className="text-[10px] tracking-[0.16em] uppercase text-[#705B4B] font-medium mb-1 line-clamp-1">
            {product.sanskritName}
          </p>
        )}

        {/* Product Name */}
        <h3
          onClick={() => onViewProduct(product)}
          className="font-serif text-lg sm:text-xl text-[#4A1710] font-normal leading-snug group-hover:text-[#A9783F] transition-colors cursor-pointer mb-2"
        >
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="font-sans text-[11px] sm:text-xs text-[#5A4638] leading-relaxed line-clamp-2 mb-4 font-light">
          {product.shortDescription}
        </p>

        {/* Price & View Action */}
        <div className="pt-3 border-t border-[#A9783F]/25 flex items-center justify-between gap-3 mt-auto">

          <div className="min-w-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-lg sm:text-xl font-normal text-[#4A1710]">
                {product.currency}{product.price}
              </span>

              <span className="text-[9px] tracking-wider text-[#705B4B]/70 font-light">
                incl. taxes
              </span>
            </div>

            <span className="text-[9px] tracking-[0.13em] uppercase text-[#705B4B] block font-light mt-0.5">
              {product.netQuantity}
            </span>
          </div>

          <button
            type="button"
            id={`view-product-btn-${product.id}`}
            onClick={() => onViewProduct(product)}
            className="inline-flex items-center gap-1 px-3 py-2 bg-[#5A170E] hover:bg-[#42110B] text-[#FFF5E5] border border-[#5A170E] hover:border-[#42110B] text-[9px] tracking-[0.16em] uppercase font-medium transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>VIEW</span>
            <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
          </button>

        </div>
      </div>
    </article>
  );
};