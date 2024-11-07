import { createBrowserRouter } from "react-router-dom";
import ProductsCards from "../components/ProductsCards";
import MainLayOuts from "../layOuts/MainLayOuts";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Statistic from "../pages/Statistic";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductsCards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductsCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/productDetails/:productId",
        element: <Details />,
        loader: () => fetch("../products.json"),
      },

      {
        path: "/statistic",
        element: <Statistic />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routers;
