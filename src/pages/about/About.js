import image from "../../assets/img/founder/founder.jpeg";
import data from "../../assets/data/data.json";
const About = () => {
  return (
    <section className="about">
      {data.About.map((value) => {
        return (
          <div>
            <div className="about__heading">
              <h2 className="about__heading--title">About Us</h2>
              <span></span>
              <p className="about__heading--para">{value.title}</p>
            </div>

            <div className="about__content">
              <div className="about__content--card">
                <h2 className="about__content--card--title">Who We Are</h2>
                <p className="about__content--card--para">{value.who_we_are}</p>
              </div>
              <div className="about__content--card">
                <h2 className="about__content--card--title">How We Work</h2>
                <p className="about__content--card--para">
                  {value.how_we_work}
                </p>
              </div>
              <div className="about__content__founder">
                <div className="about__content__founder--card1">
                  <h2 className="about__content__founder--card1--title">
                    Founder story
                  </h2>
                  <p className="about__content__founder--card1--para">
                    {value.founder_story}
                  </p>
                </div>
                <div className="about__content__founder--card2">
                  <img src={image}></img>
                  <div className="about__content__founder--card2--name">
                    Devendra Raj Tiwari
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default About;
