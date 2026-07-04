import { Team } from "../types";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="flex-shrink-0 w-24 h-24 md:w-auto md:h-auto md:aspect-square bg-white rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center justify-center p-3 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="flex-1 flex items-center justify-center">
        <img src={team.logo} alt={team.name} className="w-14 h-14 md:h-auto md:w-22 object-contain" />
      </div>
      <span className="text-[8px] md:text-[11px] text-[#151515] font-bold tracking-wider text-center uppercase truncate w-full">{team.name}</span>
    </div>
  );
}
