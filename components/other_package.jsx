import Link from "next/link";
import React from "react";
import { PrimaryButton } from "./slider";
import { PrimaryHeading } from "./destination";
import PrimaryBtn from "./buttons/primaryBtn";
export const OtherCardHeading = (props) => {
  const { name } = props;
  return (
    <p
      className="mb-1 text-xl text-primary-500 uppercase font-bold tracking-wider font-mon lg:font-han"
      style={{ color: props.color }}
    >
      {name}
    </p>
  );
};

const OtherCard = (props) => {
  const { blogName, date, blogDetail, link, writer, image } = props;
  return (
    <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-xl md:w-[18rem] sm:w-[24rem] w-[17rem]">
      <img
        src={`https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
        className="aspect-video w-full object-cover"
        alt={`${blogName}`}
      />
      <div className="md:p-4 p-2 text-sm">
        <OtherCardHeading name="Annapurna Trek" color="#0000ffc4" />

        <p className="uppercase font-bold ">
          Nepal •{" "}
          <time className="normal-case font-normal">{"10-12 days •"} </time>
          <span className="normal-case font-normal mx-2">300$</span>
        </p>
        {/* <h3 className="text-xl font-medium text-gray-900">Hi</h3> */}
        <p className="mt-1 text-gray-500 h-[6rem] overflow-hidden">
          {/* {blogDetail}
           */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa
          sapiente quisquam quod enim quaerat, asperiores dolorem sed nam illum
          voluptate!
        </p>
        <div className="mt-4 flex gap-2 ">
          <Link href={`${link}`}>
            <button className="inline-flex items-center gap-1 rounded-full bg-[#f47b3013] px-2 py-1 text-xs font-semibold text-[#F47A30] hover:bg-[#f47b3031] transition-all duration-100 ease-in">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
const OtherPackage = () => {
  return (
    <div className="bg-[#51515109]" data-aos="fade-up" data-aos-once="true">
      <PrimaryHeading name="Other Packages" />
      <div className="grid my-6 xl:grid-cols-3 gap-y-8 justify-center max-w-[90rem] mx-auto xl:px-20 md:grid-cols-2 md:px-4 px-8">
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
      </div>
      <div className="flex justify-center my-10">
        <PrimaryBtn name="Show More" />
      </div>
      <hr />
    </div>
  );
};

export default OtherPackage;
