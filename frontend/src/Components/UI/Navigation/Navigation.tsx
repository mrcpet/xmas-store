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
  list-style: none;
  padding: 0;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #2d3a31;
    border: 2px solid #2d3a31;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #f5a623;
      border: 2px solid #f5a623;
      transform: scale(1.05);
    }
  }
`;
