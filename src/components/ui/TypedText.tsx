import { useTypedText } from "@/hooks/useTypedText";

export const TypedText = ({ words }: { words: string[] }) => {
  const { letters } = useTypedText(words);
  return (
    <span className="animate-blinkCaret h-5 border-r-2 border-red">
      {letters}
    </span>
  );
};
