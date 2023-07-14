import Client from "../client/Client";
import Features from "../features/Features";
import Header from "../header/Header";
import Motto from "../motto/Motto";
import Register from "../register/Register";
import Scroll from "../scroll/Scroll";
import ShowCase from "../showCase/ShowCase";
import Testimonial from "../testimonial/Testimonial";
import Trainer from "../trainer/Trainer";

const LandingPage = () => {
  return (
    <div className="container_Landing_Page">
      {/* **************************** ShowCase section *************************** */}

      <ShowCase />

      {/* **************************** Motto section *************************** */}

      <Motto />

      {/* **************************** Features section *************************** */}

      <Features />

      {/* **************************** Trainer section *************************** */}

      <Trainer />

      {/* **************************** Testimonials section *************************** */}

      <Testimonial />

      {/* **************************** Clients section *************************** */}

      <Client />
      {/* **************************** Scroll section *************************** */}
      <Scroll />

      {/* **************************** Register section *************************** */}

      <Register />
    </div>
  );
};

export default LandingPage;
