import { useEffect, useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";
import {
  getDataFromLocalStorage,
  removeItemFromLocalStorage,
} from "../utilities/localStorage";
import Modal from "./Modal";

function DashBoardCard() {
  const dataFromLocalStorage = getDataFromLocalStorage();
  const allData = useLoaderData();
  const [dashBoardData, setDashBoardData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      dataFromLocalStorage.includes(item.product_id)
    );
    const total = filtered.reduce((prev, current) => current.price + prev, 0);
    setTotalPrice(total);

    setDashBoardData(filtered);
  }, []);

  const handleSort = () => {
    const sortedData = [...dashBoardData].sort((a, b) => b.price - a.price);
    setDashBoardData(sortedData);
  };

  const handleDelete = (id) => {
    const filteredData = dashBoardData.filter((item) => item.product_id !== id);
    const total = filteredData.reduce(
      (prev, current) => current.price + prev,
      0
    );
    setTotalPrice(total);
    setDashBoardData(filteredData);
    removeItemFromLocalStorage(id);
  };

  return (
    <>
      <Modal
        totalPrice={totalPrice}
        setDashBoardData={setDashBoardData}
        setTotalPrice={setTotalPrice}
      />
      <div className="w-11/12 mx-auto mt-14 space-y-4">
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold">Card</h2>
          <div className="flex flex-col md:flex-row items-center gap-y-3 md:gap-y-0 gap-x-5">
            <h5 className="text-xl font-bold">
              Total cost: ${totalPrice.toFixed(2)}
            </h5>
            <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-3">
              <button
                onClick={handleSort}
                className="border border-primaryColor py-2 px-8 rounded-full text-primaryColor font-bold flex items-center gap-x-2"
              >
                Sort by Price
                <FaSortAmountDown />
              </button>
              <button
                disabled={dashBoardData.length === 0}
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className={`${
                  dashBoardData.length === 0
                    ? "bg-purple-400"
                    : "bg-primaryColor"
                }  py-2 px-8 rounded-full text-white font-bold`}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        {dashBoardData.length === 0 ? (
          <div className="text-center py-5">
            <h1 className="text-4xl font-bold p-5 text-purple-500">
              You have not select any item yet.
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
                </div>
              </div>
              <button onClick={() => handleDelete(item.product_id)}>
                <TiDeleteOutline className="text-4xl text-red-500" />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default DashBoardCard;
