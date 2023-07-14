import image from "../../assets/img/trainers/trainer-7.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about__heading">
        <h2 className="about__heading--title">About Us</h2>
        <span></span>
        <p className="about__heading--para">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>

      <div className="about__content">
        <div className="about__content--card">
          <h2 className="about__content--card--title">Who We Are</h2>
          <p className="about__content--card--para">
            . Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          </p>
        </div>
        <div className="about__content--card">
          <h2 className="about__content--card--title">How We Work</h2>
          <p className="about__content--card--para">
            . Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
            nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          </p>
        </div>
        <div className="about__content__founder">
          <div className="about__content__founder--card1">
            <h2 className="about__content__founder--card1--title">
              Founder story
            </h2>
            <p className="about__content__founder--card1--para">
              More than two decades ago, Ben Chestnut and Dan Kurzius started a
              web design a. More than two decades ago, Ben Chestnut and Dan
              Kurzius started a web design a.
            </p>
          </div>
          <div className="about__content__founder--card2">
            <img src={image}></img>
            <div className="about__content__founder--card2--name">
              Bishal Bhandari
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
