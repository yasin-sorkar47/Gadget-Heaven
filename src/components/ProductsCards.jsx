import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";
function ProductsCards() {
  const params = useParams();
  const data = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (params.category) {
      const allData = data.filter((item) => item.category === params.category);
      setProducts(allData);
      if (params.category === "All") {
        setProducts(data);
      }
    } else {
      setProducts(data);
    }
  }, [data, params]);

  return (
    <>
      <Cards products={products} />
    </>
  );
}

export default ProductsCards;
