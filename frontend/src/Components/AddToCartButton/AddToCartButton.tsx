import { IProductDetails } from "../../Models/IProductDetails";
import axios from "axios";

const AddToCartButton = ({ product }: { product: IProductDetails }) => {
  const handleAddToCart = async () => {
    await axios.post("http://localhost:5001/api/cart", product);
    console.log("ADDED TO CART:", product);
  };
  return <button onClick={handleAddToCart}>Add to cart</button>;
};
export default AddToCartButton;
