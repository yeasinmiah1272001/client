import { CiStar } from "react-icons/ci";
import { FaGoogle, FaLocationArrow } from "react-icons/fa";
import { PiDiamondsFourLight } from "react-icons/pi";
import img1 from "../assets/download (2).png";
import img2 from "../assets/download (3).png";
import img3 from "../assets/download (4).png";

function Banner() {
  return (
    <div className="bg-[#160A3A] flex flex-col md:flex-row justify-between items-center p-10 md:p-36">
      {/* left-side */}
      <div className="text-white md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Learn Code From top <span className="text-[#EAE34A]">Coder</span>
        </h1>
        <p className="mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using
        </p>
        <div className="flex items-center gap-4 mb-4">
          <button className="bg-[#EAE34A] text-[#160A3A] px-6 py-2 rounded-md hover:bg-[#d8d047] transition-colors duration-300">
            Login
          </button>
          <button className="bg-[#37266E] text-white px-6 py-2 rounded-md hover:bg-[#2d2059] transition-colors duration-300">
            Sign Up
          </button>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">
            <CiStar />
          </span>
          <span className="ml-2">Based on 10,000+ reviews on</span>
        </div>
        <div className="flex space-x-8 mt-4">
          <div className="flex items-center">
            <FaGoogle className="text-white" />
            <span className="text-white ml-2">CROWD</span>
          </div>
          <div className="flex items-center">
            <FaLocationArrow className="text-white" />
            <span className="text-white ml-2">Capterra</span>
          </div>
          <div className="flex items-center">
            <PiDiamondsFourLight className="text-white" />
            <span className="text-white ml-2">GetApp</span>
          </div>
        </div>
      </div>
      {/* right-side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-1/2">
        {/* First Image */}
        <div className="bg-gradient-to-r from-[#98FDE3] to-[#3E3761] flex flex-col items-center rounded-full h-96 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Zillio</h1>
            <span className="text-gray-200 mb-4">Data Engineer</span>
          </div>
          <img
            src={img1}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="bg-gradient-to-r from-[#DCB1FB] to-[#3E3761] flex flex-col rounded-full h-96 mt-16 items-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Lissa Kie</h1>
            <span className="text-gray-200 mb-4">React Engineer</span>
          </div>
          <img
            src={img2}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>

        {/* Third Image */}
        <div className="bg-gradient-to-r from-[#85ADFF] to-[#3E3761] flex flex-col rounded-full h-96 items-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Killan James</h1>
            <span className="text-gray-200 mb-4">Laravel Engineer</span>
          </div>
          <img
            src={img3}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
