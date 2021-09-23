import axios from "axios";
import { useEffect, useState } from "react";
import { fetchProduct } from "../assets/js/CallAPI";

export const TableProduct = (props) => {
  const [product, setProduct] = useState([]);
  const [visibleProduct, setVisibleProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);
    let isMounted = true;
    fetchProduct().then(function (data) {
      if (isMounted) {
        setProduct(data);
        setVisibleProduct(data);
        setIsLoading(false);
      } else {
        isMounted = false;
      }
    });
  }, []);

  function searchTable(input) {
    setSearchValue(input);

    if (input === "") {
      fetchProduct().then(function (data) {
        setVisibleProduct(data);
      });
    } else {
      const filterProduct = product.filter((value) => {
        return value.name.toUpperCase().includes(input.toUpperCase());
      });
      setVisibleProduct(filterProduct);
    }
  }

  function editProduct(input) {
    props.setSelectedProduct(input);
  }

  async function deleteProduct(name, id) {
    try {
      // eslint-disable-next-line
      if (confirm("are you sure to delete product: " + name)) {
        await axios.delete("http://localhost:3001/products/" + id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="shadow-sm p-3 mb-5 bg-white">
      <div className="alert alert-primary mt-2" role="alert">
        All Product
      </div>
      <div className="form-input mt-4 mb-4">
        <input
          className="text-input"
          type="text"
          placeholder=" "
          value={searchValue}
          onChange={(event) => searchTable(event.target.value)}
        />
        <label>search product</label>
      </div>
      <div className="table-product">
        <table className="table table-bordered align-middle">
          <thead>
            <tr align="center">
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5">
                  <i className="fas fa-spinner fa-pulse fs-2"></i>
                </td>
              </tr>
            ) : (
              visibleProduct.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>
                      <img src={value.image} alt={value.image}></img>
                    </td>
                    <td>
                      {value.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td>{value.description}</td>
                    <td>
                      <button
                        onClick={() => {
                          editProduct(value);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => {
                          deleteProduct(value.name, value.id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
