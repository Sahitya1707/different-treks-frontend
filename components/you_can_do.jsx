import Link from "next/link";
import React from "react";

const YouCanCard = (props) => {
  return (
    <div className="flex items-center mx-4">
      <span class="material-symbols-outlined p-5 bg-[#F47A30] rounded-full font-semibold">
        {props.icon}
      </span>
      <Link href={`${props.link}`}>
        <p className="mx-2 text-sm font-bold w-[6rem] tracking-wider hover:text-[#F47A30] transition-all  duration-100 ease-in">
          {props.name}
        </p>
      </Link>
    </div>
  );
};

const YouCanDo = () => {
  return (
    <div
      className="w-[100%] h-[20rem] bg-[#ff00004c] my-6 relative "
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
        <h2 className="text-white text-center text-2xl uppercase  font-semibold tracking-wide ">
          What you can Do with Us?
        </h2>
        <div className="flex mt-20 mb-4 max-w-[90rem]">
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
