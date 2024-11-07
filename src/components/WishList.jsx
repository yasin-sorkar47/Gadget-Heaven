import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";
import {
  getWishListDataFromLocalStorage,
  removeWishListItemFromLocalStorage,
  setToLocalStorage,
} from "../utilities/localStorage";

function WishList() {
  const dataFromLocalStorage = getWishListDataFromLocalStorage();
  const allData = useLoaderData();
  const [dashBoardData, setDashBoardData] = useState([]);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      dataFromLocalStorage.includes(item.product_id)
    );

    setDashBoardData(filtered);
  }, []);

  const handleDelete = (id) => {
    const filteredData = dashBoardData.filter((item) => item.product_id !== id);
    setDashBoardData(filteredData);
    removeWishListItemFromLocalStorage(id);
  };

  const handleAddToLocalStorage = (id) => {
    setToLocalStorage(id);
  };

  return (
    <div className="w-11/12 mx-auto mt-14 space-y-4">
      <h2 className="text-xl font-bold">WishList</h2>
      {dashBoardData.length === 0 ? (
        <div className="text-center py-5">
          <h1 className="text-4xl font-bold p-5 text-purple-500">
            You have not select any item as wish List.
          </h1>
        </div>
      ) : (
        dashBoardData.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between p-6 shadow-lg bg-white border rounded-lg"
          >
            <div className="flex items-center   gap-x-7">
              <div>
                <img className="w-[200px]" src={item.product_image} alt="" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-bold">{item.product_title}</h1>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <button
                  onClick={() => handleAddToLocalStorage(item.product_id)}
                  className="text-white  font-bold py-3  px-6 rounded-full flex items-center gap-x-2 bg-primaryColor mt-3"
                >
                  Add To Card
                </button>
              </div>
            </div>
            <button onClick={() => handleDelete(item.product_id)}>
              <TiDeleteOutline className="text-4xl text-red-500" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default WishList;
