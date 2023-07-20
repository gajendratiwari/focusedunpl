import React from "react";
import data from "../../assets/data/data.json";

const Features = (props) => {
  return (
    <section className="features">
      {data.Services.map((services, id) => {
        return (
          <div key={id} className="features__content">
            <h2 className="features__content--title">{services.title}</h2>
            <p className="features__content--para">{services.description}</p>
            <a href="classes" className="features__content--link">
              Read More
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
