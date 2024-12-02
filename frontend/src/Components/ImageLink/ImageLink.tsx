import { NavLink } from "react-router-dom";

type ImageLinkProps = {
  id: number;
  src: string;
  alt: string;
};
const ImageLink = ({ id, src, alt }: ImageLinkProps) => {
  return (
    <NavLink to={`/products/${id}`}>
      <img style={{ width: "300px" }} src={src} alt={alt} />
    </NavLink>
  );
};
export default ImageLink;
