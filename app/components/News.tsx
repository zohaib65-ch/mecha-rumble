"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsList } from "../data/mockData";
import { Button } from "@/app/components/ui/button";
import { useSlider } from "@/app/hooks/useSlider";
import ViewAllLink from "./ViewAllLink";

export default function News() {
  const { sliderRef, scroll } = useSlider(320, 24);

  return (
    <section className=" w-full flex flex-col gap-12">
      {/* News Slider Section */}
      <div>
        <div className="flex items-center justify-between mb-4 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-3xl font-bold text-[#151515] uppercase tracking-wider"> Dernières actualités de MechaRumble</h2>
            <p className="text-[#151515] text-[17px] font-normal tracking-wider font-sans uppercase">Restez au cœur de l'action !</p>
          </div>
          <ViewAllLink label="Voir toutes LES ECURIES" href="#" />
        </div>
        <div className="relative group mt-3">
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

          <div ref={sliderRef} className="flex items-center space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth">
            {newsList.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-[400px] snap-start"
              >
                {/* Image Banner Container */}
                <div className="h-44 w-full relative overflow-hidden bg-zinc-100 flex-shrink-0">
                  <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="flex flex-col space-y-3">
                    {/* Tag/Year */}
                    <span className="inline-block bg-[#0e77d9] text-white text-[8px] md:text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded w-max select-none">{item.year}</span>
                    {/* Title */}
                    <h3 className="text-[11px] md:text-[12px] font-black text-zinc-900 tracking-wide leading-snug line-clamp-2 uppercase font-sans">{item.title}</h3>
                    {/* Description */}
                    <p className="text-[10px] text-zinc-500 font-bold leading-relaxed line-clamp-3 font-sans">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <div className="w-full bg-white border border-zinc-200 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-2 max-w-3xl">
          <h3 className="text-base md:text-xl font-black text-zinc-900 uppercase tracking-wider font-sans">Abonnez-vous à la newsletter MechaRumble</h3>
          <p className="text-zinc-500 text-xs font-semibold leading-relaxed font-sans">
            Inscrivez-vous à notre newsletter pour être les premiers informés de l'ouverture des ventes et des dernières actualités de MechaRumble.
          </p>
        </div>
        <Button variant="gaming" className="flex-shrink-0 text-[10px] md:text-[11px] font-black tracking-widest h-12 px-8 rounded-xl uppercase font-sans whitespace-nowrap">
          S'ABONNER MAINTENANT
        </Button>
      </div>
    </section>
  );
}
