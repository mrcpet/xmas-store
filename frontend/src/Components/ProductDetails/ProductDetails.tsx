import { IProductDetails } from "../../Models/IProductDetails";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductDetails = ({ product }: { product: IProductDetails }) => {
  return (
    <>
      <img style={{ width: "400px" }} src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      {product.quantity > 0 ? (
        <AddToCartButton product={product} />
      ) : (
        <p>Currently unavailable</p>
      )}
    </>
  );
};
export default ProductDetails;
