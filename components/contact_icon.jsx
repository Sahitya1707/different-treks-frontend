import Link from "next/link";
import React from "react";
import { FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const IconMedia = (props) => {
  const { IconName, link } = props;
  // console.log(props);
  console.log(IconName);
  return (
    <Link href={`${link}`} target="_blank">
      <p
        className="lg:p-2  rounded-full mt-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150 md:text-xl text-sm  p-[7px] font-[600]"
        style={{ backgroundColor: props.color }}
      >
        {/* hi */}
        {/* <IconName /> */}
        {/* <FaFacebookF /> */}
        {/* {children} */}
        {IconName}
      </p>
    </Link>
  );
};

const ContactIcon = () => {
  return (
    <div className="fixed bottom-5 lg:bottom-10 right-1 lg:right-2 text-white z-[990] text-xl">
      {/* <Link href="https://www.facebook.com/" target="_blank">
        <p className="p-2 bg-blue-700 rounded-full mt-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150">
          <FaFacebookF />
        </p>
      </Link> */}

      {/* <IconMedia color="blue" IconName={<FaFacebookF />} link="/" /> */}
      <IconMedia
        IconName={<FaFacebookF />}
        color="blue"
        link="https://www.facebook.com/"
      />
      <IconMedia
        IconName={<FaWhatsapp />}
        color="green"
        link="https://wa.me/+9779804385112"
      />
      <IconMedia
        IconName={<FaViber />}
        color="purple"
        link="https://wa.me/+9779804385112"
      />
      <IconMedia
        IconName={<FiMail />}
        color="red"
        link="mailto:neupanesahitya1@gmail.com"
      />
    </div>
  );
};

export default ContactIcon;
