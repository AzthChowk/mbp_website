import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NoPageFound from "./NoPageFound";
import AboutUsPage from "./views/AboutUsPage";
import ContactPage from "./views/ContactPage";
import EquipmentPage from "./views/EquipmentPage";
import HomePage from "./views/HomePage/HomePage";
import HomePageRoot from "./views/HomePage/HomePageRoot";
import ProductPage from "./views/ProductPage";
import ServicePage from "./views/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoot />,
    errorElement: <NoPageFound />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "equipments",
        element: <EquipmentPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
