"use client";

import React from "react";
import { partnersList } from "../data/mockData";
import { useAutoSlider } from "../hooks/useAutoSlider";

export default function Partners() {
  const { sliderRef } = useAutoSlider();

  return (
    <section className="mb-6 w-full">
      <div className="pb-4 mb-4">
        <h2 className="text-xl md:text-[32px] font-bold text-[#151515] uppercase tracking-wider">
          Partenaires de MechaRumble
        </h2>
        <p className="text-[#151515] text-[17px] font-normal tracking-wider font-sans uppercase mt-1">
          Restez au cœur de l'action !
        </p>
      </div>

      <div ref={sliderRef} className="flex items-center space-x-3 overflow-x-auto scrollbar-hide">
        {[...partnersList, ...partnersList].map((partner, idx) => (
          <div
            key={`${partner.id}-${idx}`}
            className="flex-shrink-0 h-16 flex items-center justify-center transition-all duration-350 group select-none cursor-pointer"
          >
            <div className="group-hover:scale-105 transition-transform duration-350 flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="h-16 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
