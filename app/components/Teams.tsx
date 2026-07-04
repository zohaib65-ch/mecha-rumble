"use client";

import React from "react";
import { teamsList } from "../data/mockData";
import ViewAllLink from "./ViewAllLink";
import TeamCard from "./TeamCard";

export default function Teams() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4 pb-4">
        <h2 className="text-xl md:text-3xl font-bold text-[#151515] uppercase tracking-wider">Les Ecuries 2027</h2>
        <ViewAllLink label="Voir toutes LES ECURIES" href="#" />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-9 md:space-x-0 md:gap-4">
          {teamsList.map((team, idx) => (
            <TeamCard key={`row1-${idx}`} team={team} />
          ))}
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto pb-3 scrollbar-hide md:grid md:grid-cols-9 md:space-x-0 md:gap-4">
          {teamsList.map((team, idx) => (
            <TeamCard key={`row2-${idx}`} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
