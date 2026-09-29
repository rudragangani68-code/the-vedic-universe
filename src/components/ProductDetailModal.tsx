import React, { useEffect } from 'react';
import {
  X,
  ArrowLeft,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  // Amazon product links
  const AMAZON_LINKS: Record<string, string> = {
    'ashwagandha-powder': 'https://www.amazon.in/dp/B0HJRQ1XQM',
    'moringa-powder': 'https://www.amazon.in/dp/B0HJR9TQ3B',
    'triphala-powder': 'https://www.amazon.in/dp/B0HG77SD1Q',
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const amazonLink = AMAZON_LINKS[product.id];

  return (
    <div
      id="product-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#4A1710]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        id="product-detail-container"
        className="relative w-full max-w-5xl bg-[#DDB477] border border-[#DED7C8] shadow-2xl my-auto overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#ECE5D8] bg-[#F7F4EC]">

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#6B6254] hover:text-[#4A1710] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            <span>Back to Products</span>
          </button>

          <span className="text-[11px] tracking-[0.2em] uppercase text-[#948B7D] hidden sm:inline">
            The Vedic Universe • Botanical Profile
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="p-1.5 text-[#6B6254] hover:text-[#4A1710] hover:bg-[#EAE4D7] rounded-xs transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

        </div>


        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <div className="lg:col-span-6 bg-[#F5F1E8] p-6 sm:p-10 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-[#ECE5D8]">

            <div className="relative aspect-square w-full max-w-md mx-auto bg-[#FAF8F3] border border-[#E3DCCF] flex items-center justify-center p-6 shadow-xs">

              <img
                src={product.image}
                alt={product.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-3 left-3 bg-[#DDB477]/90 border border-[#D5CDBC] px-3 py-1 text-[11px] tracking-[0.15em] uppercase text-[#6E6557]">
                Net Qty: {product.netQuantity}
              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT COLUMN
          ===================================================== */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-7">

            {/* Product Header */}
            <div>

              {product.sanskritName && (
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#705B4B] font-medium block mb-2">
                  {product.sanskritName}
                </span>
              )}

              <h2
                id="modal-product-title"
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#4A1710] font-normal leading-tight mb-3"
              >
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 pb-4 border-b border-[#ECE5D8]">

                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#4A1710]">
                  {product.currency}
                  {product.price}
                </span>

                <span className="text-xs tracking-wider text-[#7C7467] font-light">
                  Inclusive of all taxes • {product.netQuantity}
                </span>

              </div>

            </div>


            {/* ===================================================
                PRODUCT INTRODUCTION
            =================================================== */}
            {product.introduction && (
              <div>

                <h3 className="text-xs tracking-[0.2em] uppercase text-[#736A5D] font-medium mb-2">
                  Product Introduction
                </h3>

                <p className="text-sm sm:text-[15px] text-[#423C33] leading-relaxed font-light">
                  {product.introduction}
                </p>

              </div>
            )}


            {/* ===================================================
                INGREDIENTS
            =================================================== */}
            {product.keyIngredients?.length > 0 && (
              <div className="bg-[#F8F0E2] p-4 sm:p-5 border border-[#E5DFD2]">

                <h3 className="text-xs tracking-[0.2em] uppercase text-[#736A5D] font-medium mb-3 flex items-center gap-2">

                  <CheckCircle2 className="w-4 h-4 text-[#394838]" />

                  <span>Ingredients</span>

                </h3>

                <div className="space-y-3">

                  {product.keyIngredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-[#443E35] border-b border-[#E8E2D6] pb-2 last:border-b-0 last:pb-0"
                    >

                      <div className="flex justify-between items-baseline font-medium text-[#201D19] gap-4">

                        <span>{ing.commonName}</span>

                        {ing.botanicalName && (
                          <span className="italic font-serif text-[13px] text-[#696154] text-right">
                            {ing.botanicalName}
                          </span>
                        )}

                      </div>

                      {(ing.partUsed || ing.note) && (
                        <div className="text-[11px] text-[#71695C] mt-0.5">

                          {ing.partUsed && `Part Used: ${ing.partUsed}`}

                          {ing.note && ` — ${ing.note}`}

                        </div>
                      )}

                    </div>
                  ))}

                </div>

              </div>
            )}


            {/* ===================================================
                SUGGESTED USAGE
            =================================================== */}
            {product.suggestedUsage && (
              <div>

                <h3 className="text-xs tracking-[0.2em] uppercase text-[#736A5D] font-medium mb-2">
                  Suggested Usage
                </h3>

                <p className="text-sm text-[#4E473D] leading-relaxed font-light bg-[#F9F7F1] p-3.5 border border-[#ECE5D8]">
                  {product.suggestedUsage}
                </p>

              </div>
            )}


            {/* ===================================================
                STORAGE INFORMATION
            =================================================== */}
            {product.storageInfo && (
              <div>

                <h3 className="text-xs tracking-[0.2em] uppercase text-[#736A5D] font-medium mb-2">
                  Storage Information
                </h3>

                <p className="text-xs text-[#635B4E] leading-relaxed font-light">
                  {product.storageInfo}
                </p>

              </div>
            )}


            {/* ===================================================
                WHERE TO BUY
            =================================================== */}
            {amazonLink && (
              <div className="pt-5 border-t border-[#ECE5D8]">

                <div className="mb-3">

                  <h3 className="text-xs tracking-[0.2em] uppercase text-[#736A5D] font-medium">
                    Where to Buy
                  </h3>

                  <p className="text-xs text-[#7C7467] font-light mt-1">
                    Purchase this product through our Amazon store.
                  </p>

                </div>

                <a
                  href={amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`buy-on-amazon-${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#5A170E] hover:bg-[#3D372F] text-[#FFF5E5] text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 shadow-xs"
                >
                  <span>BUY ON AMAZON</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[1.5]" />
                </a>

              </div>
            )}


            {/* ===================================================
                DISCLAIMER
            =================================================== */}
            <div className="flex items-start gap-2.5 p-3.5 bg-[#F2EDE2] border border-[#DFD8C9] text-[11px] text-[#6F675A] leading-relaxed">

              <AlertCircle className="w-4 h-4 text-[#8C7A5D] shrink-0 mt-0.5" />

              <span>
                <strong>Ayurvedic Disclaimer:</strong> This botanical product
                is offered for traditional everyday dietary and wellness
                integration, and is not intended to diagnose, treat, cure, or
                prevent any disease. Please consult a qualified Ayurvedic
                physician if you are pregnant, nursing, or taking prescription
                medication.
              </span>

            </div>


            {/* ===================================================
                ENQUIRY
            =================================================== */}
            <div className="pt-4 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-stretch gap-3">

              <button
                type="button"
                id="enquire-product-modal-btn"
                onClick={() => onEnquire(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5A170E] hover:bg-[#3D372F] text-[#FFF5E5] text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ENQUIRE ABOUT THIS PRODUCT</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-4 bg-transparent hover:bg-[#EFE9DD] text-[#4E473D] text-xs tracking-[0.18em] uppercase font-medium border border-[#D5CDBC] transition-colors"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};