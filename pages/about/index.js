import BreedComp from "@/components/breedcomp";
import React from "react";

const Index = () => {
  return (
    <>
      <BreedComp
        image="https://www.andbeyond.com/wp-content/uploads/sites/5/nepal-village.jpg"
        section="About Us"
      />
      <section className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="https://www.telegraph.co.uk/content/dam/Travel/leadAssets/35/50/nepal-village_3550720a.jpg?imwidth=680"
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
                we believe that the journey is just as important as the
                destination. Our passion for trekking and exploration has led us
                to create a platform where adventurers of all levels can
                discover, plan, and embark on unforgettable trekking
                experiences. Whether you're a seasoned mountaineer or a novice
                hiker, we're here to inspire and guide you on your quest for
                breathtaking landscapes and exhilarating challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                className="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89W2BHjcQiRIvTGqAQ04wImNBWRrNGf4kmw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
                Our story
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Founded on 1992
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Our team is made up of experienced trekkers, travel experts, and
                tech enthusiasts who came together with a common goal – to make
                trekking accessible, enjoyable, and safe for everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://unsplash.com/photos/trekker-in-khumbu-valley-on-a-way-to-everest-base-camp-t3AIZ7GLMaU"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-[#d68a27] uppercase">
                Our Mission
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Let's dive into it
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                At the core of our mission is the belief that nature has the
                power to heal, inspire, and transform. We strive to facilitate
                meaningful connections between people and the diverse landscapes
                our planet has to offer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
