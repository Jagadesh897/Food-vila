
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/Restaurantmenu"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart"



const Lottery = lazy( () => import("./Components/Lottery"));

const AppLayout = () => {
  return (
    
    <>
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
    
  )
};

const appRender = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu/> },
      { path:"/lottery",element: <Suspense fallback={<h1>...loading</h1>} > <Lottery/></Suspense>},
      { path:"/Cart",element: <Cart/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRender} />);
