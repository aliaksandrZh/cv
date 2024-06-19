import { useEffect, useRef } from "react";
import { EMPTY, Subject, catchError, debounceTime, tap } from "rxjs";

export const useLazyEventHandler = <T>(
  action: (arg: T) => unknown,
  debounce: number = 250,
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
        tap((e) => console.log(e)),
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
