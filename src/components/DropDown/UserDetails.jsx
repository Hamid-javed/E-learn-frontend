import React, { useRef, useState, useEffect } from "react";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import useClickOutside from "../../Hooks/UseClickOutside";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ setSetting }) => {
  const [user, setUser] = useState({ name: "", email: "", number: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => setSetting(false));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.USERDETAILS, "GET");
        if (status === 200) {
          setUser(response);
          setFormData({
            name: response.name || "",
            email: response.email || "",
            number: response.number || "",
            password: "", // Password will be entered by the user for authentication
          });
          setLoading(false);
        } else {
          throw new Error("Failed to fetch user details.");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { response, status } = await WebHandler(
        URLS.CHANGE_USER_DETAILS,
        "PATCH",
        JSON.stringify(formData)
      );
      console.log(response);
      setMessage("User details changed successfully!");
    } catch (err) {
      setMessage("An error occurred: " + err.message);
    }
  };

  const onClose = () => {
    setSetting(false);
  };

  return (
    <div className="flex justify-center items-center w-screen fixed top-0 left-0 bg-black bg-opacity-40 h-screen">
      <div
        ref={modalRef}
        className="rounded-xl bg-white p-6 max-w-lg w-full shadow-lg"
      >
        <div className="flex justify-center">
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0"></div>
              <div className="p-8">
                <div className="uppercase tracking-wide content-center shadow-lg bg-white text-[#0DAFE6] rounded-xl text-center text-xl font-semibold p-3">
                  USER DETAILS
                </div>
                <form onSubmit={handleSubmit} className="mt-5">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password (required to update details)
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text- hover:bg-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="text-[#0DAFE6] hover:text-white  hover:bg-[#0DAFE6]   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-[#0DAFE6] hover:text-white  hover:bg-[#0DAFE6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {message && <p className="mt-4 text-[#0DAFE6]">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
