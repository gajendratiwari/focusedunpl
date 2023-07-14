import React from "react";
import { Link } from "react-router-dom";

const ShowCase = (props) => {
  return (
    <section className="showcase">
      <div className="showcase__content">
        <h1 className="showcase__content--title">
          YOUR JOURNEY TO SUCCESS STARTS FROM HERE
        </h1>
        <p className="showcase__content--para">
          We offer Computer and Accounting courses at short course
        </p>
        <div className="showcase__content--links">
          <Link to="/about">Find out more</Link>
          <Link to="/contact">Join now</Link>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
