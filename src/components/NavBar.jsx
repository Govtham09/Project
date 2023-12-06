import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger-subtle">
      <div className="container-fluid ms-5 ">
        <img src="/assets/logo.png" alt="Bootstrap" width="35" height="35" />
        <NavLink className="navbar-brand fw-bold fs-3 ms-2" to="/">
          ShopHub
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink
              to="/login"
              className="btn btn-outline-dark ms-3 btn-sm text-light btn-success"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-dark ms-3 btn-sm text-light btn-danger"
            >
              <i className="fa fa-user-plus me-2"></i>SignUp
            </NavLink>
            <NavLink
              to="/cart"
              className="btn btn-outline-dark ms-3 btn-sm text-light btn-primary"
            >
              <i className="fa fa-shopping-cart me-2"></i>Cart
              <sup className="fw-bold"> {state.length}</sup>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
