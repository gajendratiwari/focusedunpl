import React from "react";

const Client = (props) => {
  return (
    <section className="clients">
      <h2 className="clients__title">Our Clients</h2>
      <div className="clients__content">
        <div className="clients__content--img">
          <img src="img/clients/client-1.png" alt="client-1" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-2.png" alt="client-2" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-3.png" alt="client-3" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-4.png" alt="client-4" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-5.png" alt="client-5" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-6.png" alt="client-6" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-7.png" alt="client-7" />
        </div>

        <div className="clients__content--img">
          <img src="img/clients/client-8.png" alt="client-8" />
        </div>
      </div>
    </section>
  );
};

export default Client;
