import React from "react";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import { useNavigate } from "react-router-dom";

export default function DropDown({
  setSetting,
  setShowDropDown,
  setPassword,
  setSavedCourses,
}) {
  const navigate = useNavigate();

  const signOut = async () => {
    const { status } = await WebHandler(URLS.SIGNOUT, "POST");
    if (status === 200) {
      navigate("/login");
    }
  };

  return (
    <div
      onMouseLeave={() => setShowDropDown(false)}
      className="bg-white mt-72 shadow-lg rounded-md w-52 absolute right-0 z-20"
    >
      <div className="flex flex-col gap-3 items-start p-4">
        <button
          onClick={() => setSetting(true)}
          className="w-full p-2 text-left hover:bg-[#f2f6f8]"
        >
          User Details
        </button>
        <button
          onClick={() => setPassword(true)}
          className="w-full p-2 text-left hover:bg-[#f2f6f8]"
        >
          Changes Password
        </button>
        <button
          onClick={() => navigate("/saved-courses")}
          className="w-full p-2 text-left hover:bg-[#f2f6f8]"
        >
          Saved Courses
        </button>
        <button
          onClick={() => navigate("/bought-courses")}
          className="w-full p-2 text-left hover:bg-[#f2f6f8]"
        >
          Bought Courses
        </button>
        <button
          onClick={signOut}
          className="w-full p-2 text-left hover:bg-[#f2f6f8]"
        >
          SignOut
        </button>
      </div>
    </div>
  );
}
