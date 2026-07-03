"use client";

import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { upcomingMatches } from "../data/mockData";
import { Button } from "@/app/components/ui/button";

export default function UpcomingMatches() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
        <h2 className="text-xl md:text-3xl font-black font-custom text-[#111] uppercase tracking-wider">
          Match à venir
        </h2>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block h-[1px] w-24 bg-zinc-300" />
          <a
            href="#"
            className="flex items-center text-[10px] md:text-xs font-black tracking-widest text-zinc-600 hover:text-[#0e77d9] transition-colors"
          >
            VOIR TOUS LES MATCH <ChevronRight className="h-4 w-4 ml-1 inline" />
          </a>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {upcomingMatches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between"
          >
            {/* Top Match Info */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-zinc-400" />
                  {match.date}
                </div>
                <div className="flex items-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-zinc-400" />
                  {match.location}
                </div>
              </div>
              <span className="text-[10px] font-black tracking-widest text-zinc-900 border border-zinc-300 rounded px-1.5 py-0.5 bg-zinc-50">
                CAMPUS CIRCUIT
              </span>
            </div>

            {/* Teams Comparison Row */}
            <div className="flex items-center justify-between my-4 px-2">
              {/* Team 1 */}
              <div className="flex flex-col items-center space-y-2 flex-1">
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 md:w-14 md:h-14 transform hover:scale-110 transition-transform duration-300"
                  style={{ fill: match.team1.logoColor }}
                >
                  <polygon points="20,10 80,10 90,40 50,90 10,40" />
                  <polygon points="35,25 65,25 70,45 50,75 30,45" fill="#fff" />
                  <circle cx="50" cy="45" r="10" />
                </svg>
                <div className="text-center font-sans">
                  <div className="text-xs font-black text-zinc-800 tracking-wide">
                    {match.team1.name}
                  </div>
                  <div className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase">
                    {match.team1.subName}
                  </div>
                </div>
              </div>

              {/* VS Badge */}
              <div className="flex items-center justify-center bg-zinc-900 text-white font-custom text-[9px] font-black tracking-wider px-2.5 py-1.5 rounded-md border border-zinc-800 shadow-sm mx-2 select-none">
                VS
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center space-y-2 flex-1">
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 md:w-14 md:h-14 transform hover:scale-110 transition-transform duration-300"
                  style={{ fill: match.team2.logoColor }}
                >
                  <polygon points="50,10 90,35 75,85 25,85 10,35" />
                  <polygon points="50,25 75,45 65,75 35,75 25,45" fill="#fff" />
                  <polygon points="50,35 60,55 40,55" />
                </svg>
                <div className="text-center font-sans">
                  <div className="text-xs font-black text-zinc-800 tracking-wide">
                    {match.team2.name}
                  </div>
                  <div className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase">
                    {match.team2.subName}
                  </div>
                </div>
              </div>
            </div>

            {/* Book Ticket Button using shadcn Button */}
            <Button
              variant="gaming"
              className="w-full mt-6 text-[10px] md:text-[11px] font-bold tracking-widest h-12 rounded-xl uppercase font-sans"
            >
              RÉSERVER UN BILLET
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
