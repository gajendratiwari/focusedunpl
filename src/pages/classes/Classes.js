import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
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
      {data.map((user) => {
        return (
          <div key={user.id} className="classes__content">
            <h2 className="classes__content--title">{user.name}</h2>
            <p className="classes__content--para">{user.body}</p>
            <Link className="classes__content--link" to={`${user.id}`}>
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
export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData;
  }
}
