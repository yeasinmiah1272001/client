import { IoStatsChart } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { GiCrossedBones } from "react-icons/gi";

const Counter = () => {
  return (
    <div className="bg-[#2B0D57] p-8 flex flex-wrap justify-center gap-20">
      <div className="bg-[#E7FF7A] p-9 rounded-lg shadow-lg text-center flex flex-col items-center">
        <span className="text-3xl text-[#2B0D57]">
          <GiCrossedBones />
        </span>
        <span className="font-bold text-xl text-[#2B0D57]">360+</span>
        <span className="text-md text-[#2B0D57]">Teachers</span>
      </div>
      <div className="bg-[#FF8FDF] p-9 rounded-lg shadow-lg text-center flex flex-col items-center">
        <span className="text-3xl text-[#2B0D57]">
          <PiGraduationCapDuotone />
        </span>
        <span className="font-bold text-xl text-[#2B0D57]">30K+</span>
        <span className="text-md text-[#2B0D57]">Students</span>
      </div>
      <div className="bg-[#FF5BB4] p-9 rounded-lg shadow-lg text-center flex flex-col items-center">
        <span className="text-3xl text-[#2B0D57]">
          <AiOutlineUsergroupAdd />
        </span>
        <span className="font-bold text-xl text-[#2B0D57]">8K+</span>
        <span className="text-md text-[#2B0D57]">Lessons</span>
      </div>
      <div className="bg-[#FF8787] p-9 rounded-lg shadow-lg text-center flex flex-col items-center">
        <span className="text-3xl text-[#2B0D57]">
          <AiOutlineUsergroupAdd />
        </span>
        <span className="font-bold text-xl text-[#2B0D57]">200</span>
        <span className="text-md text-[#2B0D57]">Partners</span>
      </div>
      <div className="bg-[#65FBD5] p-9 rounded-lg shadow-lg text-center flex flex-col items-center">
        <span className="text-3xl text-[#2B0D57]">
          <IoStatsChart />
        </span>
        <span className="font-bold text-xl text-[#2B0D57]">60%</span>
        <span className="text-md text-[#2B0D57]">Success</span>
      </div>
    </div>
  );
};

export default Counter;
