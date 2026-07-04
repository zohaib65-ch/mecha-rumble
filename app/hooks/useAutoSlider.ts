"use client";

import { useRef, useEffect } from "react";

export function useAutoSlider(speed: number = 30) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let animationId: number;

    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      el.scrollLeft += 1;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return { sliderRef };
}
