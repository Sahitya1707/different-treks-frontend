import BreedComp from "@/components/breedcomp";
import PrimaryBtn from "@/components/buttons/primaryBtn";
import { PrimaryHeading } from "@/components/destination";
import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const AllPacakageCard = (props) => {
  return (
    <div
      className="flex h-[23rem] my-9 items-center w-[100%]  justify-between"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <img
        src={`${props.image}`}
        alt=""
        className="h-[100%] w-[15rem] rounded-md"
      />
      <div className="p-6 border-r-2 border-[#F47A30] ">
        <h2 className="font-bold text-xl tracking-wide my-2">{props.title}</h2>
        <p></p>
        <p className=" tracking-wide  h-[8rem] overflow-hidden text-xs font-semibold text-[#878787] w-[25rem]">
          {props.content}
        </p>
      </div>
      <div className="px-4 w-[80%] text-center">
        <span className="text-sm text-[#878787]">From</span>
        <p className="mb-6 font-bold">{props.price}$</p>
        {/* <Link href={`${props.link}`}> */}
        <PrimaryBtn name="View Details" link={`${props.link}`} />
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
      <div className="max-w-[60rem] mx-auto px-10 py-6">
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
          <ul className="flex flex-wrap w-[40rem]">
            {number.map((n, i) => {
              return (
                <li
                  className="py-2 px-3 border-2 border-black text-sm rounded-md mx-2 cursor-pointer transition-all hover:bg-[#F47A30] duration-150 ease-in-out hover:text-white font-semibold hover:border-white my-2"
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
