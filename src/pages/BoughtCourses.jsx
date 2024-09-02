import React, { useEffect, useState } from "react";
import FeatureCard from "../components/MainPage/FeatureCard";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Loader from "../components/General/Loader";

const BoughtCoures = () => {
  const [res, setRes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { response, status } = await WebHandler(
          URLS.BOUGHTCOURSES,
          "GET"
        );
        if (status === 200 && Array.isArray(response)) {
          if (response.length === 0) {
            setNoResult(true);
          } else {
            setRes(response);
          }
        } else {
          setNoResult(true);
        }
      } catch (error) {
        console.error("Error sending data:", error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {loader && <Loader />}
      <div className=" flex justify-center min-h-screen">
        <div className="flex flex-col gap-12 w-[70%]">
          <div className="text-4xl">Bought Courses</div>
          {noResult ? (
            <div className="">No Bought Coures</div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {res.map((course, index) => {
                return <FeatureCard key={index} course={course} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoughtCoures;
