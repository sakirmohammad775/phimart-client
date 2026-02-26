import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    axios
      .get("https://phimart-ivory.vercel.app/api/v1/products/")
      .then((res) => setProducts(res.data.results));
  }, []);
  return (
    <div>
      {products.map((product)=>(
        <ProductItem key={product.id}product={product}></ProductItem>
      ))}
    </div>

  )
};
export default Product;
