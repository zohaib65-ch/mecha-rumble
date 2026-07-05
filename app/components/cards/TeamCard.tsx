import { Team } from "@/app/types";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="flex-shrink-0 w-24 h-24 md:w-auto md:h-auto md:aspect-square bg-white rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm flex flex-col items-center justify-center p-3 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
      <img src={team.logo} alt={team.name} className="object-contain mb-2" />
      <span className="text-[8px] md:text-[11px] text-[#151515] font-bold text-center uppercase  w-full">{team.name}</span>
    </div>
  );
}
