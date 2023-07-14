import React, { useRef, useEffect, useState } from "react";
import img1 from "../../assets/img/testimonials/testimonial-1.jpg";
import img2 from "../../assets/img/testimonials/testimonial-2.jpg";
import img3 from "../../assets/img/testimonials/testimonial-3.jpg";
const Testimonial = (props) => {
  const indicatorImgsRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    const indicatorImgs = indicatorImgsRef.current.children;
    const slides = sliderRef.current.children;
    for (let i = 0; i < indicatorImgs.length; i++) {
      indicatorImgs[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-id"));

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

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__content">
        <div className="testimonials__content--slider" ref={sliderRef}>
          <div className="testimonials__content--slider__slide active">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Natasha Barton
            </h3>
          </div>

          <div className="testimonials__content--slider__slide">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Ryan Cavill
            </h3>
          </div>

          <div className="testimonials__content--slider__slide">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Sandra Rogers
            </h3>
          </div>
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
