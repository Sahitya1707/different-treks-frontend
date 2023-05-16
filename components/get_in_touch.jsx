import React from "react";
import InputForm from "./inputForm";
import Link from "next/link";
import { PrimaryHeading } from "./destination";

const GetInTouch = () => {
  return (
    <>
      <div
        className="container mx-auto py-4  my-10 xl:px-10"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <PrimaryHeading name="get in touch" />
        <div className="w-[100%] m-auto  rounded-xl p-2 my-6 flex lg:flex-row flex-col  xl:gap-4">
          <div className="bg-[#83a6adf8]  lg:w-[40%] w-[90%] lg:rounded-xl  text-[white] relative sm:rounded-2xl  rounded-lg flex flex-col items-center pt-5 xl:h-[30rem] h-[25rem] mx-auto">
            <img
              src="/images/logo.png"
              alt=""
              className="h-[9rem] w-[12rem] object-fill "
            />
            <div className="sm:px-10 lg:mt-7 sm:mt-10 mt-4 2xl:px-5 px-4">
              <h2 className="lg:text-2xl font-semibold md:text-2xl sm:text-xl tracking-wide  font-mon text-md">
                Explore. Discover. Adventure.
              </h2>
              <p className="sm:text-base sm:mt-4 text-xs mt-4">
                We offer customized tours and activities for every type of
                traveler. Our experienced guides will take you off the beaten
                path and show you the hidden gems of Nepal, Bhutan, Tibet, and
                India. Whether you're looking for adventure, culture, or
                relaxation, we've got you covered.
              </p>
            </div>
          </div>
          <form className="py-3 px-12 lg:w-[60%] lg:mt-12 relative mt-6 w-[100%] shadow">
            <div className="flex justify-between w-[100%] lg:flex-row flex-col">
              <InputForm name="First Name" placeholder="Add your First Name" />
              <InputForm name="Last Name" placeholder="Add your Last Name" />
            </div>
            <div className="flex justify-between w-[100%] lg:my-9 lg:flex-row flex-col">
              <InputForm name="Email" placeholder="Add your Email " />
              <InputForm name="Phone" placeholder="Add your Phone Number" />
            </div>
            <div className="w-[100%] lg:my-[20px]">
              <InputForm name="Message" placeholder="Add your Message" />
            </div>
            <button className="rounded-md  px-6 py-2 z-[11]  bg-[#F47A30] text-white font-semibold tracking-wider border-2 hover:transition-all hover:text-[#F47A30] hover:bg-[white] hover:border-[#F47A30] relative mt-10">
              <Link href="/">Submit</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
