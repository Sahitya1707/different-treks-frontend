import React from "react";
import Footer from "./footer";
import Header from "./header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
