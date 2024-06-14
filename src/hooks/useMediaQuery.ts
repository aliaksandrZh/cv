import { useEffect, useState } from "react";
import {
  auditTime,
  distinctUntilChanged,
  fromEvent,
  map,
  startWith,
  tap,
} from "rxjs";
/**
 * sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
 */

const mediaThresholds = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xl2: "(min-width: 1236px)",
};

type MediaThresholds = keyof typeof mediaThresholds;
export const useMediaQueryRx = (size: MediaThresholds = "sm") => {
  const [matched, setMatched] = useState<{ isMediaQueryMatched: boolean }>({
    isMediaQueryMatched: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const r$ = fromEvent(window, "resize")
      .pipe(
        auditTime(500),
        map(() => window.matchMedia(mediaThresholds[size]).matches),
        startWith(window.matchMedia(mediaThresholds[size]).matches),
        distinctUntilChanged(),
        tap((e) => console.log("DESKTOP", e)),
        tap((e) => setMatched({ isMediaQueryMatched: e })),
      )
      .subscribe();

    return () => r$.unsubscribe();
  }, [size]);

  return matched;
};
