import React, { useRef, useEffect, useState } from "react";
import img1 from "../../assets/img/testimonials/testimonial-1.jpg";
import img2 from "../../assets/img/testimonials/testimonial-2.jpg";
import img3 from "../../assets/img/testimonials/testimonial-3.jpg";
import data from "../../assets/data/data.json";

const Testimonial = (props) => {
  const indicatorImgsRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    const indicatorImgs = indicatorImgsRef.current.children;
    const slides = sliderRef.current.children;
    for (let i = 0; i < indicatorImgs.length; i++) {
      indicatorImgs[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-id"));
        // console.log(slides);
        // Getting The Slide Imgas
        for (let j = 0; j < indicatorImgs.length; j++) {
          indicatorImgs[j].classList.remove("active");
        }

        this.classList.add("active");

        // getting the nex slide
        const id = this.getAttribute("data-id");
        for (let k = 0; k < slides.length; k++) {
          slides[k].classList.remove("active");
        }

        slides[id].classList.add("active");
      });
    }
  }, [indicatorImgsRef, sliderRef]);

  // {`App ${border}`}

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__content">
        <div className="testimonials__content--slider" ref={sliderRef}>
          {data.Testimonials.map((value, id) =>
            id === 0 ? (
              <div
                className="testimonials__content--slider__slide active 
                   "
              >
                <p className="testimonials__content--slider__slide--para">
                  {value.Description}
                </p>
                <h3 className="testimonials__content--slider__slide--title">
                  {value.Name}
                </h3>
              </div>
            ) : (
              <div
                className="testimonials__content--slider__slide 
              "
              >
                <p className="testimonials__content--slider__slide--para">
                  {value.Description}
                </p>
                <h3 className="testimonials__content--slider__slide--title">
                  {value.Name}
                </h3>
              </div>
            )
          )}
        </div>

        <div
          className="testimonials__content--indicator"
          ref={indicatorImgsRef}
        >
          <img
            src={img1}
            alt="testimonial-1"
            className="testimonials__content--indicator__img active"
            data-id="0"
          />
          <img
            src={img2}
            alt="testimonial-2"
            className="testimonials__content--indicator__img"
            data-id="1"
          />
          <img
            src={img3}
            alt="testimonial-3"
            className="testimonials__content--indicator__img"
            data-id="2"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
