import React from "react";
import { GiCrossedBones } from "react-icons/gi"; // Ensure you have the correct imports
import { PiGraduationCapDuotone } from "react-icons/pi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";

const SecondCounter = () => {
  return (
    <div className="bg-gradient-to-r from-[#2B0D57] to-[#3A1A75] p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Top Categories</h2>
      <p className="text-lg text-white mb-8 text-center max-w-lg">
        Take high-quality online courses from the best instructors around the
        world and develop your skills.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-[#E7FF7A] p-10 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
          <span className="text-4xl text-[#2B0D57]">
            <GiCrossedBones />
          </span>
          <span className="font-bold text-2xl text-[#2B0D57]">360+</span>
          <span className="text-md text-[#2B0D57]">Teachers</span>
        </div>
        <div className="bg-[#FF8FDF] p-10 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
          <span className="text-4xl text-[#2B0D57]">
            <PiGraduationCapDuotone />
          </span>
          <span className="font-bold text-2xl text-[#2B0D57]">30K+</span>
          <span className="text-md text-[#2B0D57]">Students</span>
        </div>
        <div className="bg-[#FF5BB4] p-10 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
          <span className="text-4xl text-[#2B0D57]">
            <AiOutlineUsergroupAdd />
          </span>
          <span className="font-bold text-2xl text-[#2B0D57]">8K+</span>
          <span className="text-md text-[#2B0D57]">Lessons</span>
        </div>
        <div className="bg-[#FF8787] p-10 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
          <span className="text-4xl text-[#2B0D57]">
            <AiOutlineUsergroupAdd />
          </span>
          <span className="font-bold text-2xl text-[#2B0D57]">200</span>
          <span className="text-md text-[#2B0D57]">Partners</span>
        </div>
        <div className="bg-[#65FBD5] p-10 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
          <span className="text-4xl text-[#2B0D57]">
            <IoStatsChart />
          </span>
          <span className="font-bold text-2xl text-[#2B0D57]">60%</span>
          <span className="text-md text-[#2B0D57]">Success</span>
        </div>
      </div>
    </div>
  );
};

export default SecondCounter;
