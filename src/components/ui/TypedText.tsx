import { useTypedText } from "../../hooks/useTypedText";

export const TypedText = ({ words }: { words: string[] }) => {
  const { letters } = useTypedText(words);
  return (
    <span className="h-5 animate-blinkCaret border-r-2 border-title">
      {letters}
    </span>
  );
};
