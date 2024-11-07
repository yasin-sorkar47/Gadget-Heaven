import { toast } from "react-toastify";

// get from localStorage

const getDataFromLocalStorage = () => {
  const getProductData = localStorage.getItem("products");

  if (getProductData) {
    return JSON.parse(getProductData);
  }

  return [];
};

// set to localStorage
const setToLocalStorage = (id) => {
  const getProductData = getDataFromLocalStorage();

  if (getProductData.includes(id)) {
    toast.error("the item has been already added.");
  } else {
    getProductData.push(id);
    const stringData = JSON.stringify(getProductData);
    localStorage.setItem("products", stringData);
    toast.success("the item has added in dashboard.");
  }
};

// remove from localStorage
const removeItemFromLocalStorage = (id) => {
  const getProductData = getDataFromLocalStorage();
  const filteredData = getProductData.filter((item) => item !== id);
  const stringData = JSON.stringify(filteredData);
  localStorage.setItem("products", stringData);
  toast.error("removed item from dashboard.");
};

// get wishList from localStorage
const getWishListDataFromLocalStorage = () => {
  const getProductData = localStorage.getItem("wishList");

  if (getProductData) {
    return JSON.parse(getProductData);
  }

  return [];
};

// set wishList to localStorage
const setWishListDataToLocalStorage = (id) => {
  const getProductData = getWishListDataFromLocalStorage();

  if (getProductData.includes(id)) {
    toast.error("the item has been already added in wish List.");
  } else {
    getProductData.push(id);
    const stringData = JSON.stringify(getProductData);
    localStorage.setItem("wishList", stringData);
    toast.success("the item has added in wish List.");
  }
};

// remove wishList from localStorage
const removeWishListItemFromLocalStorage = (id) => {
  const getProductData = getWishListDataFromLocalStorage();
  const filteredData = getProductData.filter((item) => item !== id);
  const stringData = JSON.stringify(filteredData);
  localStorage.setItem("wishList", stringData);
  toast.error("removed item from wish List.");
};

export {
  getDataFromLocalStorage,
  getWishListDataFromLocalStorage,
  removeItemFromLocalStorage,
  removeWishListItemFromLocalStorage,
  setToLocalStorage,
  setWishListDataToLocalStorage,
};
