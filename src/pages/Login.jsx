import React, { useEffect, useState } from "react";
import Loader from "../components/General/Loader";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import { useNavigate } from "react-router-dom";
import Toast from "../components/General/Toast";

const Login = () => {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const body = JSON.stringify(obj);
      const { response, status } = await WebHandler(URLS.LOGIN, "POST", body);
      if (status === 200) {
        setIsLoggedIn(true);
        setRes(response.message);
      } else {
        setShowToast(true);
        setRes(response.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {showToast && (
        <Toast message={res} severity={"danger"} onClose={setShowToast} />
      )}
      {loading && <Loader />}
      <div className="bg-[#f2f6f8] w-screen fixed top-0 left-0 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email or Username*"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password*"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
              />
            </div>
            <div className="flex items-center justify-start mt-4">
              <input
                type="checkbox"
                name="user"
                id="user"
                className="cursor-pointer w-4 h-4 text-[#0DAFE6] border-gray-300 focus:ring-[#0DAFE6]"
              />
              <label className="ml-2 text-sm text-gray-700 cursor-pointer" htmlFor="user">
                Remember me
              </label>
            </div>
            <input
              className="w-full cursor-pointer p-3 bg-[#0DAFE6] hover:bg-white hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold rounded-xl mt-6 transition duration-200 ease-in-out"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate("/forget")}
              className="text-sm text-gray-700 hover:text-blue-400 transition duration-200"
            >
              Forgot Password?
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-sm text-gray-700 hover:text-blue-400 transition duration-200"
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
