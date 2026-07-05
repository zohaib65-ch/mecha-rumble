"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useSlider } from "@/app/hooks/useSlider";
import ViewAllLink from "./ViewAllLink";
import MatchCard from "./cards/MatchCard";
import { upcomingMatches } from "../data/mockData";

export default function UpcomingMatches() {
  const { sliderRef, scroll } = useSlider(320, 24);

  return (
    <section className="w-full">
      <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between mb-4 pb-4">
        <h2 className="text-xl md:text-3xl font-bold text-[#151515] uppercase tracking-wider">Match a venir</h2>
        <ViewAllLink label="VOIR TOUS LES MATCH" href="#" />
      </div>

      <div className="relative group">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-0"
          title="Scroll Left"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-0"
          title="Scroll Right"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div
          ref={sliderRef}
          className="flex items-center space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {upcomingMatches.map((match) => (
            <div key={match.id} className="min-w-[320px] shrink-0 snap-start">
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
