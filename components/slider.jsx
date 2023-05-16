import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export const PrimaryButton = (props) => {
  const { link, name } = props;
  return (
    <Link href={`${link}`}>
      <button className="border-2 px-7  border-[white] text-white h-[50px]   tracking-wider text-sm bg-[#3E68B1] hover:transition-all hover:bg-[white] hover:border-[#3E68B1] hover:text-[#3E68B1] font-semibold mt-6 rounded flex items-center  flex-row">
        <span> {name} </span>
        <span class="material-symbols-outlined mx-2 text-sm mt-[5px]">
          arrow_forward
        </span>
      </button>
    </Link>
  );
};

const Slider = () => {
  const datas = [
    {
      heading: "  Explore the Best of the Himalayas with Us",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      content: `Our team of experienced guides will take you on an
                  unforgettable journey through the stunning Himalayan region.
                  From challenging treks to breathtaking helicopter tours, weve
                  got it all.`,
      buttonName: "Explore",
    },
    {
      heading: " Discover the Rich Culture of Nepal",
      link: "#",
      image: "https://www.visittnt.com/images/festival-in-nepal.jpg",
      content: `Experience the vibrant culture of Nepal on our cultural tour, where you'll immerse yourself in the traditions, customs, and history of this fascinating country. From ancient temples to colorful festivals, you'll explore the best of Nepali culture and gain a deeper understanding of its people.`,
      buttonName: "Know More",
    },
    {
      heading: "Journey Through the Land of Temples and Monuments",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1518618318646-9948b68f9c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: `Embark on a journey through the land of temples and monuments on our cultural tour of Nepal. Explore the country's most famous landmarks, including the UNESCO World Heritage Sites of Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath Temple, and learn about their cultural and historical significance.`,
      buttonName: " Our Packages",
    },
    {
      heading: "Challenge Yourself and Achieve New Heights",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1519719498756-2f0d81cdf13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80",
      content: `Our trekking tour offers the ultimate challenge for adventure seekers, with challenging terrain and high-altitude treks that push you to your limits. With the support of experienced guides and fellow trekkers, you'll achieve new heights and overcome obstacles you never thought possible.`,
      buttonName: "Read More",
    },
    {
      heading: "Experience the Thrill of Climbing in the Himalayas",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      content: `Our trekking tour offers the ultimate challenge for adventure seekers, with challenging terrain and high-altitude treks that push you to your limits. With the support of experienced guides and fellow trekkers, you'll achieve new heights and overcome obstacles you never thought possible.`,
      buttonName: "Click here",
    },
    {
      heading: "Discover Our Other Destinations: Tibet, Bhutan, and India",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      content: `Explore the rich culture and spirituality of Tibet, the enchanting land of Bhutan, and the diversity of vibrant India with our travel packages. Our experienced guides will lead you on an unforgettable journey filled with breathtaking sights, unique experiences, and cherished memories. Discover our other destinations today and start planning your next adventure!`,
      buttonName: "Discover",
    },
  ];
  return (
    <>
      <div className=" ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {datas.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" h-[80vh] w-[100vw] bg-[black] relative">
                  <img
                    src={`${data.image}`}
                    alt=""
                    className="w-[100%] h-[100%] object-fill absolute top-0 z-[10]"
                  />
                  <span className="w-[100%] h-[100%] bg-[#2c2c2ca9] absolute z-[11]"></span>
                  <div className="z-[199] absolute xl:top-1/2 xl:left-[100px] transform   -translate-y-1/2 xl:p-0 xl:px-0 px-4 top-[50%]">
                    <h2
                      className="
                text-[#F47A30]
                 font-bold tracking-wider xl:text-2xl uppercase xl:mb-2 lg:font-han font-han 
                 lg:text-xl text-sm
                 
                 "
                    >
                      {data.heading}
                    </h2>
                    <p className="text-white xl:w-[54%] xl:my-2 xl:text-sm text-xs tracking-wide xl:mb-10 my-1 xl:pr-0 pr-6 mb-4">
                      {data.content}
                    </p>
                    <Link href={`${data.link}`}>
                      <button className="border-2 xl:px-7  border-[white] text-white xl:h-[50px]   tracking-wider xl:text-sm bg-[#3E68B1] hover:transition-all hover:bg-[white] hover:border-[#3E68B1] hover:text-[#3E68B1] font-semibold  rounded flex items-center  flex-row text-xs px-6 h-[40px]">
                        <span> {data.buttonName} </span>
                        <span class="material-symbols-outlined mx-2 xl:text-sm mt-[5px] text-xs">
                          arrow_forward
                        </span>
                      </button>
                    </Link>
                    {/* <PrimaryButton link={`${data.link}`} name={data.buttonName}/> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
