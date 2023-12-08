"use client";
import { type } from "os";
import { useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className=" flex items-center justify-between py-4 px-4 text-white relative bg-slate-700 w-full">
      <div className=" flex items-center md:space-x-10 lg:space-x-20">
        <div className=" font-semibold text-2xl">
          <a href="/">
            Con<span className=" text-[#ca2124]">ven</span>ir
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
