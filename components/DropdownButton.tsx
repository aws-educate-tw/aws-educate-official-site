"use client";

import { useState } from "react";
import { DropdownButtonProps } from "../types";

const DropdownButton = ({ title, items }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 hover:text-blue-600"
      >
        {title}
        <span className="text-xs">▼</span>
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
