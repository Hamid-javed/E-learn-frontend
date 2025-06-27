import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import Login from "./pages/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import SavedCourses from "./pages/SavedCourses";
import BoughtCourses from "./pages/BoughtCourses";
import CoursePage from "./pages/CoursePage";
import Courses from "./pages/Courses";
import { Context } from "./Context/Context";
import { useState } from "react";
import ContactUs from "./pages/ContactUs";
import MentorProfile from "./pages/MentorProfile";
import Primarylayout from "./layouts/Primarylayout";

function App() {
  const [mentorId, setMentorId] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/" element={<Primarylayout />}>
          <Route index element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/saved-courses" element={<SavedCourses />} />
          <Route path="/bought-courses" element={<BoughtCourses />} />
          <Route path="/course-details" element={<CoursePage />} />
          <Route path="/mentor-details" element={<MentorProfile />} />
        </Route>
      </>
    )
  );

  return (
    <Context.Provider value={{ mentorId, setMentorId }}>
      <RouterProvider router={router} />;
    </Context.Provider>
  );
}

export default App;
