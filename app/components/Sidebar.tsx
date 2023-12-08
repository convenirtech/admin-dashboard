"use client";
import Link from "next/link";
import { useState } from "react";
import { navlinks } from "../constants/NavLinks";

type Props = {};

function Sidebar({}: Props) {
  const [opened, closed] = useState(false);
  return (
    <aside className=" h-screen bg-gray-100 border-r-gray-300 border-r shadow-md px-2 flex flex-col justify-between max-w-fit">
      <div>
        <button
          onClick={() => closed(!opened)}
          className=" rounded-full pl-5 py-2 flex items-center justify-center"
        >
          {opened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
        <div className=" p-4 flex-col flex gap-4 min-h-screen">
          {navlinks.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="w-full rounded-lg hover:opacity-80 active:scale-95 items-center transition-all transform duration-300 p-1 gap-2 flex hover:bg-[#292929] hover:text-[#009688]"
            >
              <span>{item.icon}</span>
              <span
                className={`${
                  opened ? " w-full scale-100" : " w-0 scale-0"
                }  duration-300 origin-left`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
