import React from "react";
import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";

const Motto = (props) => {
  return (
    <section className="motto">
      {data.Motto.map((motto, id) => {
        return (
          <div key={id} className="motto__content">
            <h2 className="motto__content--title">{motto.Title}</h2>
            <p className="motto__content--para">{motto.Description}</p>
            <Link to="about" className="motto__content--link">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Find Out More
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Motto;
