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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-items: center;
  padding-bottom: 2rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;
