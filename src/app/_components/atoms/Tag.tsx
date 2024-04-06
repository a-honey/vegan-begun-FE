export default function Tag({ text }: { text: string }) {
  return (
    <div>
      <span>#</span>
      {text}
    </div>
  );
}
