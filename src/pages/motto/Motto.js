import React from "react";
import data from "../../assets/data/data.json";

const Motto = (props) => {
  return (
    <section className="motto">
      {data.Motto.map((motto, id) => {
        return (
          <div key={id} className="motto__content">
            <i className="fab fa-accessible-icon"></i>
            <h2 className="motto__content--title">{motto.Title}</h2>
            <p className="motto__content--para">{motto.Description}</p>
            <a href="#" className="motto__content--link">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Find Out More
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Motto;
