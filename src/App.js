import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";

//React.createElement => Object => HTML(DOM)
//JSX => React.createElement => Object => HTML(DOM)

/**
 * header
 *  - Logo
 *  - Nav Items(right side)
 *  - cart
 * body
 *  - Search bar
 *  - RestrauntList
 *    -Image
 *    -Name
 *    -Rating
 *    -Cusines
 *
 * footer
 *  - Links
 *  - copywrite
 */

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter