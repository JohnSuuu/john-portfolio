import React from "react";
import AboutImg from "../../assets/popo2.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center
     bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 ">
      
      <div >
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
          <img className="w-48 " src={AboutImg} alt="About img" />
          <ul className="">
            <div className="flex gap-3 py-4 ">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="md:text-md leading-tight">
                Hi!! I'm Guorong Su, a passionate junior developer with a strong interest in front-end development, UI/UX design, and full-stack development. 
                I enjoy creating dynamic web applications, responsive designs that deliver value to users.
                </p>
                <br />
                <p className="md:text-md leading-tight">I have been to Canada and Singapore for study, and now I'm living in Chin
                  a. I enjoy playing the piano and listening to different genres of music while not working.</p>
              </span>
            </div>

          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default About;
