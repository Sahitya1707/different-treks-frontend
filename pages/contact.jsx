import { PrimaryHeading } from "@/components/destination";
import { FiMail } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import PrimaryBtn from "@/components/buttons/primaryBtn";
const InputForm = (props) => {
  const { placeholder } = props;
  return (
    <input
      type="text"
      placeholder={`${placeholder}`}
      className="bg-[#81818131] px-4 py-2 w-[100%] rounded-md my-3 tracking-wide text-lg focus:border-[#F47A30] outline-none border-2"
    />
  );
};

const Textarea = (props) => {
  const { placeholder, name } = props;
  return (
    <textarea
      id="message"
      name={`${name}`}
      rows="4"
      placeholder={`${placeholder}`}
      className="w-full bg-[#81818131] rounded-md  tracking-wide text-lg focus:border-[#F47A30] outline-none border-2 text-gray-900 py-2 px-4 leading-8 transition-colors duration-150 ease-in-out"
    ></textarea>
  );
};

const Contact = () => {
  return (
    <div className="max-w-[70rem] mx-auto">
      <PrimaryHeading name="Contact Us" />
      <div className=" flex items-center my-8 justify-center  mx-auto w-[100%] pl-10">
        <div className="mt-10 w-[50%]">
          <h2 className="font-bold text-3xl tracking-wide font-custom">
            Let's chat.
            <br /> Tell me about your next <br />
            destination
          </h2>

          <p className="font-semibold tracking-wide text-[#818181]  mt-4 ">
            Let's book a tour 🚵
          </p>
          <div className="flex items-center mt-6 pl-4  px-4">
            <p className="p-2 bg-[#8181815f] rounded-full h-10 w-10 flex items-center justify-center">
              <FiMail />
            </p>
            <p className="px-2 text-sm">
              Mail us at
              <br />
              <Link
                href="mailto:neupanesahitya1@gmail.com"
                className="text-[#F47A30] font-semibold"
              >
                neupanesahitya1@gmail.com
              </Link>
            </p>
          </div>
        </div>
        <form action="" className="px-4 w-[50%]">
          <h2 className="font-bold text-3xl tracking-wide font-custom mb-4">
            Send us a message
          </h2>

          <InputForm placeholder="Full Name" />
          <InputForm placeholder="Address" />
          <InputForm placeholder="Email" />
          <p className="font-bold text-sm py-2 px-2">
            Tell us about you destination.
          </p>
          <Textarea placeholder="Add your destination" />
          <div className="my-4">
            <PrimaryBtn name="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
