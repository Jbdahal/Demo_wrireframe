"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { springGentle } from "@/lib/motion";

export interface CarouselSlide {
  src: string;
  alt: string;
  label?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

function circularDiff(i: number, index: number, length: number) {
  let diff = i - index;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export function Carousel({ slides }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [stageWidth, setStageWidth] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setStageWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function go(nextIndex: number) {
    setIndex((nextIndex + slides.length) % slides.length);
  }

  const step = stageWidth * 1.05;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative">
        <div
          ref={stageRef}
          className="relative mx-auto aspect-[16/11] w-[58%] sm:w-[54%]"
          style={{ perspective: 900 }}
        >
          {slides.map((slide, i) => {
            const diff = circularDiff(i, index, slides.length);
            const isVisible = Math.abs(diff) <= 1;
            const isActive = diff === 0;

            return (
              <motion.button
                key={slide.src}
                type="button"
                onClick={() => !isActive && go(i)}
                aria-label={isActive ? undefined : `Go to slide ${i + 1}`}
                aria-current={isActive}
                tabIndex={isActive ? -1 : 0}
                className={cn(
                  "absolute left-1/2 top-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-soft-alt bg-white text-left shadow-2xl",
                  isActive ? "cursor-default" : isVisible ? "cursor-pointer" : "pointer-events-none"
                )}
                style={{
                  transformOrigin: diff < 0 ? "right center" : diff > 0 ? "left center" : "center",
                }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${diff * step}px)`,
                  scale: isActive ? 1 : 0.8,
                  rotateY: isActive ? 0 : diff > 0 ? -42 : 42,
                  opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
                  zIndex: 10 - Math.abs(diff),
                }}
                transition={springGentle}
              >
                {slide.label && (
                  <div className="flex shrink-0 items-center gap-1.5 border-b border-soft-alt bg-soft px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                    <span className="ml-3 text-xs font-medium text-muted">{slide.label}</span>
                  </div>
                )}
                <div className="relative w-full flex-1 bg-soft/30">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    className="object-contain"
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-darkest shadow-lg transition-transform hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-darkest shadow-lg transition-transform hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-200",
                i === index ? "w-6 bg-primary" : "w-2 bg-soft-alt hover:bg-primary/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
