import Container from "./Container";
import { FaCodepen } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#1B0C4D] shadow-2xl">
      <Container className={"text-white flex justify-between items-center p-4"}>
        <div className="flex gap-2 items-center ">
          <FaCodepen size={30} className="text-[#825FF8]" />
          <h1 className="text-2xl font-bold">CodeLearn</h1>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li className="hover:text-[#EAE34A] transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#EAE34A] transition-colors duration-300 cursor-pointer">
              Courses
            </li>
            <li className="hover:text-[#EAE34A] transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#EAE34A] transition-colors duration-300 cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-[#EAE34A] transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#EAE34A] text-[#160A3A] px-4 py-2 rounded-md hover:bg-[#d8d047] transition-colors duration-300">
            Login
          </button>
          <button className="bg-[#37266E] text-white px-4 py-2 rounded-md hover:bg-[#2d2059] transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
