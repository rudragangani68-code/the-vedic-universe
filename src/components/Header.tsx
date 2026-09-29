import React from 'react';
import { Menu, Search, Instagram, Mail } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../data/brand';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenContact,
  activeSection = 'home',
}) => {
  return (
    <>
      {/* =========================================================
          PRIMARY BRAND BAR — SCROLLS AWAY
      ========================================================= */}
      <header
        id="main-header"
        className="relative z-40 bg-[#FBF9F5] border-b border-[#EBE6DC]"
      >
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between">

          {/* Left: Menu Trigger */}
          <div className="flex items-center gap-3 w-auto sm:w-1/4 shrink-0">
            <button
              type="button"
              id="header-menu-btn"
              onClick={onOpenMenu}
              aria-label="Open Navigation Menu"
              className="p-2 -ml-2 text-[#560C05] hover:text-[#5F574B] transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A9783F]"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </button>

            <span className="hidden sm:inline-block text-[11px] tracking-[0.2em] uppercase text-[#654F42] font-medium">
              Menu
            </span>
          </div>

          {/* =====================================================
              CENTER: BRAND WORDMARK
              Mobile: deliberately kept on ONE line
          ===================================================== */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center text-center sm:relative sm:left-auto sm:translate-x-0 sm:flex-1 sm:max-w-[500px]">
            <a
              href="#home"
              id="brand-logo-link"
              className="group inline-flex items-center justify-center whitespace-nowrap"
            >
              <span className="font-serif text-[17px] sm:text-3xl md:text-4xl tracking-[0.13em] sm:tracking-[0.18em] text-[#4A1710] uppercase font-medium transition-colors group-hover:text-[#654F42] whitespace-nowrap">
                The Vedic Universe
              </span>
            </a>
          </div>

          {/* Right: Header Actions */}
          <div className="flex items-center justify-end gap-1 sm:gap-4 w-auto sm:w-1/4 shrink-0">

            {/* Search */}
            <button
              type="button"
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search essentials"
              title="Search products"
              className="p-2 text-[#560C05] hover:text-[#5F574B] transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A9783F]"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Instagram */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-link"
              aria-label="Visit Instagram profile"
              title="Follow on Instagram"
              className="p-2 text-[#560C05] hover:text-[#5F574B] transition-colors hidden sm:inline-flex rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A9783F]"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>

            {/* Contact */}
            <button
              type="button"
              id="header-contact-btn"
              onClick={onOpenContact}
              aria-label="Contact brand"
              title="Enquire or Contact"
              className="p-2 text-[#560C05] hover:text-[#5F574B] transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-[#A9783F]"
            >
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </button>

          </div>
        </div>
      </header>

      {/* =========================================================
          SECONDARY NAVIGATION — STICKY
          
          Mobile:
          All navigation items remain visible together.
          No horizontal scrolling.
      ========================================================= */}
      <nav
        id="sub-header-nav"
        aria-label="Brand Sections"
        className="sticky top-0 z-50 flex items-center justify-center bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#F0EBE1] py-2.5 px-2 sm:px-4"
      >
        <ul className="flex items-center justify-center gap-[9px] sm:gap-8 lg:gap-12 w-full">

          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <li
                key={item.label}
                className="shrink-0"
              >
                <a
                  href={item.href}
                  id={`nav-link-${sectionId}`}
                  className={`group text-[7px] sm:text-[12px] tracking-[0.10em] sm:tracking-[0.2em] font-medium uppercase transition-all duration-200 relative py-1 whitespace-nowrap ${
                    isActive
                      ? 'text-[#4A1710]'
                      : 'text-[#654F42] hover:text-[#4A1710]'
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#A9783F] transition-all duration-300 ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            );
          })}

        </ul>
      </nav>
    </>
  );
};