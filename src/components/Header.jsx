import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import header from "../assets/banner.jpg";
import { DashBoardCardContext } from "../context";
import {
  getDataFromLocalStorage,
  getWishListDataFromLocalStorage,
} from "../utilities/localStorage";
import Heading from "./Heading";

function Header() {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const { productId } = useParams();
  const allDahsBoardCardsData = getDataFromLocalStorage();
  const allDahsBoardWishListData = getWishListDataFromLocalStorage();
  const [showCountInShoppingCard, setShowCountInShoppingCard] = useState([]);
  const [showCountInWishList, setShowCountInWishList] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [_, setShowDashBoardCard] = useContext(DashBoardCardContext);

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Upgrade Your Tech Accessorize with Gadget Heaven Accessories");
      document.title = `Gadgets | Gadget Heaven`;
    } else if (location.pathname === "/statistic") {
      setTitle("Statistics");
      document.title = `Statistic | Gadget Heaven`;
    } else if (location.pathname === "/dashboard") {
      setTitle("Dashboard");
      document.title = `Dashboard | Gadget Heaven`;
    } else if (location.pathname === `/productDetails/${productId}`) {
      setTitle("Product Details");
      document.title = `Product Details | Gadget Heaven`;
    } else if (location.pathname === `/contact`) {
      setTitle("Contact Us");
      document.title = `Contact Us | Gadget Heaven`;
    }
  }, [location.pathname, productId]);

  useEffect(() => {
    setShowCountInShoppingCard(allDahsBoardCardsData);
  }, [productId, location.pathname]);

  useEffect(() => {
    setShowCountInWishList(allDahsBoardWishListData);
  }, [productId]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) =>
        setCategories(
          data.map((item) => `/category/${item.split(" ").join("%20")}`)
        )
      );
  }, [location.pathname]);

  const handleCard = (status) => {
    if (status === "card") {
      navigate("/dashboard");
      setShowDashBoardCard(true);
    } else if (status === "whishList") {
      navigate("/dashboard");
      setShowDashBoardCard(false);
    }
  };

  return (
    <header
      className={`p-2 lg:p-0 ${
        location.pathname === "/" || categories.includes(location.pathname)
          ? "lg:w-11/12 mt-3 md:mt-8"
          : ""
      }  mx-auto`}
    >
      <div
        className={`${
          location.pathname === "/" || categories.includes(location.pathname)
            ? "bg-white bg-opacity-25 border-2 p-2 rounded-2xl"
            : ""
        }`}
      >
        <div
          className={`  pt-4 ${
            location.pathname === "/" || categories.includes(location.pathname)
              ? "bg-primaryColor rounded-2xl "
              : ""
          }`}
        >
          <div
            className={`navbar ${
              location.pathname === "/" ||
              categories.includes(location.pathname)
                ? "lg:w-11/12"
                : "lg:w-10/12"
            }  mx-auto`}
          >
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex="0"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/statistic">Statistic</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </ul>
              </div>
              <NavLink
                className={`text-2xl cursor-pointer font-bold ${
                  location.pathname === "/" ||
                  categories.includes(location.pathname)
                    ? "text-primaryFontColor"
                    : "text-primaryColor"
                }  `}
              >
                Gadget Heaven
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li
                  className={`${
                    location.pathname === "/" ||
                    categories.includes(location.pathname)
                      ? "text-primaryFontColor"
                      : "text-gray-900"
                  }`}
                >
                  <NavLink to="/">Home</NavLink>
                </li>
                <li
                  className={`${
                    location.pathname === "/" ||
                    categories.includes(location.pathname)
                      ? "text-primaryFontColor"
                      : "text-gray-900"
                  }`}
                >
                  <NavLink to="/statistic">Statistic</NavLink>
                </li>
                <li
                  className={`${
                    location.pathname === "/" ||
                    categories.includes(location.pathname)
                      ? "text-primaryFontColor"
                      : "text-gray-900"
                  }`}
                >
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li
                  className={`${
                    location.pathname === "/" ||
                    categories.includes(location.pathname)
                      ? "text-primaryFontColor"
                      : "text-gray-900"
                  }`}
                >
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button
                onClick={() => handleCard("card")}
                className="bg-white p-1 rounded-full relative"
              >
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=rMXM_J0hBtPS&format=png&color=000000"
                  alt="icon"
                />
                {showCountInShoppingCard?.length === 0 ? (
                  ""
                ) : (
                  <span className="absolute -top-4 -right-2 text-white bg-red-600 block border px-2 rounded-full">
                    {showCountInShoppingCard?.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleCard("whishList")}
                className="bg-white p-1 rounded-full ml-2 relative"
              >
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=64767&format=png&color=000000"
                  alt="icon"
                />
                {allDahsBoardWishListData?.length === 0 ? (
                  ""
                ) : (
                  <span className="absolute -top-4 -right-2 text-white bg-red-600 block border px-2 rounded-full">
                    {allDahsBoardWishListData?.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div
            className={`${location.pathname !== "/" ? "bg-primaryColor" : ""}`}
          >
            {/* banner */}
            <Heading title={title} />
          </div>
        </div>
      </div>
      {location.pathname === "/" || categories.includes(location.pathname) ? (
        <div className="-mt-[30%] md:-mt-[31%] lg:-mt-[27%] xl:-mt-[14%] text-center px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="bg-white bg-opacity-25 border-2 p-2 lg:p-5 rounded-2xl inline-block">
            <img
              className="w-[1062px] mx-auto rounded-2xl"
              src={header}
              alt="image"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
