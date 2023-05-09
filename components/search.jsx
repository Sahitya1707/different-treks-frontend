import React from "react";
import { PrimaryButton } from "./slider";
import PrimaryBtn from "./buttons/primaryBtn";

const Search = () => {
  return (
    <div className="h-[15rem] w-[100%] bg-[#CACFD6] text-center pt-6">
      <h4 className="text-2xl pt-6 font-semibold tracking-wide text-[#3E68B1] uppercase">
        Plan your Trip with us
      </h4>
      <div className=" flex mx-auto my-6 justify-center items-center">
        <div className="mx-1">
          <p className="text-left text-sm">Select Destination</p>
          <select
            name=""
            id=""
            className=" p-2 bg-[#c1c1c2]  font-semibold w-[10rem] text-sm "
          >
            <option value="">Any</option>
            <option value="Nepal">Nepal</option>
          </select>
        </div>
        <div className="mx-1">
          <p className="text-left text-sm">Select Duration</p>
          <select
            name=""
            id=""
            className=" p-2 bg-[#c1c1c2]  font-semibold w-[10rem] text-sm "
          >
            <option value="">Any</option>
            <option value="Nepal">10-20 days</option>
          </select>
        </div>
        <div className="mx-1">
          <p className="text-left text-sm">Select packages</p>
          <select
            name=""
            id=""
            className=" p-2 bg-[#c1c1c2]  font-semibold w-[10rem] text-sm "
          >
            <option value="">Any</option>
            <option value="Nepal">Trekking</option>
          </select>
        </div>
        <div className="mx-1">
          <p className="text-left text-sm">Select packages</p>
          <select
            name=""
            id=""
            className=" p-2 bg-[#c1c1c2]  font-semibold w-[10rem] text-sm "
          >
            <option value="">Any</option>
            <option value="Nepal">Trekking</option>
          </select>
        </div>
        <div className=" mt-5 ml-10">
          {/* <p></p> */}
          <PrimaryBtn link="#" name="Search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
