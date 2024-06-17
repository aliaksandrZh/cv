import {
  DeleteCharacterInterval,
  TypeCharacterInterval,
  WaitForNewWord,
  WaitForWordDeleting,
} from "@/libs/constants";
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
    concatMap((char) => of(char).pipe(delay(TypeCharacterInterval))),
    map((char, index) => word.substring(0, index + 1)),
  );

const deleteWord = (word: string) =>
  interval(DeleteCharacterInterval).pipe(
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
          delay(WaitForWordDeleting),
        ),
        deleteWord(word).pipe(
          tap((x) => setLetters(x)),
          delay(WaitForNewWord),
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
