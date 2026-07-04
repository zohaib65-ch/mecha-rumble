"use client";

import { CalendarDays } from "lucide-react";
import { Button } from "@/app/components/ui/button";

import { MatchTeam } from "../../types";

interface Match {
  id: number;
  date: string;
  location: string;
  team1: MatchTeam;
  team2: MatchTeam;
}

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-3 flex flex-col justify-between">
      <div className="flex items-start bg-[#F5F5F5] p-2.5 rounded-lg justify-between mb-6">
        <div className="flex flex-col space-y-1 text-[#151515]">
          <div className="flex items-center text-[10px]  font-semibold uppercase ">
            <CalendarDays className="h-3.5 w-3.5 mr-1 " />
            {match.date}
          </div>
          <div className="flex items-center text-[10px] font-semibold uppercase">
            <img src="/world.svg" alt="world" className="h-3.5 w-3.5 mr-1 " />
            {match.location}
          </div>
        </div>
        <div>
          <img src="/campus-circuit-test.svg" alt=" " className="w-24" />
        </div>
      </div>

      <div className="flex items-center justify-between my-4 px-2">
        <div className="flex flex-col items-center space-y-2 flex-1">
          <img src={match.team1.logo} alt={match.team1.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <div className="text-center font-sans">
            <div className="text-xs font-bold tracking-wide">{match.team1.name}</div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#151515] text-white font-custom text-[8px] font-bold tracking-wider px-2 py-1 rounded-md border border-zinc-800 shadow-sm mx-2 select-none">
          VS
        </div>

        <div className="flex flex-col items-center space-y-2 flex-1">
          <img src={match.team2.logo} alt={match.team2.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <div className="text-center font-sans">
            <div className="text-xs font-bold tracking-wide">{match.team2.name}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#EAEAEA] mt-4 pt-4">
        <Button variant="gaming" className="w-full bg-[#151515] text-[10px] md:text-[11px] font-bold tracking-widest h-12 rounded-xl uppercase font-sans">
          RÉSERVER UN BILLET
        </Button>
      </div>
    </div>
  );
}
