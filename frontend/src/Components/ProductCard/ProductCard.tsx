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
  border-radius: 12px;
  overflow: hidden;
  padding: 1rem;
  max-width: 350px;

`;