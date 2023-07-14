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

      {/* <div className="motto__content">
        <i className="fas fa-dumbbell"></i>
        <h2 className="motto__content--title">Use it or Lose it</h2>
        <p className="motto__content--para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          fuga, quas libero alias blanditiis animi totam distinctio delectus
          dolor. Vero quasi aliquid illum. Dolorum, consequatur!
        </p>
        <a href="#" className="motto__content--link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div>
      <div className="motto__content">
        <i className="fas fa-dumbbell"></i>
        <h2 className="motto__content--title">Use it or Lose it</h2>
        <p className="motto__content--para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          fuga, quas libero alias blanditiis animi totam distinctio delectus
          dolor. Vero quasi aliquid illum. Dolorum, consequatur!
        </p>
        <a href="#" className="motto__content--link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div>

      <div className="motto__content">
        <i className="fas fa-medal"></i>
        <h2 className="motto__content--title">No Pain, No Gain</h2>
        <p className="motto__content--para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          fuga, quas libero alias blanditiis animi totam distinctio delectus
          dolor. Vero quasi aliquid illum. Dolorum, consequatur!
        </p>
        <a href="#" className="motto__content--link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div> */}
    </section>
  );
};

export default Motto;
