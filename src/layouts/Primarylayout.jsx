import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CheckLogin from "../components/CheckLogin";

const Primarylayout = () => {
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

export default Primarylayout;
