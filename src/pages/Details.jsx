import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

import {
  getWishListDataFromLocalStorage,
  setToLocalStorage,
  setWishListDataToLocalStorage,
} from "../utilities/localStorage";

function Details() {
  const data = useLoaderData();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [ratingCount, setRatingCount] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [wishDisabled, setWishDisabled] = useState(false);
  const wishDataLocal = getWishListDataFromLocalStorage();

  const {
    availability,
    description,
    price,
    product_image,
    product_title,
    rating,
    specification,
    product_id,
  } = product;

  useEffect(() => {
    const fined = data.find((item) => item.product_id === parseInt(productId));
    setProduct(fined);

    if (rating) {
      const arr = new Array(parseInt(rating)).fill(null);
      setRatingCount(arr);
    }
  }, [productId, rating]);

  const handleAddToLocalStorage = (id) => {
    setToLocalStorage(id);
  };
  const handleWishList = (id) => {
    setWishListDataToLocalStorage(id);
    setWishDisabled(true);
  };

  return (
    <div className="-mt-[35%]  md:-mt-[20%] lg:-mt-[9%] m-5 lg:m-0">
      <div className="bg-white rounded-lg lg:w-11/12 xl:w-8/12 mx-auto p-3 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div>
            <img
              className="lg:max-w-[500px] rounded-lg "
              src={product_image}
              alt="image"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold ">{product_title}</h1>
            <p className="pb-2">Price: ${price}</p>
            <span className="py-1  px-4 bg-lime-500 bg-opacity-20 rounded-full border-lime-500 text-lime-500">
              {availability ? "In Stock" : "Out Stock"}
            </span>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">specification:</p>
            <ol className="text-gray-500 list-decimal space-y-1 ml-4">
              {specification?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <span className="font-bold">Rating</span>
            <div className="flex items-center my-2 gap-1">
              {ratingCount?.map((_, i) => (
                <FaStar key={i} className="text-yellow-500 " />
              ))}

              <FaRegStar />
              <span className="bg-gray-200 py-1 px-2 rounded-full">
                {rating}
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <button
                onClick={() => handleAddToLocalStorage(product_id)}
                className={`text-white  font-bold py-3  px-6 rounded-full  bg-primaryColor flex items-center gap-x-2`}
              >
                Add To Card
                <MdOutlineShoppingCart />
              </button>
              <button
                disabled={wishDisabled || wishDataLocal.includes(product_id)}
                onClick={() => handleWishList(product_id)}
                className={`border p-2 ${
                  wishDataLocal.includes(product_id)
                    ? "bg-gray-300 rounded-full"
                    : "bg-white rounded-full"
                }`}
              >
                <GiSelfLove className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
