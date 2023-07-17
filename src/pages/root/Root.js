import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Scroll from "../scroll/Scroll";
const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Scroll />
      <Footer />
    </div>
  );
};

export default Root;
