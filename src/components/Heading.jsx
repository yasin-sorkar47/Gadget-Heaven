import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DashBoardCardContext } from "../context";

function Heading({ title }) {
  const location = useLocation();
  const naviGate = useNavigate();
  const { productId } = useParams();
  const [showDahsBoardCard, setShowDashBoardCard] =
    useContext(DashBoardCardContext);
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    naviGate("/dashboard");
  };

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) =>
        setCategories(
          data.map((item) => `/category/${item.split(" ").join("%20")}`)
        )
      );
  }, [location.pathname]);

  return (
    <div
      className={`px-2 lg:px-0 lg:w-11/12 mx-auto text-center ${
        location.pathname === "/" || categories.includes(location.pathname)
          ? "pb-[130px] md:pb-[268px]"
          : "py-8"
      } ${
        location.pathname === `/productDetails/${productId}`
          ? "pb-[100px] md:pb-[140px]"
          : ""
      } `}
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl lg:max-w-[700px] lg:leading-[58px] xl:leading-0 xl:text-[56px] text-primaryFontColor font-bold xl:max-w-[1120px] mx-auto mt-12 mb-6">
        {title}
      </h1>
      <p className="text-sm md:text-base text-primaryFontColor font-normal max-w-[796px] mx-auto mb-14">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      {location.pathname === "/" || categories.includes(location.pathname) ? (
        <button
          onClick={handleClick}
          className="bg-primaryFontColor py-2 px-4 rounded-full text-primaryColor font-bold"
        >
          Shop Now
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/dashboard" && (
        <div className="space-x-6">
          <button
            onClick={() => setShowDashBoardCard(true)}
            className={`${
              showDahsBoardCard
                ? "bg-primaryFontColor py-2 px-8 rounded-full text-primaryColor font-bold"
                : "border py-2 px-8 rounded-full text-white font-bold"
            } `}
          >
            Card
          </button>
          <button
            onClick={() => setShowDashBoardCard(false)}
            className={`${
              showDahsBoardCard
                ? "border py-2 px-8 rounded-full text-white font-bold"
                : "bg-primaryFontColor py-2 px-8 rounded-full text-primaryColor font-bold"
            } `}
          >
            WishList
          </button>
        </div>
      )}
    </div>
  );
}

export default Heading;
