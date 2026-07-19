"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springGentle } from "@/lib/motion";

const CAPE_REST =
  "M118,50 C150,58 176,86 182,130 C184,160 178,188 164,210 C150,190 138,168 132,144 C126,118 120,84 118,50 Z";
const CAPE_BILLOW_OUT =
  "M118,50 C158,54 192,78 202,124 C206,158 196,190 176,214 C158,192 142,168 134,144 C126,118 120,84 118,50 Z";
const CAPE_BILLOW_IN =
  "M118,50 C142,60 164,90 168,130 C170,156 166,182 156,204 C144,186 134,166 130,144 C125,118 120,84 118,50 Z";

const SPEED_LINES = [
  { x1: 8, y1: 168, x2: 8, y2: 206, delay: 0 },
  { x1: -10, y1: 188, x2: -10, y2: 218, delay: 0.3 },
  { x1: 26, y1: 200, x2: 26, y2: 233, delay: 0.6 },
];

function FigureMarkup({ capeD }: { capeD: string }) {
  return (
    <g transform="rotate(-22 100 130)">
      {SPEED_LINES.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#speedGradient)"
          strokeWidth={4}
          strokeLinecap="round"
          opacity={0.35}
        />
      ))}
      <path d={capeD} fill="url(#capeGradient)" opacity={0.92} />
      <path
        d="M88,122 C82,148 74,172 62,192 L48,182 C60,158 70,136 80,120 Z"
        fill="url(#bodyGradient)"
      />
      <path
        d="M112,122 C118,150 122,178 128,206 L142,200 C132,172 124,146 116,120 Z"
        fill="url(#bodyGradient)"
      />
      <path
        d="M84,56 C66,64 54,80 50,100 L62,104 C70,86 82,72 96,64 Z"
        fill="url(#bodyGradient)"
      />
      <path
        d="M82,52 C74,70 76,96 84,122 L116,122 C124,96 126,70 118,52 C110,60 90,60 82,52 Z"
        fill="url(#bodyGradient)"
      />
      <path
        d="M116,56 C136,50 152,38 160,20 L172,26 C162,48 144,64 122,74 Z"
        fill="url(#bodyGradient)"
      />
      <circle cx={100} cy={34} r={14} fill="url(#bodyGradient)" />
    </g>
  );
}

function GradientDefs() {
  return (
    <defs>
      <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#422d6f" />
        <stop offset="100%" stopColor="#5a37a4" />
      </linearGradient>
      <linearGradient id="capeGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5a37a4" />
        <stop offset="100%" stopColor="#be9fff" />
      </linearGradient>
      <linearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#be9fff" stopOpacity="0" />
        <stop offset="100%" stopColor="#f6f1ff" stopOpacity="0.9" />
      </linearGradient>
    </defs>
  );
}

export function HeroVisual() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-strong/25 blur-3xl" />
        <svg
          viewBox="-20 0 240 260"
          className="relative h-auto w-full"
          role="img"
          aria-label="A heroic figure in flight, cape trailing behind"
        >
          <GradientDefs />
          <FigureMarkup capeD={CAPE_REST} />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-strong/25 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={springGentle}
        className="relative"
      >
        <motion.svg
          viewBox="-20 0 240 260"
          className="h-auto w-full"
          role="img"
          aria-label="A heroic figure in flight, cape trailing behind"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <GradientDefs />
          <g transform="rotate(-22 100 130)">
            {SPEED_LINES.map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#speedGradient)"
                strokeWidth={4}
                strokeLinecap="round"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: line.delay,
                }}
              />
            ))}
            <motion.path
              fill="url(#capeGradient)"
              opacity={0.92}
              animate={{ d: [CAPE_REST, CAPE_BILLOW_OUT, CAPE_BILLOW_IN, CAPE_REST] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <path
              d="M88,122 C82,148 74,172 62,192 L48,182 C60,158 70,136 80,120 Z"
              fill="url(#bodyGradient)"
            />
            <path
              d="M112,122 C118,150 122,178 128,206 L142,200 C132,172 124,146 116,120 Z"
              fill="url(#bodyGradient)"
            />
            <path
              d="M84,56 C66,64 54,80 50,100 L62,104 C70,86 82,72 96,64 Z"
              fill="url(#bodyGradient)"
            />
            <path
              d="M82,52 C74,70 76,96 84,122 L116,122 C124,96 126,70 118,52 C110,60 90,60 82,52 Z"
              fill="url(#bodyGradient)"
            />
            <path
              d="M116,56 C136,50 152,38 160,20 L172,26 C162,48 144,64 122,74 Z"
              fill="url(#bodyGradient)"
            />
            <circle cx={100} cy={34} r={14} fill="url(#bodyGradient)" />
          </g>
        </motion.svg>
      </motion.div>
    </div>
  );
}
