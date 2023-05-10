import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { PrimaryHeading } from "./destination";
import { Autoplay } from "swiper";
import Link from "next/link";

const PackageCard = (props) => {
  const { blogName, date, blogDetail, link, writer, image } = props;
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl ">
      <img
        src={`https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
        className="aspect-video w-full object-cover"
        alt={`${blogName}`}
      />
      <div className="p-4">
        <p className="mb-1 text-xl text-primary-500 uppercase font-bold tracking-wider font-custom text-[#F47A30]">
          {"Annapurna Trek"}{" "}
        </p>
        <p className="uppercase font-bold">
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
        <div className="mt-4 flex gap-2">
          <Link href={`${link}`}>
            <button className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100 transition-all duration-100 ease-in">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularPackage = () => {
  return (
    <div
      className="w-[100%] bg-[#CACFD6] px-20 "
      data-aos="fade-up"
      data-aos-once="true"
    >
      <PrimaryHeading name="popular packages" />
      <div className="mt-10 mb-6  mx-auto pb-7">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[
            Autoplay,
            // Pagination
          ]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={
            {
              // dynamicBullets: true,
            }
          }
          loop={true}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6].map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <PackageCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularPackage;
