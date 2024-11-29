import { NavLink } from "react-router-dom";
import { IProduct } from "../../Models/IProduct";
import styled from "styled-components";
import RemoveButton from "../RemoveButton/RemoveButton";

type ProductListProps = {
  products: IProduct[];
  cartItem: boolean;
};

const ProductList = ({ products, cartItem }: ProductListProps) => {
  return (
    <StyledList>
      {products.map((product) => (
        <li key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <img
              style={{ width: "300px" }}
              src={product.image}
              alt={product.title}
            />
          </NavLink>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          {cartItem && <RemoveButton id={product.id} />}
        </li>
      ))}
    </StyledList>
  );
};
export default ProductList;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
