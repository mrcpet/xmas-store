import styled from "styled-components";
import { IProduct } from "../../Models/IProduct";
import ProductInfo from "../ProductInfo/ProductInfo";
import ImageLink from "../ImageLink/ImageLink";

type ProductCardProps = {
  product: IProduct;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <StyledProductCard>
      <ImageLink id={product.id} src={product.image} alt={product.title} />
      <ProductInfo title={product.title} price={product.price} />
    </StyledProductCard>
  );
};
export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #f9f9f9; /* Light background for card */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1rem;
  max-width: 350px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  /* You can add more specific styling for ImageLink and ProductInfo as well, 
     but these will generally inherit from the respective components' styles. */
`;