import React from "react";
import logo from "../../assets/img/logo/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

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
          {/* <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            gYmantic in a nutshell
          </a> */}

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            What we do
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            History
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Location
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Management Team
          </a>
        </div>

        {/* <!-- Classes --> */}
        <div className="footer__content--classes footer__content--section">
          <i className="fas fa-dumbbell"></i>
          <h3 className="footer__content--classes__title footer__content--section__title">
            Classes
          </h3>
          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Overview
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Classes alternate view
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Class Pricing
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Single Class
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Find out more
          </a>
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
          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-facebook-f">
              <BsFacebook />
            </i>
          </a>

          {/* <!-- Instagram --> */}
          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-instagram">
              {" "}
              <BsInstagram />
            </i>
          </a>

          {/* <!-- Twitter --> */}
          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-twitter">
              {" "}
              <FaTwitter />
            </i>
          </a>

          {/* <!-- YouTube --> */}
          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-youtube">
              {" "}
              <BsYoutube />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
