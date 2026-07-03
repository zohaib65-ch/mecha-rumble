"use client";

import { useRef } from "react";

export function useSlider(cardWidth: number = 320, gap: number = 24) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const step = cardWidth + gap;
      const scrollTo =
        direction === "left" ? scrollLeft - step : scrollLeft + step;

      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return { sliderRef, scroll };
}
