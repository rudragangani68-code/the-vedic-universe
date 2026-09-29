import React from 'react';
import { BRAND_TAGLINE } from '../data/brand';

export const AnnouncementBar: React.FC = () => {
  const [firstPart, secondPart] = BRAND_TAGLINE.replace('.', '').split(', ');

  return (
    <aside
      aria-label="Brand Tagline"
      id="announcement-bar"
      className="bg-[#560C05] text-[#FFF5E5] text-[10px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.2em] uppercase py-2.5 px-4 text-center font-medium border-b border-[#A9783F]/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span>{firstPart}</span>

        <span
          className="text-[#DDB477] text-sm leading-none"
          aria-hidden="true"
        >
          •
        </span>

        <span>{secondPart}</span>
      </div>
    </aside>
  );
};