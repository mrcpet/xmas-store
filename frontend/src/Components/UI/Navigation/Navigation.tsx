import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <StyledNavList>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default Navigation;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
