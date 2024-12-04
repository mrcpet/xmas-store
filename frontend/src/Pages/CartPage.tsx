import Cart from "../Components/Cart/Cart";
import styled from "styled-components";

const CartPage = () => {
  return (
    <StyledCartPage>
      <Cart />
    </StyledCartPage>
  );
};
export default CartPage;

const StyledCartPage = styled.div`
  padding: 2rem;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh; /* Full height */
  width: 100%; /* Ensures the container uses full width */
  box-sizing: border-box;
`;
