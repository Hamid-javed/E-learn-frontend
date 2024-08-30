import React, { useState } from "react";

const ReviewSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comment:", comment);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <>
      <div className="card"></div>

      <div className="review-section container mx-auto p-4 bg-transparent rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Leave A Comment
        </h2>
        <p className="text-center mb-6">
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-medium">
              Name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0DAFE6]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-lg font-medium">
              Email*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0DAFE6]"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment" className="block text-lg font-medium">
              Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0DAFE6]"
            />
          </div>
          <div className="form-group flex items-center space-x-2">
            <input
              type="checkbox"
              id="save-info"
              className="form-checkbox h-5 w-5 text-[#0DAFE6]"
            />
            <label htmlFor="save-info" className="text-gray-700">
              Save my name, email in this browser for the next time I comment
            </label>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-white text-[#0DAFE6] rounded hover:bg-[#0DAFE6] hover:text-black"
          >
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewSection;
