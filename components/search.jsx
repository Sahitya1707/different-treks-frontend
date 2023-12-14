import React from "react";
import { PrimaryButton } from "./slider";
import PrimaryBtn from "./buttons/primaryBtn";
import { PrimaryHeading } from "./destination";

export const SearchDropDown = () => {
  return (
    <div className="xl:mx-1 mx-2 xl:my-0 my-2">
      <p className="text-left sm:text-sm text-xs">Select Destination</p>
      <select
        name=""
        id=""
        className=" p-2 bg-[#c1c1c2]  font-semibold sm:w-[10rem] sm:text-sm  text-xs w-[7rem]"
      >
        <option value="">Any</option>
        <option value="Nepal">Nepal</option>
      </select>
    </div>
  );
};

const Search = () => {
  return (
    <div className="xl:h-[15rem] w-[100%] bg-[#CACFD6] text-center pt-6">
      <PrimaryHeading name={"Plan your trip with us"} />

      <div className=" flex mx-auto my-6 justify-center items-center flex-row flex-wrap xl:w-auto sm:w-[24rem] w-[16rem]">
        <SearchDropDown />
        <SearchDropDown />
        <SearchDropDown />
        <SearchDropDown />
        <div className="mt-2 sm:mt-5 xl:ml-10 xl:mb-0 mb-4">
          {/* <p></p> */}
          <PrimaryBtn link="#" name="Search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
