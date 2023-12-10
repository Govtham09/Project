import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  let componentMounted = useRef(true);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    setAddedToCart((prev) => ({
      ...prev,
      [product.id]: true,
    }));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons d-flex justify-content-center pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      {filter.map((product) => (
        <div key={product.id} className="col-md-3 mb-4">
          <div class="card h-100 text-center p-4">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0 fw-normal lh-lg ">
                {product.title.substring(0, 20)}...
              </h5>
              <p className="card-text lead fw-bold">₹{product.price}</p>
              <NavLink
                to={`/product/${product.id}`}
                className="btn btn-outline-dark me-3"
              >
                Buy Now
              </NavLink>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
                disabled={addedToCart[product.id]}
              >
                {addedToCart[product.id] ? "Add to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1 className="display-6 fw-bolder text-center">ALL COLLECTIONS</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}
