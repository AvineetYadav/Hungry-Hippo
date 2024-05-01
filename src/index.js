import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";
import Search from "./Components/Search";
import Offer from "./Components/Offer";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import LogIn from "./Components/LogIn";
import LoginPage from "./Components/LoginPage";

const Apply = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />,
        <Outlet />
      </Provider>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Apply />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRoute} />);
