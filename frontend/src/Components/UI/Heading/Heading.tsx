import styled from "styled-components";

const Heading = ({ text }: { text: string }) => {
  return <StyledHeading>{text}</StyledHeading>;
};
export default Heading;

const StyledHeading = styled.h1`
    font-size: 2rem;
    color: #2d3a31;
    padding: 1rem 0;
    text-align: center;

`;
