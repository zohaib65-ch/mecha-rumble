"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsList } from "../data/mockData";
import { Button } from "@/app/components/ui/button";
import { useSlider } from "@/app/hooks/useSlider";
import ViewAllLink from "./ViewAllLink";
import NewsCard from "./cards/NewsCard";

export default function News() {
  const { sliderRef, scroll } = useSlider(320, 24);

  return (
    <section className=" w-full flex flex-col gap-8">
      <div>
      <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between mb-4 pb-4">
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
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <div className="w-full bg-white rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-base md:text-[21px] font-bold text-[#151515] uppercase tracking-wider font-sans">Abonnez-vous à la newsletter MechaRumble</h3>
          <p className="text-[#151515] text-[13px] font-normal leading-relaxed">
            Inscrivez-vous à notre newsletter pour être les premiers informés de l'ouverture des ventes et des dernières actualités de MechaRumble.
          </p>
        </div>
        <Button variant="gaming" className="flex-shrink-0 text-[10px] md:text-[11px] font-bold tracking-widest h-12 px-8 rounded-xl uppercase font-sans whitespace-nowrap">
          S'ABONNER MAINTENANT
        </Button>
      </div>
    </section>
  );
}
