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
        <div className=" w-[50%] pl-24">
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
            Send us a message 🚀
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
      <div>
        <PrimaryHeading name="Our Location" />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7131.409255106535!2d87.69214823842053!3d26.657938075217306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e591dca1f793c9%3A0xb1f4f38f5f98ccdf!2sAdhikari%20Home!5e0!3m2!1sen!2snp!4v1683960997145!5m2!1sen!2snp"
            // width="600"
            // height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[100%] my-4 h-[26rem]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
