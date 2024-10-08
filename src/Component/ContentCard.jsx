import React from "react";
import img1 from "../assets/download.png";
import img2 from "../assets/download (1).png";
import Container from "./Container";

const ContentCard = () => {
  return (
    <Container className="space-y-6">
      {/* First Card */}
      <div className="mx-auto p-6 bg-white  rounded-lg flex flex-col md:flex-row items-center justify-between gap-32">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={img1}
            alt="Learning Skills"
            className="w-full h-auto rounded-lg "
          />
        </div>
        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-start mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-600 mb-1">
            Let’s Learn together to
          </h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Grow Your Skills
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Describe Your Learning Skills
          </h1>
          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration in some.
          </p>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Select Course
          </h4>
          <h5 className="text-md text-gray-600 mb-4">
            Keep track of your experts
          </h5>
          <button className="bg-gray-300 text-black py-2 px-4 rounded border-2 border-gray-100 transition duration-200 hover:bg-gray-400 hover:text-white">
            Get Started
          </button>
        </div>

        {/* Left Side - Image */}
      </div>

      {/* Second Card */}
      <div className="mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between">
        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-start mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-600 mb-1">
            Let’s Learn together to
          </h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Code Learning Centre
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Describe Your Learning Skills
          </h1>
          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration in some.
          </p>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Select Course
          </h4>
          <h5 className="text-md text-gray-600 mb-4">
            Keep track of your experts
          </h5>
          <button className="bg-gray-300 text-black py-2 px-4 rounded border-2 border-gray-100 transition duration-200 hover:bg-gray-400 hover:text-white">
            Get Started
          </button>
        </div>

        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={img2}
            alt="Learning Skills"
            className="w-full h-auto rounded-lg shadow-md "
          />
        </div>
      </div>
    </Container>
  );
};

export default ContentCard;
