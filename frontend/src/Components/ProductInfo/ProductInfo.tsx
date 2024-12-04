import styled from "styled-components";

type ProductInfoProps = {
  title: string;
  price: number;
};

const ProductInfo = ({ title, price }: ProductInfoProps) => {
  return (
    <StyledProductInfo>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </StyledProductInfo>
  );
};
export default ProductInfo;

const StyledProductInfo = styled.div`
  h2 {
    font-size: 1rem;
    color: #2a7070; /* Frosty teal */
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #4b4b4b; /* Dark gray for text */
    margin-top: 0.5rem;
    font-weight: 500;
  }

  p.price {
    font-size: 1.2rem;
    color: #b22222; /* Deep red for price */
    margin-top: 0.25rem;
  }
`;