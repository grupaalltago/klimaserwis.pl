"use client";

import { useEffect, useState } from "react";

/** Returns true when viewport is at least `minWidth` px. */
export function useMediaQuery(minWidth: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [minWidth]);

  return matches;
}
