import React from "react";

// Import images from src/assets
import javascriptLogo from "../assets/javascript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/CSS.png";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.png";
import mongodbLogo from "../assets/mongodb.jpg";
import reduxLogo from "../assets/Redux.svg";
import tailwindLogo from "../assets/Tailwind.png";
import expressLogo from "../assets/express.png";
import cuLogo from "../assets/cu.png";

function About() {
  const skills = [
    { name: "JavaScript", logo: javascriptLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Redux", logo: reduxLogo },
    { name: "Tailwind", logo: tailwindLogo },
    { name: "Express", logo: expressLogo },
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-lg">
          About Me
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
          Hello, I'm <span className="font-semibold text-blue-600">Ramkrishna</span>, a passionate Web Developer with a strong focus on the
          Frontend Development. With a background in IT, I aim to create impactful and
          visually stunning software solutions that leave a lasting impression.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4 ">
            Education
          </h2>
          <div className="flex items-center space-x-4">
            <img
              src={cuLogo}
              alt="Chandigarh University"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600 text-lg">
              B.Tech - Computer Science and Engineering, Chandigarh University, Punjab
              (2021 – 2025) - CGPA: <span className="font-semibold">8.17</span>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4 ">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transform transition-all hover:scale-105 duration-300">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 bg-gradient-to-t from-gray-100 via-white to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-gray-700 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
