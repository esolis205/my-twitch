import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.png";

function Navbar() {
  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10 ">
      {/* Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="/"
              width="36"
              height="36"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4"></div>
      </div>
      {/* Middle */}
      {/* Right Side */}
    </div>
  );
}

export default Navbar;
