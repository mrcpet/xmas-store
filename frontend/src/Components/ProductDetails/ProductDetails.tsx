import styled from "styled-components";
import { IProductDetails } from "../../Models/IProductDetails";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

type ProductDetailsProps = {
  product: IProductDetails;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <StyledProductDetails>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      {product.quantity > 0 ? (
        <AddToCartButton product={product} />
      ) : (
        <p>Currently unavailable</p>
      )}
    </StyledProductDetails>
  );
};
export default ProductDetails;

const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;

  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1.5rem;
    border-radius: 8px;
  }

  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .unavailable {
    color: #e74c3c;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    img {
      max-width: 100%;
    }
  }
`;