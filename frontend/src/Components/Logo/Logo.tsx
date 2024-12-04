import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo
      src="src/assets/frostfirlogo-nobg.jpg"
      alt="Frost & Fir Creations Logo"
    />
  );
};

export default Logo;

const StyledLogo = styled.img`
  width: 15rem;
  height: auto;
  display: block;
  margin: 0 auto;
`;
