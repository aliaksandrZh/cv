import { useEffect, useRef } from "react";
import { EMPTY, Subject, catchError, debounceTime, tap } from "rxjs";
import { DebounceEventTime } from "../libs/constants";

export const useLazyEventHandler = <T>(
  action: (arg: T) => unknown,
  debounce: number = DebounceEventTime,
) => {
  const e$ = useRef(new Subject<T>());

  const onEvent = (event: T) => {
    e$.current.next(event);
  };

  useEffect(() => {
    const events$ = e$.current
      .pipe(
        debounceTime(debounce),
        tap((e) => action(e)),
        catchError((error) => {
          console.error("Error in pipeline:", error);
          return EMPTY;
        }),
      )
      .subscribe();

    return () => events$.unsubscribe();
  }, [action, debounce]);

  return { onEvent };
};
