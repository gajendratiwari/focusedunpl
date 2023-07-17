import React from "react";
import logo from "../../assets/img/logo/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      {/* <!-- Footer Content --> */}
      <div className="footer__content">
        {/* <!-- About Us --> */}
        <div className="footer__content--about-us footer__content--section">
          <i className="fas fa-user-friends"></i>
          <h3 className="footer__content--about-us__title footer__content--section__title">
            About us
          </h3>

          <Link
            to="about"
            className="footer__content--about-us__link footer__content--section__link"
          >
            What we do
          </Link>

          <Link
            to="about"
            className="footer__content--about-us__link footer__content--section__link"
          >
            History
          </Link>

          <Link
            to="https://www.google.com/search?q=focus+it+education&rlz=1C5CHFA_enAU876AU876&oq=fo&aqs=chrome.0.69i59j69i64j69i57j69i59j69i60l4.6955j0j4&sourceid=chrome&ie=UTF-8"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Location
          </Link>

          <Link
            to="about"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Management Team
          </Link>
        </div>

        {/* <!-- Classes --> */}
        <div className="footer__content--classes footer__content--section">
          <i className="fas fa-dumbbell"></i>
          <h3 className="footer__content--classes__title footer__content--section__title">
            Classes
          </h3>
          <Link
            to="classes"
            className="footer__content--classes__link footer__content--section__link"
          >
            Overview
          </Link>

          <Link
            to="classes"
            className="footer__content--classes__link footer__content--section__link"
          >
            Classes alternate view
          </Link>

          <Link
            to="classes"
            className="footer__content--classes__link footer__content--section__link"
          >
            Class Pricing
          </Link>

          <Link
            to="classes"
            className="footer__content--classes__link footer__content--section__link"
          >
            Single Class
          </Link>

          <Link
            to="contact"
            className="footer__content--classes__link footer__content--section__link"
          >
            Find out more
          </Link>
        </div>

        {/* <!-- Newsletter --> */}
        <div className="footer__content--newsletter footer__content--section">
          <i className="far fa-newspaper"></i>
          <h3 className="footer__content--newsletter__title footer__content--section__title">
            Newsletter
          </h3>
          <p className="footer__content--newsletter__para footer__content--section__para">
            Subscribe to our newsletter to receive regular updates & news from
            us.
          </p>
          <input type="email" placeholder="Your Email" />
          <input type="submit" value="Send" />
        </div>

        {/* <!-- Head Office --> */}
        <div className="footer__content--address footer__content--section">
          {/* <!-- Address --> */}
          <i className="fas fa-map-marked-alt"></i>
          <h3 className="footer__content--address__title footer__content--section__title">
            Head Office
          </h3>
          <p className="footer__content--address__para footer__content--section__para">
            Pokhara, Lekhnath 33700, Nepal
          </p>

          {/* <!-- Email --> */}
          <i className="far fa-envelope-open"></i>
          <h3 className="footer__content--address__title footer__content--section__title">
            Email Us
          </h3>
          <p className="footer__content--address__para footer__content--section__para">
            focusit.edu@gmail.com
          </p>
        </div>
      </div>

      {/* <!-- Footer Logo --> */}
      <div className="footer__logo">
        <img src={logo} alt="footer-logo" />
        <span>फोकस् आईटी एजुकेशन</span>
      </div>

      {/* <!-- Footer Social --> */}
      <div className="footer__social">
        {/* <!-- Call --> */}
        <div className="footer__social--call">
          <i className="fas fa-phone-alt"></i>
          <p className="footer__social--call__para">
            CALL US NOW: +977 985-6061728
          </p>
        </div>

        {/* <!-- Social Icons --> */}
        <div className="footer__social--icons">
          {/* <!-- Facebook --> */}
          <Link
            to="https://www.facebook.com/focusiteducation/"
            className="footer__social--icons__link"
          >
            <i className="fab fa-facebook-f">
              <BsFacebook />
            </i>
          </Link>

          {/* <!-- Instagram --> */}
          <Link to="#" className="footer__social--icons__link">
            <i className="fab fa-instagram">
              {" "}
              <BsInstagram />
            </i>
          </Link>

          {/* <!-- Twitter --> */}
          <Link to="#" className="footer__social--icons__link">
            <i className="fab fa-twitter">
              {" "}
              <FaTwitter />
            </i>
          </Link>

          {/* <!-- YouTube --> */}
          <Link to="#" className="footer__social--icons__link">
            <i className="fab fa-youtube">
              {" "}
              <BsYoutube />
            </i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
