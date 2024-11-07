import React from "react";
import Card from "./Card";

function Cards({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-6">
      {/* card  */}
      {products.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </div>
  );
}

export default Cards;
