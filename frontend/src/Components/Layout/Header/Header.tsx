import Logo from "../../Logo/Logo";
import Navigation from "../../UI/Navigation/Navigation";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0; 
  border-bottom: 0.15rem solid #031d0b;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
