"use client";
import * as RadixSelect from "@radix-ui/react-select";
import CaretDown from "../icons/CaretDown";

interface SelectItem {
  children: React.ReactNode;
  value: string;
}

interface SelectProps {
  label: string;
  disabled: boolean;
  items?: SelectItem[];
}

export default function Select({ label, disabled = true }: SelectProps) {
  return (
    <div className="w-[300px] ">
      <p className="mb-10">{label}</p>
      <RadixSelect.Root>
        <SelectTrigger disabled={disabled} />
        <RadixSelect.Portal>
          <RadixSelect.Content className="overflow-hidden bg-white shadow-md w-[300px] border">
            <RadixSelect.Viewport className="">
              <SelectItem value="test 1">Test 1</SelectItem>
              <SelectItem value="test 2">Test 2</SelectItem>
              <SelectItem value="test 3">Test 3</SelectItem>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
}

function SelectTrigger({ disabled = false }) {
  return (
    <RadixSelect.Trigger
      className="bg-white p-15 border border-black flex w-full h-[50px] justify-between items-center hover:bg-gray-light data-[placeholder]:text-gray-dark outline-none transition-colors"
      disabled={disabled}
    >
      <RadixSelect.Value placeholder="Select a label" />
      <CaretDown />
    </RadixSelect.Trigger>
  );
}

function SelectItem({ children, value }: SelectItem) {
  return (
    <RadixSelect.Item
      value={value}
      className="p-10 outline-none hover:bg-gray-light transition-colors"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
}
