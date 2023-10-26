"use client";

import { useState } from "react";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-main border-2 rounded-lg my-2">
      <div
        className={`flex justify-between bg-main text-white px-4 py-2 ${
          isOpen ? "border-main border-b-2" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title}
        <span
          className={`scale-y-[1.75] transition duration-150 ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
        >
          {"<"}
        </span>
      </div>
      {isOpen && <div className="p-4">{props.children}</div>}
    </div>
  );
}

export default Accordion;
