import LandingPage from "./pages/landingPage/LandingPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Classes, { loader as classList } from "./pages/classes/Classes";
import Contact from "./pages/contact/Contact";
import Root from "./pages/root/Root";
import Error from "./pages/error/Error";
import ClassDetails from "./pages/classDetails/ClassDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "", element: <LandingPage /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "classes",
          element: <Classes />,
          loader: classList,
        },
        {
          path: "classes/:classId",
          element: <ClassDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
