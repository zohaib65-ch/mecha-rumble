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
    <section className="w-full">
      <div className="bg-black rounded-2xl mt-5 overflow-hidden shadow-2xl relative">
        <div className="relative z-10 flex flex-col items-center text-center py-12 px-6 md:px-16 gap-10">
          <div className="bg-gradient text-white text-[10px] md:text-[14px] font-semibold tracking-widest px-18 py-1.5 rounded-lg transform hover:scale-105 transition-transform duration-300 select-none">
            BIENTÔT DISPONIBLE
          </div>
          <div className="flex flex-col items-center select-none font-custom text-white leading-none">
            <img src="./hero-img.svg" alt="Mecha Rumble Logo" />
          </div>
          <p className="text-white text-xs sm:text-sm lg:text-lg font-bold tracking-widest max-w-4xl leading-relaxed uppercase px-4 select-text">
            LES MEILLEURS INGÉNIEURS DE DEMAIN S'AFFRONTENT DANS LA
            <br />
            PREMIÈRE LIGUE UNIVERSITAIRE FRANÇAISE DE ROBOTIQUE DE COMBAT.
          </p>

          {/* Inline Countdown Component */}
          <div className="w-full max-w-2xl mt-2">
            <div className="flex items-center justify-center bg-[#FFFFFF1A] rounded-3xl px-6 py-4 md:px-8 md:py-5 max-w-2xl mx-auto shadow-inner">
              {timeItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  {idx > 0 && (
                    <span className="flex flex-col items-center justify-center gap-1 md:gap-1.5 px-4 md:px-6 mb-3 self-center">
                      <span className="w-1 h-1 bg-white rounded-full"></span>
                      <span className="w-1 h-1 bg-white rounded-full"></span>
                    </span>
                  )}
                  <div className="flex flex-col items-center min-w-[55px] md:min-w-[80px]">
                    <span className="text-3xl md:text-5xl xl:text-[64px] bg-[#FFFFFF1A] p-2 rounded-xl font-black text-white font-custom tracking-wider leading-none select-all text-center transition-all duration-300 tabular-nums">
                      {item.value}
                    </span>
                    <span className="text-[8px] text-white font-normal tracking-widest mt-2 font-sans select-none">{item.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Inline Scroll Down Control using shadcn Button */}
          <Button
            onClick={handleScroll}
            className="inline-flex items-center space-x-3 bg-[#FFFFFF26] hover:bg-[#28282b] text-white hover:text-white text-[9px] md:text-[10px] font-bold tracking-widest h-10 px-6 rounded-2xl transition-all duration-300 cursor-pointer group shadow-lg"
          >
            <span className="font-sans">FAITES DÉFILER POUR PLUS D'INFOS</span>
            <span className="bg-[#FFFFFF1A] group-hover:bg-[#0e77d9] text-white p-2 rounded-full transition-colors duration-300 flex items-center justify-center">
              <ArrowDown className="h-3 w-3 animate-bounce" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
