import Link from "next/link";
import React from "react";

const PrimaryBtn = (props) => {
  const { link, name } = props;
  return (
    <Link href={`${link}`}>
      <button className="border-2 px-7  border-[white] text-white h-[50px]   tracking-wider text-sm bg-[#3E68B1] hover:transition-all hover:bg-[white] hover:border-[#3E68B1] hover:text-[#3E68B1] font-semibold rounded ">
        {name}
      </button>
    </Link>
  );
};

export default PrimaryBtn;
