import Link from "next/link";
import React from "react";
import { FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactIcon = () => {
  return (
    <div className="fixed bottom-10 right-2 text-white z-[990] text-xl">
      <Link href="https://www.facebook.com/" target="_blank">
        <p className="p-2 bg-blue-700 rounded-full mt-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150">
          <FaFacebookF />
        </p>
      </Link>
      <Link href="https://wa.me/+9779804385112 " target="_blank">
        <p className="p-2 bg-green-700 rounded-full mt-2 hover:transform-y-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150">
          <FaWhatsapp />
        </p>
      </Link>
      <Link href="viber://chat?number=1234567890">
        <p className="p-2 bg-purple-700 rounded-full mt-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150">
          <FaViber />
        </p>
      </Link>
      <Link href="mailto:neupanesahitya1@gmail.com">
        <p className="p-2 bg-red-600 rounded-full mt-2 hover:translate-y-[-6px] hover:transition-all hover:duration-150 hover:ease-in ease-in transition-all duration-150">
          <FiMail />
        </p>
      </Link>
    </div>
  );
};

export default ContactIcon;
