import React from "react";
import logo from "../assets/images/logo2.jpg";
import { Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 w-full mt-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center sm:items-center sm:text-center lg:items-start lg:text-left">
        <div className="mb-4 lg:mb-0 mx-4 lg:mx-10 flex flex-col items-center lg:items-start">
          <div className="logo flex items-center justify-center lg:justify-start">
            <img className="w-7 h-7 mr-2" src={logo} alt="Learnify Logo" />
            <Link className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">
              Learnify
            </Link>
          </div>
          <p className="text-gray-600 mt-2 max-w-xs text-sm">
            We are providing an{" "}
            <span className="text-[#0DAFE6] text-[0.85rem] drop-shadow-2xl">
              <Link className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">
                Learnify
              </Link>
            </span>{" "}
            app for IT students, offering comprehensive courses in programming,
            cybersecurity, and more to master essential tech skills.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full lg:w-auto space-y-5 sm:space-y-0 sm:space-x-10 mt-4 lg:mt-0 px-4">
          <div>
            <h3 className="mb-2 font-semibold md:text-left ">GET HELP</h3>
            <ul className="text-gray-600 text-sm md:text-left sm:text-center lg:mb-11 sm:mb-3">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Latest Articles
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold md:text-left md:mb-2 ">
              PROGRAMS
            </h3>
            <ul className="text-gray-600 text-sm md:text-left md:mb-4 sm:text-center">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Art & Design
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Business
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  IT & Software
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Languages
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Programming
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-center sm:flex-col lg:text-left md:text-left items-center sm:items-center">
            <h3 className="text-md font-semibold">CONTACT US</h3>
            <p className="text-gray-600 text-sm">
              Address: 94/B Umer bloack, Abbasia Town,
              <br /> Rahim Yar Khan, Punjab 64200, Pakistan
              <br />
              Tel: + (92) 3156107225
              <br />
              Mail:{" "}
              <a href="https://hamids-portfolio.netlify.app/" target="_blank">
                https://hamids-portfolio.netlify.app/
              </a>
            </p>
            <div className="mt-3 flex md:text-left sm:justify-start space-x-3 text-gray-600">
              <a href="#" className="text-blue-500 hover:text-[#0DAFE6]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-red-600 hover:text-[#0DAFE6]">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-[#e1306c] hover:text-[#0DAFE6]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-600 hover:text-[#0DAFE6]">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-600 text-xs">
        <p>
          Copyright © 2024 Learnify e-learnportal.uno | Powered by HELLO WORLD
          TECHNOLOGIES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
