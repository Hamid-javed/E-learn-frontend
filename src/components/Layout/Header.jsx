// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo2.jpg";
// import { FaUserGraduate, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import DropDown from "../DropDown/DropDown";
// import Setting from "../DropDown/UserDetails";
// import ChangePassword from "../DropDown/ChangePassword";

// const URL = import.meta.env.VITE_URL;

// function Header() {
//   const navigate = useNavigate();
//   const [setting, setSetting] = useState(false);
//   const [Password, setPassword] = useState(false);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`${URL}/auth/check`, {
//         credentials: "include",
//       });
//       if (response.status !== 200) {
//         navigate("/login");
//       }
//     };
//     fetchData();
//   }, [navigate]);


//   const getClassName = ({ isActive }) => {
//     return isActive
//       ? "bg-[#0DAFE6] text-white px-4 py-2"
//       : "text-[#0c8ab8] hover:bg-[#0DAFE6] hover:text-white px-4 py-2";
//   };

//   return (
//     // <div className="head py-2 flex justify-around items-center mb-2 sm:px-8">
//     //   <div className="logo items-center hidden sm:flex">
//     //     <img className="w-12 h-12" src={logo} alt="Learnify Logo" />
//     //     <Link to="/" className="text-[#0DAFE6] font-semibold text-xl ml-2 cursor-pointer">
//     //       Learnify
//     //     </Link>
//     //   </div>

//     //   <div className="sm:hidden">
//     //     <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//     //       {isMenuOpen ? (
//     //         <FaTimes className="text-[#0DAFE6] text-2xl" />
//     //       ) : (
//     //         <FaBars className="text-[#0DAFE6] text-3xl" />
//     //       )}
//     //     </button>
//     //   </div>

//     //   <ul
//     //     className={`flex gap-6 items-center text-[#0DAFE6] sm:flex ${isMenuOpen
//     //       ? "flex flex-col absolute top-16 justify-end left-0 w-full bg-white p-4"
//     //       : "hidden"
//     //       }`}
//     //   >
//     //     <li>
//     //       <NavLink exact to="/" className={getClassName}>
//     //         Home
//     //       </NavLink>
//     //     </li>
//     //     <li>
//     //       <NavLink to="/courses" className={getClassName}>
//     //         Courses
//     //       </NavLink>
//     //     </li>
//     //     <li>
//     //       <NavLink to="/contact-us" className={getClassName}>
//     //         Contact Us
//     //       </NavLink>
//     //     </li>
//     //   </ul>

//     //   <div className="relative flex items-center">
//     //     <div
//     //       onClick={() => setShowDropDown(!showDropDown)}
//     //       className="flex gap-2 items-center cursor-pointer"
//     //     >
//     //       <FaUserGraduate className="text-[#0DAFE6] text-2xl" />
//     //       <FaChevronDown className="text-[1rem]" />
//     //     </div>
//     //     {showDropDown && (
//     //       <DropDown
//     //         setPassword={setPassword}
//     //         setSetting={setSetting}
//     //         setShowDropDown={setShowDropDown}
//     //       />
//     //     )}
//     //   </div>

//     //   {setting && <Setting setSetting={setSetting} />}
//     //   {Password && <ChangePassword setPassword={setPassword} />}
//     // </div>
//     <div className="head py-2 flex justify-between items-center mb-2 sm:px-8">
//   {/* Logo and Title */}
//   <div className="logo flex items-center">
//     <img className="w-12 h-12" src={logo} alt="Learnify Logo" />
//     <Link
//       to="/"
//       className="text-[#0DAFE6] font-semibold text-xl ml-2 cursor-pointer"
//     >
//       Learnify
//     </Link>
//   </div>

//   {/* Hamburger Menu Icon for Mobile */}
//   <div className="sm:hidden">
//     <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//       {isMenuOpen ? (
//         <FaTimes className="text-[#0DAFE6] text-2xl" />
//       ) : (
//         <FaBars className="text-[#0DAFE6] text-3xl" />
//       )}
//     </button>
//   </div>

//   {/* Navigation Links for Desktop */}
//   <ul
//     className={`hidden sm:flex gap-6 items-center text-[#0DAFE6] ${
//       isMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white p-4" : ""
//     }`}
//   >
//     <li>
//       <NavLink exact to="/" className={getClassName}>
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/courses" className={getClassName}>
//         Courses
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/contact-us" className={getClassName}>
//         Contact Us
//       </NavLink>
//     </li>
//   </ul>

