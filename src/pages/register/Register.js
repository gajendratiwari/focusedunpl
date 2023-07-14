import { useEffect } from "react";

const Register = (props) => {
  useEffect(() => {
    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Variables
    // First page
    const slidePage = document.querySelector(".register__content--form__page");
    const firstNextBtn = document.querySelector(".next-1");

    // Second page
    const firstPrevBtn = document.querySelector(".prev-1");
    const secondNextBtn = document.querySelector(".next-2");

    // Third page
    const secondPrevBtn = document.querySelector(".prev-2");
    const thirdNextBtn = document.querySelector(".next-3");

    // Forth page
    const thirdPrevBtn = document.querySelector(".prev-3");
    const submitBtn = document.querySelector(".submit");

    // Progress Step
    const progressStep = document.querySelectorAll(".register__progress--step");

    // Progress Number (The Span Element)
    const progressNumber = document.querySelectorAll(
      ".register__progress--step span"
    );

    // Progress Tick Mark
    const progressTick = document.querySelectorAll(".fa-check");

    let max = 4;
    let current = 1;

    // The Next Button Event Listener Function
    function tick() {
      progressStep[current - 1].classList.add("active");
      progressNumber[current - 1].classList.add("active");
      progressTick[current - 1].classList.add("active");
      current += 1;
    }

    // The Previous Button Event Listener Function
    function untick() {
      progressStep[current - 2].classList.remove("active");
      progressNumber[current - 2].classList.remove("active");
      progressTick[current - 2].classList.remove("active");
      current -= 1;
    }

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Next Btns Events

    // First Next Button Event Listener
    firstNextBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "-33%";
      tick();
    });

    // Second Next Button Event Listener
    secondNextBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "-100%";
      tick();
    });

    // Third Next Button Event Listener
    thirdNextBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "-200%";
      tick();
    });

    // Submit Button Event Listener
    submitBtn.addEventListener("click", () => {
      tick();
      setTimeout(() => {
        alert("Your Form Has Been Successfully Submitted. Thank You My Friend");
        window.location.reload();
      }, 1000);
    });

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- Previous Btns Events

    // First Previous Button Event Listener
    firstPrevBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "0";
      untick();
    });

    // Second Previous Button Event Listener
    secondPrevBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "-33%";
      untick();
    });

    // Third Previous Button Event Listener
    thirdPrevBtn.addEventListener("click", () => {
      slidePage.style.marginLeft = "-100%";
      untick();
    });
  }, []);

  return (
    <section className="register">
      {/* <!-- Register Progress --> */}
      <div className="register__progress">
        <div className="register__progress--step">
          <span>1</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>2</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>3</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>4</span>

          <i className="fa fa-check"></i>
        </div>
      </div>

      {/* <!-- Register Content --> */}
      <div className="register__content">
        <div className="register__content--form">
          {/* <!-- *-*-*-*-*-*-* First Page Starts Here *-*-*-*-*-*-*-*-* --> */}

          <div className="register__content--form__page">
            {/* <!-- First Name --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="first-name">First Name</label>
              <input type="text" />
            </div>

            {/* <!-- Last Name --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" />
            </div>

            {/* <!-- Next Button --> */}
            <div className="register__content--form__page--field">
              <button className="next-1 next">Next</button>
            </div>
          </div>

          {/* <!-- *-*-*-*-*-*-* First Page Ends Here *-*-*-*-*-*-*-*-* --> */}

          {/* <!-- *-*-*-*-*-*-* Second Page Starts Here *-*-*-*-*-*-*-*-* --> */}

          <div className="register__content--form__page">
            {/* <!-- Email Address --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="email-address">Email Address</label>
              <input type="email" />
            </div>

            {/* <!-- Phone Number --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="number" />
            </div>

            {/* <!-- Next Button --> */}
            <div className="register__content--form__page--field btns">
              <button className="prev-1 prev">Previous</button>
              <button className="next-2 next">Next</button>
            </div>
          </div>

          {/* <!-- *-*-*-*-*-*-* Second Page Ends Here *-*-*-*-*-*-*-*-* --> */}

          {/* <!-- *-*-*-*-*-*-* Third Page Starts Here *-*-*-*-*-*-*-*-* --> */}

          <div className="register__content--form__page">
            {/* <!-- Data of Birth --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="date-of-birth">Data of Birth</label>
              <input type="text" />
            </div>

            {/* <!-- Gender --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="gender">Gender</label>
              <select>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* <!-- Next Button --> */}
            <div className="register__content--form__page--field btns">
              <button className="prev-2 prev">Previous</button>
              <button className="next-3 next">Next</button>
            </div>
          </div>

          {/* <!-- *-*-*-*-*-*-* Third Page Ends Here *-*-*-*-*-*-*-*-* --> */}

          {/* <!-- *-*-*-*-*-*-* Forth Page Starts Here *-*-*-*-*-*-*-*-* --> */}

          <div className="register__content--form__page">
            {/* <!-- Username --> */}
            <div className="register__content--form__page--field">
              <label htmlFor="message">Message</label>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
            </div>

            {/* <!-- Password --> */}
            {/* <div className="register__content--form__page--field">
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div> */}

            {/* <!-- Next Button --> */}
            <div className="register__content--form__page--field btns">
              <button className="prev-3 prev">Previous</button>
              <button className="submit">Submit</button>
            </div>
          </div>

          {/* <!-- *-*-*-*-*-*-* Forth Page Ends Here *-*-*-*-*-*-*-*-* --> */}
        </div>
      </div>
    </section>
  );
};

export default Register;
