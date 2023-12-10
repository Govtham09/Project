import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, delCartItem } from "../redux/actions/index";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    const handleRemove = (item) => {
      dispatch(delCartItem(item, true));
    };

    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5 lh-lg">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold text-dark">
                  {product.qty} X ₹{product.price}
                </p>
                <p className="lead fw-bold lh-sm text-dark">
                  Total Price = ₹{(product.qty * product.price).toFixed(2)}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <span className="lead fw-bold">{product.qty}</span>
                <button
                  className="btn btn-outline-dark ms-3"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <button
                  className="btn btn-outline-dark ms-3 fw-bold"
                  onClick={() => handleRemove(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const orderSummary = () => {
    let totalPrice = 0;
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4 className="mb-4">Order Summary</h4>
              {state.map((product) => {
                const productTotal = product.qty * product.price;
                totalPrice += productTotal;
                return (
                  <div
                    key={product.id}
                    className="d-flex justify-content-between mb-2"
                  >
                    <span>
                      {product.title} ({product.qty} X ₹{product.price})
                    </span>
                    <span>₹{productTotal.toFixed(2)}</span>
                  </div>
                );
              })}
              <hr />
              <div className="d-flex justify-content-between">
                <span>
                  <strong>Total:</strong>
                </span>
                <span>
                  <strong>₹{totalPrice.toFixed(2)}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && orderSummary()}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
