import React from "react";
import EduNexus from "../assets/eduxexus.jpg";
import EasyTrack from "../assets/easytrack.jpg";
import Covid19 from "../assets/proj2.png";
import SentimentAnalysis from "../assets/sentimentsphare.jpg";
import imageApp from "../assets/imageapp.jpg";
import paymentGatway from "../assets/paymentgatway.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: EduNexus,
      name: "EduNexus",
      liveLink: "https://ramkrishna0102.github.io/EDUNEXUS/", 
      sourceCode: "https://github.com/Ramkrishna0102/EDUNEXUS",
    },
    {
      id: 2,
      logo: EasyTrack,
      name: "EasyTrack",
      liveLink: "https://ramkrishna0102.github.io/RealTimeGPS-and-VehicleTracking/",
      sourceCode: "https://github.com/Ramkrishna0102/RealTimeGPS-and-VehicleTracking",
    },
    {
      id: 3,
      logo: Covid19,
      name: "COVID-19 Prediction and Reporting System",
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiYjBhYWU0NTItMmVhOS00MGM5LTk1ZGEtMTQxZTdmZDUxMWUwIiwidCI6ImUwYjlhZTFlLWViMjYtNDZhOC1hZGYyLWQ3ZGJjZjIzNDBhOSJ9",
      sourceCode: "https://github.com/Ramkrishna0102/Covid-19-Prediction-Reporting",
    },
    {
      id: 4,
      logo: SentimentAnalysis,
      name: "Sentiment Analysis on Social Media Data",
      liveLink: "https://sentiment-analysis.vercel.app",
      sourceCode: "https://github.com/Ramkrishna0102/Sentiment-Analysis-on-Social-Media-Data",
    },
    {
      id: 5,
      logo: imageApp,
      name: "Premium Pixel Vault",
      liveLink: "https://premium-pixel-vault-6myn.vercel.app/",
      sourceCode: "https://github.com/your-repo/imageApp",
    },
    {
      id: 6,
      logo: paymentGatway,
      name: "Payment Gateway",
      liveLink: "https://payment-gateway.vercel.app",
      sourceCode: "https://github.com/your-repo/paymentGatway",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-lg">
          Projects
        </h1>
        <span className="text-lg font-semibold text-green-600">
          List of Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {cardItem.map(({ id, logo, name, liveLink, sourceCode }) => (
            <div
              className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-50 via-white to-gray-100"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] mx-auto p-2 rounded-full border-[2px] shadow-md"
                alt={name}
              />
              <div className="text-center mt-4">
                <h3 className="px-2 font-bold text-xl text-gray-800 mb-2">
                  {name}
                </h3>
                <p className="px-2 text-gray-600 text-sm">
                  A brief description of the project goes here. Make it
                  descriptive yet concise.
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded shadow-md transition-all duration-300"
                >
                  Live
                </a>
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded shadow-md transition-all duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;