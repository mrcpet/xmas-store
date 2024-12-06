import styled from "styled-components";
import { IProductDetails } from "../../Models/IProductDetails";
import { addToCart } from "../../Utilities/CartUtilities";

type AddToCartButtonProps = {
  product: IProductDetails;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const handleAddToCart = async (): Promise<void> => {
    await addToCart(product);
  };
  return (
    <StyledAddToCartButton onClick={handleAddToCart}>
      Add to cart
    </StyledAddToCartButton>
  );
};
export default AddToCartButton;

const StyledAddToCartButton = styled.button`
  background-color: #2a7070; 
  color: #fff; 
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #1f5a5a;
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
