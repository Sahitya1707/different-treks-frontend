import React from "react";
import Master from "./master";

const Adminlayout = ({ children }) => {
  return (
    <div className="flex">
      <Master />
      <div className="ml-10">{children}</div>
    </div>
  );
};

export default Adminlayout;
