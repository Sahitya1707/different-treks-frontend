import React from "react";

const BreedComp = (props) => {
  return (
    <div className="bg-black ">
      <div className="flex relative text-center h-[20rem]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#0000007e] z-[100]"></div>
        <h1 className="text-3xl tracking-wider text-[#F47A30] text-sha uppercase font-bold p-4 self-center  content-center absolute text-center w-full md:text-4xl z-[101]">
          {props.section}
        </h1>
        <img
          className="w-full object-cover h-[100%] block mx-auto  sm:block sm:w-full"
          src={`${props.image}`}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default BreedComp;
