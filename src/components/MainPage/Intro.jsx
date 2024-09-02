import React from "react";
import { useNavigate } from "react-router-dom";


const Intro = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-12 flex lg:flex-row justify-around items-center flex-col-reverse  md:flex-col-reverse ">
      <div className="text">
        <h2 className="font-medium text-4xl">Build Skills With</h2>
        <h2 className="font-medium text-4xl">Online Courses</h2>
        <p>We denounce with righteous indignation and dislike men who are</p>
        <p className="mb-3">so beguiled and demoralized that cannot trouble</p>
        <br></br>
        <button
          onClick={() => {
            navigate("/courses");
          }}
          className="bg-[#0DAFE6] text-white p-3 px-4 rounded-3xl"
        >
          Find Course
        </button>
      </div>
      <img className="pb-11 md:pb-11 duration-300 hover:scale-105" src="https://www.scnsoft.com/education-industry/elearning-portal/elearning-portals-cover-picture.svg" alt="" />
    </div>
  );
};

export default Intro;
