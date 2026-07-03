"use client";

import React from "react";

export default function Ticker() {
  const text = "SITE EN CONSTRUCTION PLUS D'INFORMATIONS À VENIR BIENTÔT !";
  
  return (
    <div className="w-full bg-[#0e77d9] text-white py-2 overflow-hidden select-none border-b border-[#0b63b5]">
      <div className="flex w-max">
        {/* We repeat the text to make a seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest gap-8 pr-8">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className="flex animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold tracking-widest gap-8 pr-8" aria-hidden="true">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
