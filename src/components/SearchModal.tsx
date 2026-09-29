import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.sanskritName?.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.keyIngredients.some(
            (k) =>
              k.commonName.toLowerCase().includes(query.toLowerCase()) ||
              k.botanicalName.toLowerCase().includes(query.toLowerCase())
          )
      )
    : products;

  return (
    <div
      id="search-modal-overlay"
      className="fixed inset-0 z-50 bg-[#4A1710]/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="search-modal-card"
        className="w-full max-w-2xl bg-[#DDB477] border border-[#D8D0C0] shadow-2xl p-6 sm:p-8 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE5D8] mb-6">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#705B4B] stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search botanical powders (e.g. Ashwagandha, Moringa, Triphala)..."
              className="w-full bg-transparent text-base sm:text-lg text-[#4A1710] placeholder:text-[#9F9688] focus:outline-none font-light"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-[#6E6557] hover:text-[#4A1710] transition-colors -mr-2"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-[#7A7162]">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#9B9182]">Suggestions:</span>
          {['Ashwagandha', 'Moringa', 'Triphala', 'Root', 'Leaf', 'Three Fruits'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setQuery(item)}
              className="px-2.5 py-1 bg-[#F1ECE1] hover:bg-[#E5DECf] text-[#4A4337] transition-colors rounded-xs text-[11px]"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10 text-sm text-[#7F7668]">
              No botanical essentials matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="group flex items-center justify-between p-3.5 bg-[#FFF8ED] hover:bg-[#F2ECE1] border border-[#ECE5D8] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#DDB477] border border-[#E3DCcf] p-1 flex items-center justify-center shrink-0">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-[#4A1710] group-hover:text-[#4A4235] transition-colors font-normal">
                      {p.name}
                    </h4>
                    <p className="text-xs text-[#7A7163] font-light">
                      {p.netQuantity} • {p.currency}{p.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs tracking-[0.15em] uppercase text-[#705B4B] group-hover:text-[#4A1710] transition-colors font-medium">
                  <span className="hidden sm:inline">View</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
