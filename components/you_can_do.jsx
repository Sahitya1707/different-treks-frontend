import Link from "next/link";
import React from "react";

const YouCanCard = (props) => {
  return (
    <div className="flex items-center xl:mx-2 xl:my-0 sm:my-3 my-2 sm:w-auto ">
      <span className="material-symbols-outlined sm:p-5 bg-[#F47A30] rounded-full font-semibold p-3">
        {props.icon}
      </span>
      <Link href={`${props.link}`}>
        <p className="mx-2 sm:text-sm font-bold w-[6rem] tracking-wider hover:text-[#F47A30] transition-all  duration-100 ease-in text-xs">
          {props.name}
        </p>
      </Link>
    </div>
  );
};

const YouCanDo = () => {
  return (
    <div
      className="w-[100%] sm:h-[20rem] bg-[#ff00004c] my-6 relative h-[21rem]"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <img
        src="https://images.unsplash.com/photo-1507557000908-57f893053f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="absoulte w-[100%] h-[100%] z-[8] object-fit"
      />
      <span className="bg-[#0a486f80] absolute z-[9] h-[100%] w-[100%] top-0"></span>
      <div className="text-white absolute z-[10] top-0 left-1/2 transform -translate-x-1/2 py-6">
        <h2 className="sm:text-2xl text-md sm:pt-6 font-semibold tracking-wide text-[white] uppercase text-center w-[100%]">
          What you can Do with Us?
        </h2>
        <div
          className="flex xl:mt-20 xl:mb-4 max-w-[100rem] mt-6 sm:w-[30rem] flex-wrap justify-center xl:w-[60rem] w-[19rem]
         "
        >
          <YouCanCard link="" name="Religious Tour" icon=" temple_hindu" />
          <YouCanCard link="" name="Nepal Trekking" icon=" hiking" />
          <YouCanCard link="" name="Adventure Activities" icon=" landscape" />
          <YouCanCard link="" name="Helicopter Tours" icon=" travel_explore" />
        </div>
      </div>
    </div>
  );
};

export default YouCanDo;
