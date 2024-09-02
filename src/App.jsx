import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import Mainlayout from "./layouts/mainlayout";
import Login from "./pages/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import SavedCourses from "./pages/SavedCourses";
import BoughtCoures from "./pages/BoughtCourses";
import CoursePage from "./pages/CoursePage";

import Courses from "./pages/Courses";
import { Context } from "./Context/Context";
import { useState } from "react";
import ContactUs from "./pages/ContactUs";

function App() {
  const [courseId, setCourseId] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<MainPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/saved-courses" element={<SavedCourses />} />
          <Route path="/bought-courses" element={<BoughtCoures />} />
          <Route path="/course-details" element={<CoursePage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <Context.Provider value={{ courseId, setCourseId }}>
        <RouterProvider router={router} />;
      </Context.Provider>
    </>
  );
}

export default App;
