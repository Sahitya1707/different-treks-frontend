import React from "react";
import Footer from "./footer";
import Header from "./header";
import ContactIcon from "./contact_icon";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ContactIcon />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
