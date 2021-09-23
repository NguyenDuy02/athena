import { fetchProduct } from "../assets/js/CallAPI";
import { useState, useEffect } from "react";
import '../assets/css/Home.scss';
import { ProductCategory } from '../components/ProductCategory';
import { Product } from '../components/Product';

export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(
    function () {
      let isMounted = true;
      fetchProduct().then(function (data) {
        if (isMounted) {
          setProduct(data);
        } else {
          isMounted = false;
        }
      });
    },
    []
  );

  return (
    <div className="container">
      <div className="row">

        <ProductCategory />

        <Product setProduct={product}/>
     
      
      </div>
    </div>
  );
};
