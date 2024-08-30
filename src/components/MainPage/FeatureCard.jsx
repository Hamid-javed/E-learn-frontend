import React, { useEffect, useState } from "react";
import { MdAccessTimeFilled, MdPlayLesson } from "react-icons/md";
import { GoBookmarkFill,GoBookmarkSlashFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import Toast from "../General/Toast";


const FeatureCard = ({ course ,setReFetcAhll }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("courseId")
    localStorage.setItem("courseId", JSON.stringify(course.id))
    navigate("/course-details")
  }

  const [message, setMessage] = useState("")
  const [showToast, setShowToast] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [saved, setSaved] = useState(false)
  const [reFetch, setReFetch] = useState(true)

  const truncateTitle = (title, length = 20) => {
    if (title.length > length) {
      return title.slice(0, length) + "...";
    }
    return title;
  };

  const saveCourse = async () => {
    const { response, status } = await WebHandler(
      `${URLS.SAVENEWCOURSE}${course.id}`,
      "POST"
    );
    if (status === 200) {
      setSeverity("success");
      setShowToast(true);
      setReFetch((prev) => !prev)
      setMessage(response.message);
      setReFetcAhll((prev) => !prev)
    } else {
      setSeverity("danger");
      setShowToast(true);
      setMessage(response.message);
      setReFetcAhll((prev) => !prev)
    }
  };

  const removSavedCourse = async () => {
    const { response, status } = await WebHandler(
      `${URLS.REMOVEDSAVED}${course.id}`,
      "DELETE"
    );
    if (status === 200) {
      setSeverity("success");
      setShowToast(true);
      setReFetch((prev) => !prev)
      setMessage(response.message);
      setReFetcAhll((prev) => !prev)
    }
  };

  useEffect(() => {
    const checkSaved = async () => {
      const { response, status } = await WebHandler(`${URLS.CHECKSAVED}${course.id}`, "POST");
      if (status === 200) {
        setSaved(true)
      }else{
        setSaved(false)
      }
    }
    checkSaved()
  }, [reFetch])

  return (
    <>
      {showToast && (
        <Toast message={message} severity={severity} onClose={setShowToast} />
      )}
      <div className="col-span-1 pb-4 h-80 flex flex-col justify-between rounded-lg border border-gray-300 transition hover:scale-105 hover:shadow-xl shadow-md bg-white hover:bg-gradient-to-br from-blue-50 to-blue-100 relative">
        {/* Save Course Icon */}
        {!saved ?
          <div
            onClick={saveCourse}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors cursor-pointer z-20"
          >
            <GoBookmarkFill className="hover:fill-blue-500 text-[#0DAFE6] transition-colors" /> 
          </div> : <div
            onClick={removSavedCourse}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors cursor-pointer z-20"
          >
            <GoBookmarkSlashFill className="hover:fill-blue-500 text-[#0DAFE6] transition-colors" />
          </div>}

        {/* Course Image */}
        <div className="h-36 overflow-hidden rounded-t-lg relative">
          <img
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            src={course.data.details.img}
            alt={course.data.details.title}
          />
        </div>

        {/* Course Details */}
        <div
          onClick={() => { handleClick() }}
          className="p-4 flex flex-col justify-between flex-grow cursor-pointer"
        >
          <div>
            <h1 className="font-semibold text-lg text-gray-800">
              {truncateTitle(course.data.details.title)}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {course.data.details.category}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <MdAccessTimeFilled className="text-blue-500 text-lg mr-1" />
              <p className="text-sm text-gray-700">
                {(course.data.duration / (7 * 24 * 60 * 60 * 1000)).toFixed(2)}{" "}
                weeks
              </p>
            </div>
            <div className="flex items-center">
              <MdPlayLesson className="text-blue-500 text-lg mr-1" />
              <p className="text-sm text-gray-700">
                {course.data.lessons.length} Lessons
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#0DAFE6"
                className="mr-2"
              >
                <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
              </svg>
              <p className="text-sm text-gray-700">
                {course.data.details.rating}{" "}
                <span className="text-gray-500">
                  ({course.data.reviews.length} Reviews)
                </span>
              </p>
            </div>
            <div className="flex items-center text-gray-800 text-lg">
              <span className="text-blue-500">$</span>
              {course.data.details.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
