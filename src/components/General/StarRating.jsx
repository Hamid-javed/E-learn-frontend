// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { IoSend } from "react-icons/io5";
// import { WebHandler } from "../../data/remote/WebHandler";
// import { URLS } from "../../data/remote/URL";

// const StarRating = ({ courseId }) => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     const [tempRating, setTempRating] = useState(0)

//     function handleClick(currentIndex) {
//         setRating(currentIndex);
//     }
//     function handleMouseMove(currentIndex) {
//         setHover(currentIndex)
//     }
//     function handleMouseLeave(currentIndex) {
//         setHover(0);
//     }

//     const addReview = () => {
//         const { response, status } = WebHandler(`${URLS.ADDREVIEW}${courseId}`, 'POST')
//     }

//     return (

//         <div className="p-4 px-10 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
//             <div className="flex mb-4">
//                 {/* Star Rating Section */}
//                 {[...Array(5)].map((item, index) => {
//                     return (
//                         <FaStar
//                             key={index}
//                             className={`cursor-pointer text-2xl transition-transform duration-200 ease-in-out ${index <= (hover || rating) ? "text-yellow-500 scale-110" : "text-gray-300"
//                                 }`}
//                             onClick={() => {
//                                 handleClick(index);
//                             }}
//                             onMouseMove={() => {
//                                 handleMouseMove(index);
//                             }}
//                             onMouseLeave={() => {
//                                 handleMouseLeave(index);
//                             }}
//                         />
//                     );
//                 })}
//             </div>
//             <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 transition duration-200 ease-in-out">
//                 <input
//                     name="review"
//                     type="text"
//                     placeholder="Add your review here"
//                     required
//                     className="w-full focus:outline-none text-sm text-gray-700 transition duration-200 ease-in-out placeholder:text-left placeholder:text-gray-500 placeholder:italic"
//                     style={{ textAlign: "left" }} // Aligns the placeholder and text to the left
//                 />
//                 <button onClick={addReview} className="p-2 text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out">
//                     <IoSend size={24} />
//                 </button>
//             </div>

//         </div>


//     );
// };

// export default StarRating;


import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import Toast from "./Toast";

const StarRating = ({ courseId, setReview }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [res, setRes] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [severity, setSeverity] = useState("")

    function handleClick(currentIndex) {
        setRating(currentIndex + 1);
    }
    function handleMouseMove(currentIndex) {
        setHover(currentIndex + 1);
    }
    function handleMouseLeave() {
        setHover(0);
    }

    const addReview = async () => {
        const reviewData = {
            rating: rating,
            review: reviewText
        };
        try {
            const stringifiedData = JSON.stringify(reviewData);
            const { response, status } = await WebHandler(`${URLS.ADDREVIEW}${courseId}`, 'POST', stringifiedData);
            if (status === 200) {
                setRating(0);
                setReviewText("");
                setRes(response.message)
                setShowToast(true)
                setSeverity("success")
                setReview((prev) => !prev)
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            console.error("Error details:", error.response?.data || error.message);
        }
    }

    return (
        <>
            {showToast && (<Toast message={res} severity={severity} onClose={setShowToast} />)}
            <div className="p-4 px-10 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="flex mb-4">
                    {/* Star Rating Section */}
                    {[...Array(5)].map((item, index) => {
                        return (
                            <FaStar
                                key={index}
                                className={`cursor-pointer text-2xl transition-transform duration-200 ease-in-out ${index < (hover || rating) ? "text-yellow-500 scale-110" : "text-gray-300"
                                    }`}
                                onClick={() => handleClick(index)}
                                onMouseMove={() => handleMouseMove(index)}
                                onMouseLeave={handleMouseLeave}
                            />
                        );
                    })}
                </div>
                <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 transition duration-200 ease-in-out">
                    <input
                        name="review"
                        type="text"
                        placeholder="Add your review here"
                        required
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full focus:outline-none text-sm text-gray-700 transition duration-200 ease-in-out placeholder:text-left placeholder:text-gray-500 placeholder:italic"
                        style={{ textAlign: "left" }}
                    />
                    <button
                        onClick={addReview}
                        className="p-2 text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out"
                        disabled={!rating || !reviewText.trim()}
                    >
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default StarRating;
