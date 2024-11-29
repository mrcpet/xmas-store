import { IProductDetails } from "../../Models/IProductDetails";
import axios from "axios";

type AddToCartButtonProps = {
  product: IProductDetails;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const handleAddToCart = async (): Promise<void> => {
    await axios.post("http://localhost:5001/api/cart", product);
    console.log("ADDED TO CART:", product);
  };
  return <button onClick={handleAddToCart}>Add to cart</button>;
};
export default AddToCartButton;
