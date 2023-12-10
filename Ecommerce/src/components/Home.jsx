import React from "react";
import Products from "./Products";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-light text-white border-0 ">
        <img
          src="/assets/bg1.png"
          className="card-img w-75 rounded mx-auto"
          alt="Background"
          height="500"
        />
        <div className="card-img-overlay justify-content-center m-5">
          <h5 class="card-title lh-lg display-4 lead mx-2 fw-normal fst-italic text-center p-4 m-2 text-danger fw-semibold ">
            FASHION
          </h5>
          <div className="card-img-overlay">
            <h6 className="card-title lh-lg lead mx-5 fs-3 fw-normal fst-italic text-center p-2 m-2 text-danger fw-semibold">
              Trendy
            </h6>
            <h6 className="card-title lh-lg display-6 lead mx-5 fw-normal fst-italic text-center p-4 m-2 text-danger fw-semibold">
              NEW SEASON ARRIVALS
            </h6>
            <h6 className="card-title lead mx-5 fs-2 fw-normal fst-italic text-center p-5 m-4 text-danger fw-semibold">
              Check Out All the Trends
            </h6>
            <NavLink
              to="/products"
              className="position-absolute top-50 start-50 translate-middle btn btn-outline-dark btn-warning fw-bold m-5 px-5 lh-lg mx-auto "
            >
              SHOP NOW
            </NavLink>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
