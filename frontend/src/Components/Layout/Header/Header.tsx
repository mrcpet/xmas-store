import Logo from "../../Logo/Logo";
import Navigation from "../../UI/Navigation/Navigation";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <h1>Frost & Fir Creations</h1>
      <Navigation />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #f0f0f0; /* Light gray background */
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: #2d3a31; /* Dark green */
    margin: 1rem 0;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`;