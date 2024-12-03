// import { useState, useEffect } from "react";
// import { IProduct } from "../Models/IProduct";
// import ProductList from "../Components/ProductList/ProductList";
// import { LoadData } from "../Utilities/LoadData";

import Cart from "../Components/Cart/Cart";

//TODO refactor into a cart component that is instanced here
const CartPage = () => {
  // const [products, setProducts] = useState<IProduct[]>();

  // const getProducts = async () => {
  //   setProducts(await LoadData("/cart"));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // return <>{products && <ProductList products={products} cartItem={true} />}</>;
  return (
    <Cart />
  )
};
export default CartPage;
