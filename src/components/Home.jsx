import React from "react";
import pic from "../assets/myphoto.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <span className="text-xl text-gray-700 font-light">Welcome In My Feed</span>
            <div className="flex flex-wrap items-center space-x-1 text-2xl md:text-4xl font-semibold">
              <h1 className="text-gray-800">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600 font-extrabold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-justify text-md md:text-lg text-gray-700 leading-relaxed shadow-lg p-4 rounded-lg bg-gradient-to-r from-blue-50 to-white">
              Enthusiastic Software Developer with a strong foundation in full-stack web development, specializing in React.js, JavaScript, and Java. Proficient in building scalable, user-focused applications with seamless integration of frontend and backend technologies. Experienced in data-driven projects, including real-time GPS tracking systems and learning platforms, with a keen eye for optimization and performance tuning. Adept at leveraging cloud technologies like Azure for data analysis and visualization, coupled with a solid grasp of Data Structures and Algorithms.
            </p>
            {/* Social Media and Technologies */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-600">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ramkrishna01/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-3xl text-blue-800 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="text-3xl text-red-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://t.RamkrishnaSingh_21bcs6959/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Technologies */}
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-600">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-3xl text-green-600 hover:text-green-700 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-green-200 p-1 cursor-pointer" />
                  <SiExpress className="text-3xl text-gray-800 hover:text-gray-900 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-gray-200 p-1 cursor-pointer" />
                  <FaReact className="text-3xl text-blue-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-blue-200 p-1 cursor-pointer" />
                  <FaNodeJs className="text-3xl text-green-500 hover:text-green-600 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-green-200 p-1 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg hover:shadow-2xl transition-shadow duration-300 ring-4 ring-blue-200"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-10" />
    </>
  );
}

export default Home;