import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

const Master = () => {
  return (
    <aside className="flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className=" w-[100%] py-4">
          <Link href="#" title="home">
            <img
              src="/images/logo.png"
              className="w-32 mx-auto"
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <img
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Sagar Neupane
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <Link
              href="/admin/dashboard"
              aria-label="dashboard"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-orange-500 to-yellow-400"
            >
              <p className="text-blue-500">
                <RiDashboardLine />
              </p>
              <span className="-mr-1 font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/destination"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <p className="font">
                <MdLocationPin />
              </p>
              <span className="group-hover:text-gray-700">Destination</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Reports</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Other data</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fill-rule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="group-hover:text-gray-700">Finance</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Master;
