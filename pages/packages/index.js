import BreedComp from "@/components/breedcomp";
import PrimaryBtn from "@/components/buttons/primaryBtn";
import { PrimaryHeading } from "@/components/destination";
import React from "react";
const AllPacakageCard = (props) => {
  return (
    <div className="flex h-[23rem] my-9 items-center w-[100%] px-10 justify-between">
      <img
        src="https://images.unsplash.com/photo-1615753114655-135b898df239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        className="h-[100%] w-[15rem] rounded-md"
      />
      <div className="p-6 border-r-2 border-[#F47A30] ">
        <h2 className="font-bold text-xl tracking-wide my-2">
          Annapurna Base Camp Heli tour
        </h2>
        <p></p>
        <p className=" tracking-wide  h-[8rem] overflow-hidden text-xs font-semibold text-[#878787]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique, culpa cum illum expedita assumenda quo quisquam maiores
          incidunt odit placeat quia dolor atque, alias laudantium rerum
          recusandae reprehenderit optio aliquam nobis doloribus accusamus.
        </p>
      </div>
      <div className="px-4 w-[80%] text-center">
        <span className="text-sm text-[#878787]">From</span>
        <p className="mb-6 font-bold">3900$</p>
        <div className="w-[]">
          <PrimaryBtn name="View Details" />
          {/* <button className="border-2 px-7  border-[white] text-white    tracking-wider text-sm bg-[#3E68B1] hover:transition-all hover:bg-[white] hover:border-[#3E68B1] hover:text-[#3E68B1] font-semibold rounded">
                Show More
              </button> */}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <BreedComp
        image="https://images.unsplash.com/photo-1596122440216-ba42e5a3fb09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        section="Our pacakages"
      />
      <div className="max-w-[60rem] mx-auto">
        <AllPacakageCard />
        <AllPacakageCard />
        <AllPacakageCard />
      </div>
    </div>
  );
};

export default Index;
