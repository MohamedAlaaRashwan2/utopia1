"use client";

import { type ReactNode, useMemo } from "react";
import { useLenis } from "@/hooks/useLenis";

type LenisProviderProps = {
  children: ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisOptions = useMemo(
    () => ({
      duration: 1.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    }),
    [],
  );

  useLenis(lenisOptions);

  return <>{children}</>;
}
