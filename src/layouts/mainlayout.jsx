import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CheckLogin from "../components/CheckLogin";

const Mainlayout = () => {
  return (
    <>
      <CheckLogin>
        <Header />
        <Outlet />
        <Footer />
      </CheckLogin>
    </>
  );
};

export default Mainlayout;
