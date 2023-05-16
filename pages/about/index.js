import BreedComp from "@/components/breedcomp";
import React from "react";

const Index = () => {
  return (
    <>
      <BreedComp
        image="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        section="About Us"
      />
      <section className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
                About Us
              </p>
              {/* <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Design Made Easy
              </h3> */}
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Crafting your user experience has never been easier, with our
                intuitive drag'n drop interface you will be creating beatiful
                designs in no time.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                className="rounded-lg shadow-xl"
                src="https://plus.unsplash.com/premium_photo-1668058723804-d7dcd1ffa4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
                know your data
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Optimized For Conversions
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Backed by data, these templates have been crafted for ultimate
                optimization. Now, converting your visitors into customers is
                easier than ever before.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
                Easy to customize
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Make It Your Own
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                All templates and components are fully customizable. You can use
                these templates to tell your personal story and convey your
                message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
