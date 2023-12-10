//For Adding Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//For Delete Item from Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

//For Removing entire product from cart
export const delCartItem = (item, completeRemoval = true) => {
  return {
    type: "DEL_CART",
    payload: item,
    completeRemoval,
  };
};
