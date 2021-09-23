import { useState } from 'react';
import '../assets/css/product-manager.scss';
import { AddProduct } from '../components/AddProduct';
import { TableProduct } from '../components/TableProduct';


export const ProductManager = () => {

  const [selectedProduct, setSelectedProduct] = useState( null );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <AddProduct selectedProduct={selectedProduct}/>
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <TableProduct setSelectedProduct={setSelectedProduct}/>
        </div>
      </div>
    </div>
  );
};
