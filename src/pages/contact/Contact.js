import Register from "../register/Register";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__content--title">
          <h2>We Are Here For You</h2>
        </div>
        <div className="contact__content__card">
          <h2 className="contact__content__card--heading">Contact Us</h2>
          <p className="contact__content__card--para">
            We can help. Our team of expert is on hand to answer your question
          </p>
        </div>
      </div>
      <Register />
    </section>
  );
};
export default Contact;
