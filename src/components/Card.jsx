import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const { product_title, product_image, price, product_id } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productDetails/${product_id}`);
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <div className="p-5">
          <img
            className="rounded-lg h-[200px]"
            src={product_image}
            alt="Shoes"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}k</p>
        <div className="card-actions justify-start mt-3">
          <button
            onClick={handleClick}
            className="py-3 px-6 border-2 border-primaryColor rounded-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
