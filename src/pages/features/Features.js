import React from "react";
import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";

const Features = (props) => {
  return (
    <section className="features">
      {data.Services.map((services, id) => {
        return (
          <div key={id} className="features__content">
            <h2 className="features__content--title">{services.title}</h2>
            <p className="features__content--para">{services.description}</p>
            <Link to="classes" className="features__content--link">
              Read More
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
