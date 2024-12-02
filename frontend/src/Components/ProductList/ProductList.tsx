import { IProduct } from "../../Models/IProduct";
import styled from "styled-components";
import RemoveButton from "../RemoveButton/RemoveButton";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: IProduct[];
  cartItem: boolean;
};

function ProductList({ products, cartItem }: ProductListProps) {
  return (
    <StyledList>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
          {cartItem && <RemoveButton id={product.id} />}
        </li>
      ))}
    </StyledList>
  );
}
export default ProductList;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
