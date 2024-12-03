import { IProduct } from "../../Models/IProduct";
import styled from "styled-components";
import RemoveButton from "../RemoveButton/RemoveButton";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: IProduct[];
  cartItem: boolean;
  handleRemove?: (id: number) => void;
};

function ProductList({ products, cartItem, handleRemove }: ProductListProps) {
  return (
    <StyledList>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
          {cartItem && handleRemove && (
            <RemoveButton
              id={product.id}
              handleRemoveItem={() => handleRemove(product.id)}
            />
          )}
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
