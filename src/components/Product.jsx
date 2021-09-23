import { useState } from "react";

export const Product = ({ setProduct }) => {
  const [filter, setFilter] = useState("");

  function filterProduct(value) {
    setFilter(value);

    setProduct.sort((a, b) => {
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
    <div className="col-sm-9">
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
              <span><i class="fas fa-sort-alpha-down"></i></span>
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
              <span><i class="fas fa-sort-alpha-down-alt"></i></span>
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
              <span><i class="fas fa-sort-numeric-down"></i></span>
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
              <span><i class="fas fa-sort-numeric-down-alt"></i></span>
            </li>
          </ul>
        </div>
        {setProduct.map((value, index) => {
          return (
            <div key={index} className="col-sm-4">
              <div className="card-deck">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={value.image}
                    alt={value.name}
                  />
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
                  <div className="detail">Add to cart</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
