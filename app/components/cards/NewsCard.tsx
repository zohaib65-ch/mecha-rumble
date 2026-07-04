import React from "react";
import { NewsItem } from "@/app/types";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-[320px] snap-start">
      <div className="h-44 w-full relative bg-zinc-100 flex-shrink-0">
        <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
        <span className="absolute bottom-0 left-4 translate-y-1/2 bg-[#0DABEE] text-white text-[8px] md:text-[10px] font-bold tracking-widest px-2 py-0.5 rounded w-max select-none z-10">
          {item.year}
        </span>
      </div>
      <div className="p-4 pt-5 flex flex-col justify-between flex-grow">
        <div className="flex flex-col space-y-2">
          <h3 className="text-[11px] md:text-[13px] font-bold text-[#151515] tracking-wide leading-snug line-clamp-2 uppercase font-sans">
            {item.title}
          </h3>
          <p className="text-[12px] text-[#858585] font-medium leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
