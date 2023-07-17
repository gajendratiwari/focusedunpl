import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";

const ClassDetails = (props) => {
  const params = useParams();
  const [classes, setClasses] = useState({});

  useEffect(() => {
    const id = params.classId; // Replace with the desired ID
    const result = getDataById(id);
    setClasses(result); // Output the retrieved data to the console
  }, []);

  function getDataById(id) {
    return data.Services.find((item) => item.id === id);
  }

  return (
    <section className="classDetails">
      <div className="classDetails__content">
        <div className="classDetails__content--heading">
          <div className="classDetails__content--heading--title">
            <h1> {classes.title}</h1>
          </div>
          <h4 className=" classDetails__content--heading--head">
            {classes.description}
          </h4>
          <p className="classDetails__content--heading--para">
            {classes.short_introduction}
          </p>
        </div>
        <div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">
              Course Information
            </h2>
            <span></span>
            <p className="classDetails__content__card--para">
              {classes.course_information}
            </p>
          </div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">
              What Will You Learn?
            </h2>
            <span></span>

            <div className="classDetails__content__card--para">
              {classes.what_you_learn}
              {classes.learning_list?.map((list, index) => {
                return (
                  <ul key={index}>
                    <li>{list}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="classDetails__content__card">
            <h2 className="classDetails__content__card--title">Requirements</h2>
            <span></span>
            <div className="classDetails__content__card--para">
              {classes.requriements}
              {classes.requirements_list?.map((list, index) => {
                return (
                  <ul key={index}>
                    <li>{list}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      );
    </section>
  );
};

export default ClassDetails;
