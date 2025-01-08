import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-24 pb-0">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Experience</h1>
      <div className="flex flex-wrap items-center justify-around ">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl ">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
        </div>
      </div>

      <h2 className="text-2xl md:text-4xl text-white font-bold  ">Education Experiences</h2>
      <div className=" flex justify-center ">
        <ul>
          <li className="text-white text-2xl ">2017- 2019 York University(Canada)</li>
          <li className="text-white text-2xl ">2022- 2024 London School of business and fiance(Singapore)</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
