"use client";

import { useInView } from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";

const FeatureInViewContext = createContext(false);

export function useFeatureInViewContext() {
  return useContext(FeatureInViewContext);
}

export function FeatureInViewProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -48px 0px",
  });

  return (
    <FeatureInViewContext.Provider value={inView}>
      <div ref={ref}>{children}</div>
    </FeatureInViewContext.Provider>
  );
}
