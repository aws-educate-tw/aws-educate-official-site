"use client";

import { useEffect, useRef, useState } from "react";
import { DropdownButtonProps } from "../types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownButton = ({ title, items }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // When user click outside, close dropdown menu automatically
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 hover:text-blue-600"
      >
        {title}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute top-full left-0 bg-white rounded shadow-md mt-2 py-2 px-4 w-40 z-50">
          {items.map((item) => (
            <li
              key={item}
              className="py-1 text-sm hover:text-blue-600 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
