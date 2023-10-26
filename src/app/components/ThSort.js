"use client";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function ThSort({ sorter, field, label, onClick }) {
  return (
    <button className="flex" onClick={() => onClick(field)}>
      {label}{" "}
      <span className="w-5 h-5">
        {sorter && sorter.field === field ? (
          sorter.direction ? (
            <ArrowDownIcon />
          ) : (
            <ArrowUpIcon />
          )
        ) : (
          ""
        )}
      </span>
    </button>
  );
}
