import { IProductDetails } from "../../Models/IProductDetails";

const ProductDetails = ({ product }: { product: IProductDetails }) => {
  return (
    <>
      <img style={{ width: "400px" }} src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </>
  );
};
export default ProductDetails;
