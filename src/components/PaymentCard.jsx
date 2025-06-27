import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../Hooks/UseClickOutside";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Toast from "./General/Toast";
import Loader from "./General/Loader";

const PaymentCard = ({ courseId, course, setShowBuy, setBuy }) => {
  const modalRef = useRef(null);
  const onClose = () => {
    setShowBuy(false);
  };
  useClickOutside(modalRef, onClose);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [res, setRes] = useState("");
  const [severity, setSeverity] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = {};
    if (!cardNumber) formErrors.cardNumber = "Card number is required";
    else if (cardNumber.length !== 16)
      formErrors.cardNumber = "Card number must be 16 digits";

    if (!cardName) formErrors.cardName = "Cardholder's name is required";

    if (!expiryDate) formErrors.expiryDate = "Expiry date is required";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate))
      formErrors.expiryDate = "Expiry date must be in MM/YY format";

    if (!cvv) formErrors.cvv = "CVV is required";
    else if (cvv.length !== 3) formErrors.cvv = "CVV must be 3 digits";

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    const body = JSON.stringify(obj);
    const { response, status } = await WebHandler(
      `${URLS.BUYCOURSE}${courseId}`,
      "POST",
      body
    );

    if (status === 200) {
      setSeverity("success");
      setShowToast(true);
      setRes(response.message);
      setBuy(true);
      setShowBuy(false);
    } else {
      setSeverity("warning");
      setShowToast(true);
      setRes(response.message);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      {showToast && (
        <Toast message={res} severity={severity} onClose={setShowToast} />
      )}
      <div className="fixed inset-0 bg-black bg-opacity-45 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div ref={modalRef} className="w-full max-w-4xl">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col md:flex-row">
              {/* Course Details */}
              <div className="bg-white rounded-lg p-4 md:p-8 flex-1 flex flex-col justify-between mb-8 md:mb-0">
                <h2 className="text-gray-600 font-semibold text-lg mb-6">
                  COURSE DETAILS
                </h2>
                <div className="flex items-center justify-center mb-4">
                  {course.img ? (
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="bg-gray-200 shadow-inner w-full h-48 md:h-64 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600">No Image Available</span>
                    </div>
                  )}
                </div>
                <h3 className="text-gray-600 text-start text-xl font-bold">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-start text-xl font-bold">
                  ${course.price}
                </p>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-lg p-4 md:p-8 flex-1 md:ml-8 flex flex-col justify-between shadow-md">
                <h2 className="text-gray-600 font-semibold text-lg mb-6">
                  PAYMENT DETAILS
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-between flex-1"
                >
                  <div className="mb-4 md:mb-6">
                    <label
                      className="block text-sm text-gray-600 mb-2"
                      htmlFor="cardNumber"
                    >
                      Card Number
                    </label>
                    <input
                      name="cardNumber"
                      id="cardNumber"
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className={`w-full p-3 md:p-4 border ${
                        errors.cardNumber ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:border-[#0DAFE6]`}
                      placeholder="1234 5678 9012 3457"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 md:mb-6">
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
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className={`w-full p-3 md:p-4 border ${
                        errors.cardName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:border-[#0DAFE6]`}
                      placeholder="Name"
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cardName}
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-6">
                    <div className="flex-1">
                      <label
                        className="block text-sm text-gray-600 mb-2"
                        htmlFor="expiryDate"
                      >
                        Expiry Date
                      </label>
                      <input
                        id="expiryDate"
                        type="text"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className={`w-full p-3 md:p-4 border ${
                          errors.expiryDate
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:outline-none focus:border-[#0DAFE6]`}
                        placeholder="MM/YY"
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.expiryDate}
                        </p>
                      )}
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
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className={`w-full p-3 md:p-4 border ${
                          errors.cvv ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:border-[#0DAFE6]`}
                        placeholder="123"
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0DAFE6] text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-[#0a94c5] transition-all"
                  >
                    Confirm Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      export default PaymentModal;
    </>
  );
};

export default PaymentCard;
