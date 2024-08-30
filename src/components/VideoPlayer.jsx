import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import Loader from "./General/Loader";

const VideoPlayer = ({ setShowVideo, videoId, courseId }) => {
  const [video, setVideo] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const base_url = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { response, status } = await WebHandler(
        `${base_url}/courses/${courseId}/video/${videoId}`,
        "GET"
      );
      console.log(response)
      if (status === 200) {
        setLoading(false);
        setVideo(response.link);
      } else {
        setLoading(false);
        setMessage(response.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="z-50 fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
  <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-6 overflow-hidden">
    {/* Close Button */}
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setShowVideo(false)}
        className="p-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600 transition-colors duration-300"
      >
        X
      </button>
    </div>

    {/* Content */}
    {loading ? (
      <div className="flex justify-center items-center h-48">
        <Loader />
      </div>
    ) : message ? (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">{message}</h2>
        <p className="text-gray-600">Please buy the course to access the video.</p>
      </div>
    ) : (
      <div className="w-full h-72 md:h-96 lg:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    )}
  </div>
</div>

    </>
  );
};

export default VideoPlayer;