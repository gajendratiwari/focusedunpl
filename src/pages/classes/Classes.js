import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import data from "../../assets/data/data.json";
const Classes = () => {
  const params = useParams();
  const data = useLoaderData();

  return (
    <div className="classes">
      <div className="classes__heading">
        <h2 className="classes__heading--title">
          A World of Knowledge at Your Fingertips
        </h2>
      </div>
      {data.map((service, id) => {
        return (
          <div key={id} className="classes__content">
            <h2 className="classes__content--title">{service.title}</h2>
            <p className="classes__content--para">{service.description}</p>
            <Link className="classes__content--link" to={`${service.id}`}>
              Read More
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Classes;
export function loader() {
  return data.Services;
}
