import React from "react";
import { NavLink } from "react-router-dom";

function Category({ category }) {
  // bg-primaryColor text-white
  return (
    <li>
      <NavLink
        to={`/category/${category}`}
        className={({ isActive }) =>
          isActive
            ? "bg-primaryColor py-3 px-6 rounded-full text-white  font-bold cursor-pointer block"
            : "bg-bodyBg py-3 px-6 rounded-full text-gray-900  font-bold cursor-pointer block"
        }
      >
        {category}
      </NavLink>
    </li>
  );
}

export default Category;
