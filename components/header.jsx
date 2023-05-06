import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between px-10 text-xs py-1 bg-[white] items-center uppercase tracking-wide">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt=""
              className="w-[6rem] h-[4rem] ml-10 cursor-pointer "
            />
          </Link>
          <div className="flex mr-10 items-center ">
            <ul className="flex mr-10 ">
              <li className="px-2 mx-2">Home</li>
              <li className="px-2 mx-2">Desination</li>
              <li className="px-2 mx-2">Packages</li>
              <li className="px-2 mx-2">Adventure</li>
              <li className="px-2 mx-2">Contact</li>
              <li className="px-2 mx-2">About Us</li>
            </ul>
            <div className="px-2 flex border-2 border-black rounded-xl py-2 items-center hover:bg-[#d4d4d4] hover:transition-all hover:ease-in-out hover:duration-150 transition-all duration-100 ease-in cursor-pointer">
              <p>Select Languages</p>
              <span class="material-symbols-outlined ml-2">language</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
