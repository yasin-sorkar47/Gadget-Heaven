import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/Group.png";

function Modal({ totalPrice, setDashBoardData, setTotalPrice }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setTotalPrice(0);
    setDashBoardData([]);
    const stringData = JSON.stringify([]);
    localStorage.setItem("products", stringData);
    navigate("/");
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box text-center">
        <img className="m-auto mt-3" src={image} alt="image" />
        <h1 className="text-xl font-bold py-3 border-b text-center mt-2">
          Payment Successfully
        </h1>
        <p className="pt-4">Thanks for purchasing</p>
        <p className="py-4">Total: {totalPrice.toFixed(2)}</p>
        <form method="dialog">
          <button
            onClick={handleClick}
            className="bg-gray-200 block w-full py-1 rounded-full "
          >
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
