import styled from "styled-components";
import { NavLink } from "react-router-dom";


type ImageLinkProps = {
  id: number;
  src: string;
  alt: string;
};
const ImageLink = ({ id, src, alt }: ImageLinkProps) => {
  return (
    <StyledImageLink to={`/products/${id}`}>
      <img src={src} alt={alt} />
    </StyledImageLink>
  );
};
export default ImageLink;

const StyledImageLink = styled(NavLink)`
  display: block;
  width: 300px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the area */
    border-radius: 10px;
  }
`;