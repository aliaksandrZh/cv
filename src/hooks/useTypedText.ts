import { useEffect, useState } from "react";
import {
  concat,
  concatMap,
  delay,
  from,
  interval,
  map,
  of,
  repeat,
  takeWhile,
  tap,
} from "rxjs";

const typeWord = (word: string) =>
  from(word).pipe(
    concatMap((char) => of(char).pipe(delay(100))),
    map((char, index) => word.substring(0, index + 1)),
  );

const deleteWord = (word: string) =>
  interval(50).pipe(
    takeWhile((index) => index < word.length),
    map((index) => word.substring(0, word.length - index - 1)),
  );

export const useTypedText = (words: string[]) => {
  const [letters, setLetters] = useState("");
  useEffect(() => {
    const typingSequence = (word: string) =>
      concat(
        typeWord(word).pipe(
          tap((x) => setLetters(x)),
          delay(1500),
        ),
        deleteWord(word).pipe(
          tap((x) => setLetters(x)),
          delay(500),
        ),
      );
    const words$ = from(words)
      .pipe(
        concatMap((word) => typingSequence(word)),
        repeat(),
      )
      .subscribe();
    return () => words$.unsubscribe();
  }, [words]);

  return { letters };
};
