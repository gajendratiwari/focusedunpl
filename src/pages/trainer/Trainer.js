import React from "react";
import trainer1 from "../../assets/img/trainers/trainer-7.jpg";
import trainer2 from "../../assets/img/trainers/trainer-8.jpg";
import trainer3 from "../../assets/img/trainers/trainer-9.jpg";
import data from "../../assets/data/data.json";

const Trainer = (props) => {
  return (
    <section className="trainers">
      <h2 className="trainers__title">Meet Our Expert Trainers</h2>
      <div className="trainers__content">
        {data.Trainers.map((trainers, id) => {
          return (
            <div key={id} className="trainers__content--card">
              <h4 className="trainers__content--card__specialty">
                {trainers.Specialist}
              </h4>
              <h3 className="trainers__content--card__name">{trainers.Name}</h3>
              <img
                src={trainers.url}
                alt="trainers"
                className="trainers__content--card__img"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trainer;
