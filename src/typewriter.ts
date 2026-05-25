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
} from "rxjs";

const TypeCharacterInterval = 100;
const DeleteCharacterInterval = 100;
const WaitForNewWord = 500;
const WaitForWordDeleting = 2000;

const typeWord = (word: string) =>
  from(word).pipe(
    concatMap((char) => of(char).pipe(delay(TypeCharacterInterval))),
    map((_char, index) => word.substring(0, index + 1)),
  );

const deleteWord = (word: string) =>
  interval(DeleteCharacterInterval).pipe(
    takeWhile((index) => index < word.length),
    map((index) => word.substring(0, word.length - index - 1)),
  );

export const initTypewriter = (
  selector: string,
  words: string[],
): (() => void) => {
  const el = document.querySelector(selector);
  if (!el) return () => {};

  const typingSequence = (word: string) =>
    concat(
      typeWord(word).pipe(delay(WaitForNewWord)),
      deleteWord(word).pipe(delay(WaitForWordDeleting)),
    );

  const sub = from(words)
    .pipe(concatMap((word) => typingSequence(word)), repeat())
    .subscribe((text) => {
      el.textContent = text;
    });

  return () => sub.unsubscribe();
};
