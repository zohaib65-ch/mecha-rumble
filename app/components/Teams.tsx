"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { teamsList } from "../data/mockData";

const logoMap: Record<string, React.ReactNode> = {
  fnatic: (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#f60]">
      <path d="M20 15h60v15H60v15h20v15H60v25H45V45H20V30h25V15H20z" />
    </svg>
  ),
  fluxo: (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-black dark:fill-white">
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none" />
      <path d="M50 15v35h25" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  edg: (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-zinc-900">
      <circle cx="50" cy="50" r="38" />
      <text x="50" y="58" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        EDG
      </text>
    </svg>
  ),
  cloud9: (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#00a3e0]">
      <path d="M30 40a15 15 0 1 0 15 15H30V40zm25 0a15 15 0 1 1-15 15h15V40zm15 15a15 15 0 1 0-15-15h15v15z" />
    </svg>
  ),
  alpha7: (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#f5a623]">
      <polygon points="50,15 15,85 85,85" />
      <polygon points="50,38 32,75 68,75" fill="white" />
    </svg>
  ),
};

export default function Teams() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
        <h2 className="text-xl md:text-3xl font-black font-custom text-[#111] uppercase tracking-wider">
          Les Ecuries 2027
        </h2>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block h-[1px] w-24 bg-zinc-300" />
          <a
            href="#"
            className="flex items-center text-[10px] md:text-xs font-black tracking-widest text-zinc-600 hover:text-[#0e77d9] transition-colors"
          >
            VOIR TOUTES LES ECURIES <ChevronRight className="h-4 w-4 ml-1 inline" />
          </a>
        </div>
      </div>

      {/* Grid containing two rows of team cards */}
      <div className="flex flex-col space-y-6">
        {/* Row 1 */}
        <div className="flex items-center space-x-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-9 md:space-x-0 md:gap-4">
          {teamsList.map((team, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-24 h-24 md:w-auto md:h-auto md:aspect-square bg-white rounded-2xl md:rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center justify-center p-3 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center">
                {logoMap[team.logoKey] || null}
              </div>
              <span className="text-[8px] md:text-[9px] text-zinc-500 font-black tracking-wider text-center uppercase truncate w-full mt-1.5 font-sans">
                {team.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex items-center space-x-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-9 md:space-x-0 md:gap-4">
          {teamsList.map((team, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-24 h-24 md:w-auto md:h-auto md:aspect-square bg-white rounded-2xl md:rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center justify-center p-3 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center">
                {logoMap[team.logoKey] || null}
              </div>
              <span className="text-[8px] md:text-[9px] text-zinc-500 font-black tracking-wider text-center uppercase truncate w-full mt-1.5 font-sans">
                {team.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
