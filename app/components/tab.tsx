interface TabProps {
  label: string;
  selected: boolean;
  uppercase?: boolean;
}

export default function Tab({
  label = "Label",
  selected = false,
  uppercase = true,
}: TabProps) {
  return (
    <div
      className={`pb-20 font-bold ${
        uppercase ? "uppercase" : ""
      } transition-colors border-b-2 cursor-pointer ${
        selected
          ? "text-black border-black font-bold"
          : "text-gray-dark font-semibold border-transparent hover:text-black hover:border-b-2 hover:border-gray-light"
      }`}
    >
      {label}
    </div>
  );
}
