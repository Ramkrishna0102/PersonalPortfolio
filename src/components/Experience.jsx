import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import mongo from "../assets/mongodb.jpg";
import Reacte from "../assets/reactjs.png";
import SQLe from "../assets/Redux.svg";
import ceerasLogo from "../assets/ceeras.png"; // Add your company logo paths here
import gravitonLogo from "../assets/graviton.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: mongo, name: "mongo" },
    { id: 7, logo: Reacte, name: "React" },
     { id: 8, logo: SQLe, name: "Redux" },
  ];

  const workExperience = [
    {
      company: "Ceeras IT Solution",
      logo: ceerasLogo,
      role: "MERN Stack Developer (Remote)",
      duration: "Feb 2025 – Present",
      description: [
        "Integrated multiple payment gateways (Stripe,Razorpay) into e-commerce applications using JavaScript and Node.js.",
        "Implemented third-party RESTful APIs for authentication, geolocation, and data visualization functionalities.",
        "Developed full-stack web applications using MongoDB, Express, React, and Node.js with responsive UI/UX design.",
      ],
    },
    {
      company: "Graviton Web Technologies",
      logo: gravitonLogo,
      role: "Frontend Web Developer Intern",
      duration: "Mar 2024 – Nov 2024",
      description: [
        "Developed Hola9 Classifieds platform using React.js, Redux, and Ant Design with autocomplete and location-based features.",
        "Built real-time taxi booking system with user tracking functionality using JavaScript and RESTful APIs.",
        "Created e-commerce applications featuring product listings, cart management, and secure payment integration.",
        "Designed interactive analytics dashboards presenting key user engagement metrics for data-driven decisions.",
      ],
    },
    {
      company: "Graviton Web Technologies",
      logo: gravitonLogo,
      role: "Frontend Developer Trainee (Remote)",
      duration: "Dec 2023 – Feb 2024",
      description: [
        "Built responsive UI components using JavaScript, HTML5, and CSS3 for multiple client projects.",
        "Optimized loan management interface with improved form validation and user-friendly navigation systems.",
        "Developed job portal search functionality and application tracking features, demonstrating rapid skill acquisition.",
      ],
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-lg">
          Experience
        </h1>
        <p className="text-lg text-gray-700 font-light text-center leading-relaxed mb-10">
          I've accumulated more than 1 years of experience working with the
          following technologies, delivering impactful and scalable solutions.
        </p>

        {/* Technologies Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-100 via-white to-gray-50 border-[2px] rounded-lg md:w-[200px] md:h-[200px] shadow-lg p-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] rounded-full shadow-md mb-4"
                alt={name}
              />
              <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Work Experience
        </h2>
        <div className="space-y-10">
          {workExperience.map(({ company, logo, role, duration, description }, index) => (
            <div
              key={index}
              className="flex items-start bg-gradient-to-t from-white to-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4"
            >
              <img
                src={logo}
                alt={company}
                className="w-16 h-16 object-contain rounded-md shadow-sm"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {company}
                </h3>
                <p className="text-lg font-semibold text-gray-600">{role}</p>
                <p className="text-sm text-gray-500 mb-4">{duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;