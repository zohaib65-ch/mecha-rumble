"use client";

import React from "react";
import { partnersList } from "../data/mockData";

const logoMap: Record<string, React.ReactNode> = {
  stc: (
    <span className="text-[#ff007f] font-black text-2xl tracking-tighter">
      stc
    </span>
  ),
  qiddiya: (
    <div className="flex flex-col items-center leading-none">
      <span className="text-white text-xs font-bold tracking-widest">
        QIDDIYA
      </span>
      <span className="text-zinc-500 text-[6px] tracking-wider mt-1">
        القدية
      </span>
    </div>
  ),
  aramco: (
    <span className="text-white text-xs font-semibold tracking-wider">
      aramco
    </span>
  ),
  sony: (
    <span className="text-white text-sm font-black tracking-widest font-sans">
      SONY
    </span>
  ),
  baras: (
    <div className="flex flex-col items-center">
      <span className="text-[#c1a067] text-[10px] font-bold tracking-widest">
        BARAS
      </span>
      <span className="text-zinc-500 text-[6px] uppercase tracking-wider">
        بارز
      </span>
    </div>
  ),
  hilton: (
    <span className="text-white text-xs font-black tracking-wider font-serif italic">
      Hilton
    </span>
  ),
  albaik: (
    <span className="text-white text-xs font-black tracking-wide font-sans">
      ALBAIK
    </span>
  ),
  secretlab: (
    <span className="text-white text-[9px] font-black tracking-widest font-sans uppercase">
      SECRET LAB
    </span>
  ),
};

export default function Partners() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="border-b border-zinc-200 pb-4 mb-8">
        <h2 className="text-xl md:text-3xl font-black font-custom text-[#111] uppercase tracking-wider">
          Partenaires de MechaRumble
        </h2>
        <p className="text-zinc-500 text-xs font-bold tracking-wider font-sans uppercase mt-1">
          Restez au cœur de l'action !
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
        {partnersList.map((partner) => (
          <div
            key={partner.id}
            className="bg-[#1a1a1c] border border-zinc-800 rounded-2xl p-4 h-16 flex items-center justify-center hover:bg-black hover:border-zinc-700 transition-all duration-350 shadow-md group select-none cursor-pointer"
          >
            <div className="group-hover:scale-105 transition-transform duration-350 flex items-center justify-center">
              {logoMap[partner.logoKey] || null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
