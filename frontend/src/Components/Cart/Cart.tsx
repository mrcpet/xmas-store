import { useState, useEffect } from "react";
import { IProduct } from "../../Models/IProduct";
import { LoadData } from "../../Utilities/LoadData";
import ProductList from "../ProductList/ProductList";
import { removeFromCart } from "../../Utilities/CartUtilities";

const Cart = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const getProducts = async () => {
    setProducts(await LoadData("/cart"));
  };

  const handleRemoveItem = async (id: number): Promise<void> => {
    await removeFromCart(id);
    console.log("REMOVED FROM CART:", id);
    setProducts((prevProducts) =>
      prevProducts ? prevProducts.filter((product) => product.id !== id) : []
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products && (
        <ProductList
          products={products}
          cartItem={true}
          handleRemove={handleRemoveItem}
        />
      )}
    </>
  );
};
export default Cart;
