import Link from "next/link";
import React, { useState, useEffect } from "react";

const DropDownComponent = (props) => {
  const {
    name,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    link,
    link_1,
    link_2,
    link_3,
    link_4,
    link_5,
    link_6,
  } = props;
  return (
    <li className="xl:px-2 xl:mx-2 py-2 px-2 hover-trigger xl:h-[100%] items-center flex ">
      <div className="flex items-center">
        <Link href={`${link}`}> {name}</Link>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </div>
      <ul className="absolute bg-[white] top-[75px]  w-[250px] border-l-2 border-l-[#6868681e]  hover-target z-[998]">
        {item_1 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_1}`}>{item_1}</Link>
          </li>
        ) : null}
        {item_2 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_2}`}>{item_2}</Link>
          </li>
        ) : null}
        {item_3 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_3}`}>{item_3}</Link>
          </li>
        ) : null}
        {item_4 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_4}`}>{item_4}</Link>
          </li>
        ) : null}
        {item_5 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_5}`}>{item_5}</Link>
          </li>
        ) : null}
        {item_6 ? (
          <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
            <Link href={`${link_6}`}>{item_6}</Link>
          </li>
        ) : null}
      </ul>
    </li>
  );
};
const HeaderList = (props) => {
  return (
    <li className="xl:px-2 xl:mx-2 py-2 px-2 flex items-center cursor-pointer">
      <Link href={`${props.link}`}>{props.name}</Link>
    </li>
  );
};
const LanguageList = (props) => {
  return (
    <li className="px-4 py-2 border-b-[1px] border-b-[#6868681e] hover:bg-[#d4d4d4] duration-150 transition-all ease-in">
      {props.name}
    </li>
  );
};

const Header = () => {
  const [language, setLanguage] = useState(false);
  const [menu, setMenu] = useState(true);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  // console.log(offset);
  // console.log(window.pageYOffset);
  return (
    <>
      <header className="xl:static ">
        <nav
          className={
            offset < 800
              ? " flex xl:justify-between xl:px-10 text-sm  xl:h-[4rem] bg-[white] xl:items-center uppercase tracking-wider font-normal border-b-[1px] border-[#f687336c] z-999 transition-all ease-in-out duration-100 xl:flex-row flex-col items-start xl:pl-0 pl-6 w-[100vw] overflow-hidden  xl:text-xs fixed top-0 z-[999] xl:static"
              : "flex justify-between px-10 text-sm xl:text-xs xl:h-[4rem] bg-[white] xl:items-center uppercase tracking-wider font-normal border-b-[1px] border-[#f687336c] ease-in-out duration-100 transition-all left-0 xl:flex-row flex-col items-start"
            // z-999 fixed top-0 w-[100%]
            // z-[988]
          }
        >
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt=""
              className="w-[6rem] h-[4rem] xl:ml-10 cursor-pointer xl:my-0 my-4"
            />
          </Link>
          <div className="flex xl:mr-10 items-center h-[100%]">
            <ul
              className={`flex xl:items-center xl:h-[100%] xl:flex-row flex-col ${
                menu ? "h-0 overflow-hidden" : "h-[15rem]"
              }  transition-all duration-4000 ease-in-out`}
            >
              {/* <li className="px-2 mx-2 flex items-center cursor-pointer">
                Home
              </li> */}
              <HeaderList name="Home" link="/" />

              <DropDownComponent
                name="destination"
                link="/destination"
                item_1="nepal"
                item_2="india"
                item_3="tibet"
                item_4=""
                link_1=""
                link_2=""
                link_3=""
                link_4=""
              />
              <DropDownComponent
                name="pACKAGES"
                link="/packages"
                item_1="Trekking"
                item_2="Expidition"
                item_3="Peak climbing"
                item_4="rafting"
                item_5="jungle safari"
                link_1=""
                link_2=""
                link_3=""
                link_4=""
                link_5=""
              />
              <DropDownComponent
                name="adventurous"
                item_1="Paragliding"
                item_2="Helicopter Tour"
                item_3="Mountain flight"
                // item_4="rafting"
                // item_5="jungle safari"
                link_1=""
                link_2=""
                link_3=""
                // link_4=""
                // link_5=""
              />

              <HeaderList name="Contact" link="/contact" />
              {/* <HeaderList name="about" link="/" /> */}
              <DropDownComponent
                name="About Us"
                link="/about"
                item_1="The Company"
                item_2="Why With us?"
                item_3="FAQ"
                // item_4="rafting"
                // item_5="jungle safari"
                link_1=""
                link_2=""
                link_3=""
                // link_4=""
                // link_5=""
              />
            </ul>
            <div>
              <div
                className="xl:px-2 xl:flex border-2 border-black cl:rounded-xl xl:py-2 items-center hover:bg-[#d4d4d4] hover:transition-all hover:ease-in-out hover:duration-150 transition-all duration-100 ease-in cursor-pointer ml-10 justify-center p-2 rounded-full hidden"
                onClick={() => {
                  setLanguage(!language);
                }}
              >
                <p className="xl:block hidden"> Languages</p>
                <span class="material-symbols-outlined xl:ml-2">language</span>
              </div>
              {language ? (
                <ul className="absolute bg-[white] top-[75px]  w-[200px] border-l-2 border-l-[#6868681e] mx-10 z-[998]">
                  <LanguageList name="English" />
                  <LanguageList name="German" />
                  <LanguageList name="Italian" />
                </ul>
              ) : null}
            </div>
          </div>
          <div className="absolute  xl:hidden right-6 top-8">
            {menu ? (
              <span
                class="material-symbols-outlined  font-semibold text-2xl  cursor-pointer z-[999]"
                onClick={() => {
                  setMenu(false);
                }}
              >
                menu
              </span>
            ) : (
              <span
                class="material-symbols-outlined  font-semibold text-2xl  cursor-pointer "
                onClick={() => {
                  setMenu(true);
                }}
              >
                close
              </span>
            )}

            {/* <span className="absolute">2</span> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
