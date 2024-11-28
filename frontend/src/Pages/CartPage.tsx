import { useState, useEffect } from "react";
import { IProduct } from "../Models/IProduct";
import ProductList from "../Components/ProductList/ProductList";
import { LoadData } from "../Utilities/LoadData";

const CartPage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const getProducts = async () => {
    setProducts(await LoadData("/cart"));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <>{products && <ProductList products={products} />}</>;
};
export default CartPage;
