"use client";

import ViewAllLink from "./ViewAllLink";
import MatchCard from "./cards/MatchCard";
import { upcomingMatches } from "../data/mockData";

export default function UpcomingMatches() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between mb-4 pb-4">
        <h2 className="text-xl md:text-3xl font-bold text-[#151515] uppercase tracking-wider">Match à venir</h2>
        <ViewAllLink label="VOIR TOUS LES MATCH" href="#" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}
