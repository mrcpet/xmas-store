import styled from "styled-components";

type ProductInfoProps = {
  title: string;
  price: number;
};

const ProductInfo = ({ title, price }: ProductInfoProps) => {
  return (
    <StyledProductInfo>
      <h2>{title}</h2>
      <p className="price">Price: ${price}</p>
    </StyledProductInfo>
  );
};
export default ProductInfo;

const StyledProductInfo = styled.div`
  h2 {
    font-size: 1rem;
    color: #2a7070;
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #4b4b4b;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  p.price {
    font-size: 1.2rem;
    color: #2d3a31;
    margin-top: 0.25rem;
  }
`;