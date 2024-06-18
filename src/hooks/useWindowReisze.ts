import { WaitForTimeFromLastResize } from "../libs/constants";
import { useEffect, useState } from "react";
import { debounceTime, fromEvent, tap } from "rxjs";

export const useWindowResize = () => {
  const [resized, setResized] = useState<{ isResized: boolean }>({
    isResized: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const r$ = fromEvent(window, "resize")
      .pipe(
        debounceTime(WaitForTimeFromLastResize),
        tap(() => setResized({ isResized: true }))
      )
      .subscribe();

    return () => r$.unsubscribe();
  }, []);

  return resized;
};
