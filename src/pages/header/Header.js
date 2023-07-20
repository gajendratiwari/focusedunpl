import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo/logo.png";
const Header = (props) => {
  const [isActive, setActive] = useState("false");

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    let checkbox = document.querySelector('input[name="theme"]');
    let htmlElement = document.documentElement;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
      }
    });

    let smoothTrans = () => {
      htmlElement.classList.add("transition");

      window.setTimeout(() => {
        htmlElement.classList.remove("transition");
      }, 1000);
    };

    setIsChecked(!isChecked);
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header
      onClick={handleToggle}
      className={`${isActive ? "header" : "header open"}`}
    >
      {/* <!-- Hamburger Lines Container --> */}
      <div className={`${isActive ? "header__menu" : "header__menu open"}`}>
        <div className="header__menu--line"></div>
      </div>

      {/* <!-- Overlay --> */}
      <div
        className={`${isActive ? "header__overlay" : "header__overlay open"}`}
      ></div>

      {/* <!-- Navigation --> */}
      <nav className="header__nav">
        <Link to="/" className="header__nav--logo">
          <img src={logo1} alt="logo" />
        </Link>

        <ul className="header__nav--links">
          <li className="header__nav--links__item">
            <Link
              to="/
          "
              data-text="Home"
            >
              Home
            </Link>
          </li>

          <li className="header__nav--links__item">
            <Link to="/about" data-text="About">
              About
            </Link>
          </li>

          <li className="header__nav--links__item">
            <Link to="/classes" data-text="Classes">
              Classes
            </Link>
          </li>

          <li className="header__nav--links__item">
            <Link to="/contact" data-text="Contact Us">
              Contact Us
            </Link>
          </li>

          <div className="header__nav--links__toggle-container">
            <input
              type="checkbox"
              id="toggle"
              name="theme"
              onChange={checkHandler}
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
