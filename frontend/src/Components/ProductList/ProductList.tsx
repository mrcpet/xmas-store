import { useState } from "react";
import { IProduct } from "../../Models/IProduct";

const ProductList = ({products}: {products: IProduct[]}) => {
//   const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img
            style={{ width: "400px" }}
            src={product.image}
            alt={product.title}
          />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
