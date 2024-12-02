import { IProductDetails } from "../../Models/IProductDetails";
import { addToCart } from "../../Utilities/CartUtilities";

type AddToCartButtonProps = {
  product: IProductDetails;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const handleAddToCart = async (): Promise<void> => {
    await addToCart(product)
    console.log("ADDED TO CART:", product);
  };
  return <button onClick={handleAddToCart}>Add to cart</button>;
};
export default AddToCartButton;
