import BreedComp from "@/components/breedcomp";
import PrimaryBtn from "@/components/buttons/primaryBtn";
import { PrimaryHeading } from "@/components/destination";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const AllPacakageCard = (props) => {
  return (
    <div
      className="flex xl:h-[23rem] my-9 items-center xl:w-[100%]  xl:justify-between xl:flex-row flex-col justify-center md:w-[27rem] sm:w-[22rem] mx-auto xl:shadow-none shadow-xl xl:rounded-none rounded-md w-[20rem]"
      // data-aos="fade-up"
      // data-aos-once="true"
    >
      <img
        src={`${props.image}`}
        alt=""
        className="h-[20rem] w-[100%] xl:w-[15rem] rounded-md xl:h-[100%]"
      />
      <div className="xl:p-6 xl:border-r-2 border-[#F47A30]  md:p-2 p-4">
        <h2 className="font-bold md:text-xl tracking-wide xl:mt-2 text-md xl:text-black text-[#F47A30]">
          {props.title}
        </h2>
        <div className="flex items-center">
          <p className="my-1 text-sm">
            <FaCalendarAlt />
          </p>
          <time className="text-xs font-semibold mx-1">10-20 days</time>
          <span className="text-xs font-bold">|</span>
          <p className="mx-1 font-bold text-sm">Trekking</p>
        </div>
        <p className="font-mon font-bold text-sm uppercase tracking-wide text-[#38aeb4] xl:text-black">
          Nepal
        </p>
        <p className=" tracking-wide  h-[8rem] overflow-hidden text-xs font-semibold text-[#878787] md:w-[25rem] xl:mb-0 mb-2">
          {props.content}
        </p>
      </div>
      <div className="px-4 w-[80%] text-center">
        <div>
          <span className="text-sm text-[#878787]">From</span>
          <s className="mx-2 text-md text-[#878787]">2000$</s>
        </div>
        <p className="xl:mb-6 font-bold mb-2">{props.price}$</p>
        {/* <Link href={`${props.link}`}> */}
        <div className="xl:my-0 my-2">
          <PrimaryBtn name="View Details" link={`${props.link}`} />
        </div>
        {/* </Link> */}
        {/* <button className="border-2 px-7  border-[white] text-white    tracking-wider text-sm bg-[#3E68B1] hover:transition-all hover:bg-[white] hover:border-[#3E68B1] hover:text-[#3E68B1] font-semibold rounded">
                Show More
              </button> */}
      </div>
    </div>
  );
};

const Index = () => {
  const data = [
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Annapurna Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
    {
      link: "/",
      title: " Dhaulagiri Base Camp Heli tour",
      content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.`,
      image: `https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      price: "3000",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPagination, setCurrentPagination] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  // console.log(records);
  // console.log(npage);
  console.log(number);
  return (
    <div>
      <BreedComp
        image="https://images.unsplash.com/photo-1596122440216-ba42e5a3fb09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        section="Our pacakages"
      />
      <div className="xl:max-w-[60rem] mx-auto xl:px-10 py-6 px-6 overflow-hidden">
        <p className="text-base">
          Embark on an unforgettable journey through the stunning landscapes and
          rich cultures of Nepal, Bhutan, Tibet, and India with our
          comprehensive selection of tour packages. We offer a range of packages
          tailored to your interests, including trekking tours, cultural tours,
          adventure activities, wildlife safaris, and more.
          <br />
          <br />
          Our trekking tours take you on a journey through the Himalayan
          mountain range, offering breathtaking views of some of the world's
          highest peaks. Whether you are an experienced hiker or a beginner, we
          have a trekking tour for you.
          <br />
          <br />
          So come, join us on an adventure of a lifetime, and experience the
          beauty and culture of the Himalayas with us. Book your tour today!
          <br />
          <br />
          Let's see our all packages:
        </p>
        {records.map((d, i) => {
          return (
            <AllPacakageCard
              key={i}
              image={d.image}
              title={d.title}
              price={d.price}
              content={d.content}
            />
          );
        })}

        <div className="pagination">
          <ul className="flex flex-wrap xl:w-[40rem] xl:ml-0 ml-8">
            {number.map((n, i) => {
              return (
                <li
                  className="py-2 px-3  border-2 border-black text-sm rounded-md mx-2 cursor-pointer transition-all hover:bg-[#F47A30] duration-150 ease-in-out hover:text-white font-semibold hover:border-white xl:my-2 my-3"
                  key={i}
                  onClick={() => {
                    setCurrentPage(n);
                  }}
                >
                  {n}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
