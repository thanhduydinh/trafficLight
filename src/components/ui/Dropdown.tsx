"use client";

import { ChevronDown } from "@/assets/icons/ChevronDown";
import { cn } from "@/config/utils";
import useClickOutside from "@/hooks/useClickOutside";
import { useState, useRef, useMemo } from "react";

type StringOrNumber = string | number;
interface DropdownItem {
  label: string;
  value: StringOrNumber;
}

type DropdownProps = {
  size?: "sm" | "lg";
  placeholder?: string;
  options: DropdownItem[];
  disabled?: boolean;
  className?: string;
  defaultValue?: StringOrNumber;
  onChange?: (value: StringOrNumber, selectedItem: DropdownItem) => void;
};

const Dropdown = ({
  size = "sm",
  placeholder,
  options,
  defaultValue = "",
  className,
  disabled = false,
  onChange,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<StringOrNumber | null>(
    defaultValue
  );
  useClickOutside(dropdownRef, () => setIsOpen(false));
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectItem = (item: DropdownItem) => {
    toggleDropdown();
    setSelectedValue(item.value);
    onChange?.(item.value, item);
  };

  const selectedLabel = useMemo(() => {
    return options.find((option) => option.value === selectedValue)?.label;
  }, [options, selectedValue]);

  return (
    <div className={cn("relative w-fit h-fit")} ref={dropdownRef}>
      <div
        className={cn(
          "flex justify-between text-base select-none cursor-pointer border border-dark-300 hover:border-primary",
          {
            "px-2 py-0.5 rounded": size === "sm",
            "px-3.5 py-2.5 rounded-xl": size === "lg",
            "text-dark-400": selectedValue === null,
            "opacity-75 pointer-events-none": disabled,
          },
          className
        )}
        onClick={toggleDropdown}
      >
        {selectedLabel || placeholder}
        <ChevronDown className="ml-2 my-auto" />
      </div>

      <div
        className={cn(
          "absolute max-h-60 w-full py-1 z-10 mt-2 mb-4 origin-top-right rounded-md bg-white shadow-lg border border-dark-300 cursor-pointer animate-[fadeInDown_0.2s] scrollbarStyle",
          isOpen ? "block" : "hidden"
        )}
      >
        {options.map((item) => (
          <div
            key={item.value}
            onClick={() => handleSelectItem(item)}
            className={cn(
              "text-dark select-none",
              item.value === selectedValue
                ? "bg-white-200 font-medium"
                : "hover:bg-white-200",
              {
                "px-3 py-1": size === "sm",
                "px-4 py-3": size === "lg",
              }
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;