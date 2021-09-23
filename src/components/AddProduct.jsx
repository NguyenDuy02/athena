import { useState, useEffect } from "react";
import axios from "axios";

const initstate = {
  name: "",
  image: "",
  price: 0,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const AddProduct = (props) => {
  const [product, setProduct] = useState(initstate);
  const [isEdit, setIsEdit] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (props.selectedProduct) {
      setProduct(props.selectedProduct);
      setIsEdit(true);
    }
  }, [props.selectedProduct]);

  function handleInput(event) {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function validateForm() {
    if (!product.name || !product.image) {
      setErrorText("Vui lòng nhập tên và ngày tháng");
    } else if (product.price < 0) {
      setErrorText("Giá phải lớn hơn hoặc bằng 0");
    } else {
      setErrorText("");
      return true;
    }
  }

  async function saveProduct() {
    if (validateForm()) {
      try {
        await axios.post("http://localhost:3001/products", {
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
        });
        setProduct(initstate);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function updateProduct(id) {
    if (validateForm) {
      try {
        await axios.put("http://localhost:3001/products/" + id, {
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
        });
        setIsEdit(false);
        setProduct(initstate);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="shadow-sm p-3 mb-5 bg-white">
      <div className="card mt-2">
        {isEdit ? (
          <div className="card-header">edit product</div>
        ) : (
          <div className="card-header">Add New product</div>
        )}
        <div className="card-body">
          {errorText === "" ? null : (
            <p className="error-text">
              <span>error:</span> {errorText}
            </p>
          )}
          <div className="form-input mt-2 mb-3">
            <input
              className="text-input"
              type="text"
              placeholder=" "
              value={product.name}
              name="name"
              onChange={handleInput}
            />
            <label>name</label>
          </div>
          <div className="form-input mt-2 mb-3">
            <input
              className="text-input"
              type="text"
              placeholder=" "
              value={product.image}
              name="image"
              onChange={handleInput}
            />
            <label>image</label>
          </div>
          <div className="form-input mt-2 mb-3">
            <input
              className="text-input"
              type="number"
              placeholder=" "
              value={product.price}
              name="price"
              onChange={handleInput}
            />
            <label>price</label>
          </div>
          <div className="form-input mt-2 mb-2">
            <textarea
              className="text-input"
              cols="30"
              row="10"
              placeholder=" "
              value={product.description}
              name="description"
              onChange={handleInput}
            />
            <label>description</label>
          </div>
          <div className="form-input">
            {isEdit ? (
              <button onClick={() => updateProduct(product.id)}>
                edit product
              </button>
            ) : (
              <button onClick={saveProduct}>save product</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
