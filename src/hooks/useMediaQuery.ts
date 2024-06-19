import { useEffect, useState } from "react";
import {
  auditTime,
  distinctUntilChanged,
  fromEvent,
  map,
  startWith,
  tap,
} from "rxjs";
import { WaitForTimeFromLastResize } from "../libs/constants";

/**
  https://tailwindcss.com/docs/responsive-design
 */

const mediaThresholds = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xl2: "(min-width: 1236px)",
};

type MediaThresholds = keyof typeof mediaThresholds;
export const useMediaQueryRx = (size: MediaThresholds = "md") => {
  const [matched, setMatched] = useState<{ isMediaQueryMatched: boolean }>({
    isMediaQueryMatched: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const r$ = fromEvent(window, "resize")
      .pipe(
        auditTime(WaitForTimeFromLastResize),
        map(() => window.matchMedia(mediaThresholds[size]).matches),
        startWith(window.matchMedia(mediaThresholds[size]).matches),
        distinctUntilChanged(),
        tap((e) => setMatched({ isMediaQueryMatched: e })),
      )
      .subscribe();

    return () => r$.unsubscribe();
  }, [size]);

  return matched;
};
