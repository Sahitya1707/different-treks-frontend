import Link from "next/link";
import React from "react";

export const DestinationBtn = (props) => {};

const DestinationCard = (props) => {
  const { country, link, image } = props;
  return (
    <div className="relative md:h-[16rem] md:w-[17rem] rounded-xl border-black border-2 overflow-hidden md:mx-2 my-2 sm:w-[30rem] sm:h-[20rem] w-[22rem] h-[14rem]">
      <img
        src={`${image}`}
        alt=""
        className="object-center object-fit h-[100%]  w-[100%] hover:scale-110 hover:object-fit  transition-all ease-in duration-200 hover:duration-500 hover:transition-all hover:ease-out rounded-xl z-[9] top-0"
      />
      {/* <span className="absolute top-0 z-[10] bg-[#29292965] w-[100%] h-[100%]"></span> */}
      <div className="absolute top-1/2  text-sm left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[11]">
        <p
          className="uppercase text-2xl font-extrabold tracking-widest my-3 font-mon lg:font-han "
          style={{ color: props.textColor }}
        >
          {country}
        </p>
        <Link href={`${link}`}>
          <button
            className="rounded-md  px-6 py-2 z-[11]  bg-[#F47A30] text-white font-semibold tracking-wider border-2 hover:transition-all hover:text-[#F47A30] hover:bg-[white] hover:border-[#F47A30] relative"
            //   style={{ backgroundColor: "red" }}
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};
export const PrimaryHeading = (props) => {
  return (
    <h2 className="sm:text-2xl text-xl pt-6 font-semibold tracking-wide text-[#3E68B1] uppercase text-center ">
      {props.name}
    </h2>
  );
};

const Destination = () => {
  return (
    <div
      className="mx-auto w-[95%] max-w-[90rem] sm:px-0 px-6"
      data-aos="fade-up"
      // data-aos-once="true"
    >
      {/* <h2 className="text-2xl pt-6 font-semibold tracking-wide text-[#3E68B1] uppercase text-center ">
        our Destination
      </h2> */}
      <PrimaryHeading name="our destination" />
      <div className="my-6 flex justify-center flex-wrap ">
        <DestinationCard
          image="https://images.unsplash.com/photo-1553886334-43d24f24d3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80"
          country="Nepal"
          textColor="#7aeff7"
        />
        <DestinationCard
          image="https://images.unsplash.com/photo-1599476160130-3af44b69ec6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80"
          country="india"
          textColor="rgb(255 215 95)"
        />
        <DestinationCard
          image="https://images.unsplash.com/photo-1560389959-e4e81f5dca86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          country="tibet"
          textColor="rgb(154 255 95)"
        />
        <DestinationCard
          image="https://images.unsplash.com/photo-1578556881786-851d4b79cb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          country="Bhutan"
          textColor="rgb(255 95 138)"
        />
      </div>
    </div>
  );
};

export default Destination;
