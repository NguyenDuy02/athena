import { fetchProduct } from "../assets/js/CallAPI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.scss";

export const Home = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(function () {
    let isMounted = true;
    fetchProduct().then(function (data) {
      if (isMounted) {
        setProduct(data);
      } else {
        isMounted = false;
      }
    });
  }, []);

  function filterProduct(value) {
    setFilter(value);

    product.sort((a, b) => {
      if (value === "az") {
        return a.name.localeCompare(b.name);
      } else if (value === "za") {
        return b.name.localeCompare(a.name);
      } else if (value === "09") {
        return a.price - b.price;
      } else if (value === "90") {
        return b.price - a.price;
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="filter">
            <li className="filter-list">
              <i className="fas fa-filter"></i> filter
            </li>
            <li className="filter-list">
              <input
                type="radio"
                value="az"
                checked={filter === "az"}
                onChange={(event) => {
                  filterProduct(event.target.value);
                }}
              />
              <span>by name a - z</span>
            </li>

            <li className="filter-list">
              <input
                type="radio"
                value="za"
                checked={filter === "za"}
                onChange={(event) => {
                  filterProduct(event.target.value);
                }}
              />
              <span>by name z - a</span>
            </li>
            <li className="filter-list">
              <input
                type="radio"
                value="09"
                checked={filter === "09"}
                onChange={(event) => {
                  filterProduct(event.target.value);
                }}
              />
              <span>by price 0 - 9</span>
            </li>
            <li className="filter-list">
              <input
                type="radio"
                value="90"
                checked={filter === "90"}
                onChange={(event) => {
                  filterProduct(event.target.value);
                }}
              />
              <span>by price 9 - 0</span>
            </li>
          </ul>
        </div>
        {product.map((value, index) => {
          return (
            <div key={index} className="col-sm-3">
              <div className="card-deck">
                <div className="card">
                <Link to="product-detail">
                <img
                    className="card-img-top"
                    src={value.image}
                    alt={value.name}
                  />
                </Link>
                  <div className="card-body">
                    <h6 className="card-title">{value.name}</h6>
                    <p className="card-text">
                      {value.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      <sup>
                        <ins>đ</ins>
                      </sup>
                    </p>
                  </div>
                  <div className="detail">
                    <Link to="product-detail">detail</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
