import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../Hooks/UseClickOutside";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Toast from "./General/Toast";
import Loader from "./General/Loader";



const PaymentCard = ({ courseId, course, setShowBuy, setBuy }) => {
  console.log(courseId)

  const modalRef = useRef(null);
  const onClose = () => {
    setShowBuy(false);
  };
  useClickOutside(modalRef, onClose);

  const [res, setRes] = useState("")
  const [severity, setSeverity] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    const body = JSON.stringify(obj);
    const { response, status } = await WebHandler(`${URLS.BUYCOURSE}${courseId}`, 'POST', body)
    if (status === 200) {
      setSeverity("Success")
      setShowToast(true)
      setRes(response.message)
      setLoading(false)
      setBuy(true)
    } else {
      setSeverity("warning")
      setShowToast(true)
      setRes(response.message)
      setLoading(false)
    }
  }


  return (
    <>
      {loading && <Loader />}
      {showToast && (
        <Toast message={res} severity={severity} onClose={setShowToast} />
      )}
      <div className="flex justify-center items-center w-screen fixed top-0 left-0 bg-black bg-opacity-45 h-screen">
        <div ref={modalRef} className="">
          <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl flex flex-col md:flex-row">
            {/* Course Details */}
            <div className="bg-white rounded-lg p-8 flex-1 flex flex-col justify-between">
              <h2 className="text-gray-600 font-semibold text-lg mb-6">COURSE DETAILS</h2>
              <div className="flex items-center justify-center">
                {course.img ? (
                  <img
                    src={course.img}
                    // alt={course.tittle}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="bg-gray-200 shadow-inner w-full h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600">No Image Available</span>
                  </div>
                )}
              </div>
              <h3 className=" text-gray-600 text-start text-xl font-bold">
                {course.title}
              </h3>
              <p className=" text-gray-600 text-start text-xl font-bold">
                ${course.price}
              </p>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-lg p-8 flex-1 md:ml-8 flex flex-col justify-between shadow-md mt-8 md:mt-0">
              <h2 className="text-gray-600 font-semibold text-lg mb-6">PAYMENT DETAILS</h2>

              <form onSubmit={handleSubmit} className="flex flex-col justify-between flex-1">
                <div className="mb-6">
                  <label
                    className="block text-sm text-gray-600 mb-2"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <input
                    name="cardNumber"
                    id="cardNumber"
                    type="number"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
                    placeholder="1234 5678 9012 3457"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm text-gray-600 mb-2"
                    htmlFor="cardName"
                  >
                    Cardholder's Name
                  </label>
                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
                    placeholder="Name"
                  />
                </div>
                <div className="flex space-x-6 mb-6">
                  <div className="flex-1">
                    <label
                      className="block text-sm text-gray-600 mb-2"
                      htmlFor="expiryDate"
                    >
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      type="number"
                      name="ExData"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block text-sm text-gray-600 mb-2"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      id="cvv"
                      name="CVV"
                      type="number"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0DAFE6]"
                      placeholder="123"
                    />
                  </div>
                </div>
                <button className="w-full bg-[#0DAFE6] text-white py-4 rounded-lg font-semibold hover:bg-[#0a94c5] transition-all">
                  Confirm Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