//   {/* Dropdown and Settings for Desktop */}
//   <div className="hidden sm:flex items-center relative">
//     <div
//       onClick={() => setShowDropDown(!showDropDown)}
//       className="flex gap-2 items-center cursor-pointer"
//     >
//       <FaUserGraduate className="text-[#0DAFE6] text-2xl" />
//       <FaChevronDown className="text-[1rem]" />
//     </div>
//     {showDropDown && (
//       <DropDown
//         setPassword={setPassword}
//         setSetting={setSetting}
//         setShowDropDown={setShowDropDown}
//       />
//     )}
//   </div>

//   {/* Mobile Navigation Menu */}
//   {isMenuOpen && (
//     <ul className="sm:hidden flex flex-col absolute top-16 left-0 w-full bg-white p-4 text-[#0DAFE6]">
//       <li>
//         <NavLink exact to="/" className={getClassName}>
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/courses" className={getClassName}>
//           Courses
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/contact-us" className={getClassName}>
//           Contact Us
//         </NavLink>
//       </li>
//       {/* Dropdown and Settings for Mobile */}
//       <div className="flex items-center justify-between mt-4">
//         <div
//           onClick={() => setShowDropDown(!showDropDown)}
//           className="flex gap-2 items-center cursor-pointer"
//         >
//           <FaUserGraduate className="text-[#0DAFE6] text-2xl" />
//           <FaChevronDown className="text-[1rem]" />
//         </div>
//         {showDropDown && (
//           <DropDown
//             setPassword={setPassword}
//             setSetting={setSetting}
//             setShowDropDown={setShowDropDown}
//           />
//         )}
//       </div>
//     </ul>
//   )}

//   {/* Conditional Rendering of Settings and Password Change */}
//   {setting && <Setting setSetting={setSetting} />}
//   {Password && <ChangePassword setPassword={setPassword} />}
// </div>


//   );
// }

// export default Header;


import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg";
import { FaUserGraduate, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";
import Setting from "../DropDown/UserDetails";
import ChangePassword from "../DropDown/ChangePassword";

const URL = import.meta.env.VITE_URL;

function Header() {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);
  const [password, setPassword] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`, {
        credentials: "include",
      });
      if (response.status !== 200) {
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);

  const getClassName = ({ isActive }) => {
    return isActive
      ? "bg-[#0DAFE6] text-white px-4 py-2 rounded-md"
      : "text-[#0c8ab8] hover:bg-[#0DAFE6] hover:text-white px-4 py-2 rounded-md transition-colors duration-200";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowDropDown(false);
  };

  const toggleDropDown = (e) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  return (
    <header className="bg-white shadow-md mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex-shrink-0 flex items-center">
            <img className="w-8 h-8 sm:w-10 sm:h-10" src={logo} alt="Learnify Logo" />
            <Link to="/" className="text-[#0DAFE6] font-semibold text-lg sm:text-xl ml-2">
              Learnify
            </Link>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-4">
            <NavLink exact to="/" className={getClassName}>Home</NavLink>
            <NavLink to="/courses" className={getClassName}>Courses</NavLink>
            <NavLink to="/contact-us" className={getClassName}>Contact Us</NavLink>
          </nav>

          {/* Dropdown and Settings for Desktop */}
          <div className="hidden md:flex items-center">
            <div onClick={toggleDropDown} className="flex items-center cursor-pointer">
              <FaUserGraduate className="text-[#0DAFE6] text-xl" />
              <FaChevronDown className="ml-1 text-sm" />
            </div>
            {showDropDown && (
              <DropDown
                setPassword={setPassword}
                setSetting={setSetting}
                setShowDropDown={setShowDropDown}
              />
            )}
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#0DAFE6]">
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:flex md:flex-col sm:flex">
            <NavLink exact to="/" className={getClassName}>Home</NavLink>
            <NavLink to="/courses" className={getClassName}>Courses</NavLink>
            <NavLink to="/contact-us" className={getClassName}>Contact Us</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div onClick={toggleDropDown} className="flex items-center cursor-pointer">
                <FaUserGraduate className="text-[#0DAFE6] text-xl" />
                <FaChevronDown className="ml-1 text-sm" />
              </div>
            </div>
            {showDropDown && (
              <DropDown
                setPassword={setPassword}
                setSetting={setSetting}
                setShowDropDown={setShowDropDown}
              />
            )}
          </div>
        </div>
      )}

      {/* Conditional Rendering of Settings and Password Change */}
      {setting && <Setting setSetting={setSetting} />}
      {password && <ChangePassword setPassword={setPassword} />}
    </header>
  );
}

export default Header;