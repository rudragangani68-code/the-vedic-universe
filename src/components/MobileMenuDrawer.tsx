import React, { useEffect } from 'react';
import { X, Instagram, Mail, Phone, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, BRAND_TAGLINE, CONTACT_INFO } from '../data/brand';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-drawer-overlay"
      className="fixed inset-0 z-50 bg-[#4A1710]/60 backdrop-blur-xs flex justify-start"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="mobile-menu-drawer-panel"
        className="w-full max-w-sm sm:max-w-md h-full bg-[#DDB477] border-r border-[#E3DCcf] shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-slideInLeft text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#ECE5D8]">
            <div>
              <span className="font-serif text-lg tracking-[0.2em] text-[#4A1710] uppercase block">
                The Vedic Universe
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#8C8375] uppercase block font-sans">
                Ayurvedic Wellness
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 text-[#6E6557] hover:text-[#4A1710] transition-colors -mr-2"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="py-8">
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between font-serif text-2xl text-[#5A170E] hover:text-[#5F574B] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all stroke-[1.5]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer in drawer */}
        <div className="pt-6 border-t border-[#ECE5D8] space-y-4">
          <p className="font-serif italic text-xs text-[#7A7163] leading-relaxed">
            &ldquo;{BRAND_TAGLINE}&rdquo;
          </p>

          <div className="space-y-2 text-xs text-[#5E5649] font-light">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#A9783F]" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#A9783F]" />
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-[#A9783F]" />
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {CONTACT_INFO.instagramHandle}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full py-3 bg-[#5A170E] hover:bg-[#3D372E] text-[#FFF5E5] text-xs tracking-[0.18em] uppercase font-medium transition-colors"
            >
              Contact / Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
