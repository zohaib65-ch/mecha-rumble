"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Hero() {
  // --- Countdown Logic ---
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "89",
    hours: "19",
    minutes: "00",
    seconds: "30",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 89);
    targetDate.setHours(targetDate.getHours() + 19);
    targetDate.setMinutes(targetDate.getMinutes() + 0);
    targetDate.setSeconds(targetDate.getSeconds() + 30);

    const timer = setInterval(() => {
      const difference = +targetDate - +new Date();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { value: timeLeft.days, label: "JOURS" },
    { value: timeLeft.hours, label: "HEURES" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDES" },
  ];

  // --- Scroll Logic ---
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto w-full">
      <div className="bg-black rounded-[32px] md:rounded-[48px] overflow-hidden border border-zinc-900 shadow-2xl relative">
        {/* Radial backdrop glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 md:py-32 md:px-16 gap-10 md:gap-14">
          {/* Status Badge */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white text-[10px] md:text-[11px] font-black tracking-widest px-8 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transform hover:scale-105 transition-transform duration-300 select-none">
            BIENTÔT DISPONIBLE
          </div>

          {/* Main Logo Text (Stacked large title) */}
          <div className="flex flex-col items-center select-none font-custom text-white leading-none">
            <h1 className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[140px] font-black tracking-wider leading-[0.8] font-custom">
              MECHA
            </h1>
            <h1 className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[140px] font-black tracking-wider leading-[0.8] font-custom mt-2">
              RUMBLE
            </h1>
          </div>

          {/* French Description */}
          <p className="text-zinc-400 text-xs sm:text-sm font-bold tracking-widest max-w-3xl leading-relaxed uppercase px-4 select-text">
            LES MEILLEURS INGÉNIEURS DE DEMAIN S'AFFRONTENT DANS LA
            <br />
            PREMIÈRE LIGUE UNIVERSITAIRE FRANÇAISE DE ROBOTIQUE DE COMBAT.
          </p>

          {/* Inline Countdown Component */}
          <div className="w-full max-w-lg mt-2">
            <div className="flex items-center justify-center bg-[#151517] border border-zinc-800/80 rounded-2xl px-6 py-4 md:px-8 md:py-5 max-w-xl mx-auto shadow-inner">
              {timeItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  {idx > 0 && (
                    <span className="text-xl md:text-3xl text-zinc-600 font-bold px-2 md:px-4 mb-3 self-center select-none animate-pulse">
                      :
                    </span>
                  )}
                  <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                    <span className="text-3xl md:text-5xl font-black text-white font-custom tracking-wider leading-none select-all transition-all duration-300">
                      {item.value}
                    </span>
                    <span className="text-[8px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest mt-2 font-sans select-none">
                      {item.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Inline Scroll Down Control using shadcn Button */}
          <div className="mt-4 md:mt-8">
            <Button
              onClick={handleScroll}
              className="inline-flex items-center space-x-3 bg-[#1d1d1f] hover:bg-[#28282b] text-zinc-400 hover:text-white text-[9px] md:text-[10px] font-bold tracking-widest h-12 px-6 rounded-full border border-zinc-800/80 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <span className="font-sans">FAITES DÉFILER POUR PLUS D'INFOS</span>
              <span className="bg-zinc-800/80 group-hover:bg-[#0e77d9] text-white p-1 rounded-full transition-colors duration-300 flex items-center justify-center">
                <ArrowDown className="h-3 w-3 animate-bounce" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
