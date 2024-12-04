import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import { IProductDetails } from "../Models/IProductDetails";
import { LoadData } from "../Utilities/LoadData";
import styled from "styled-components";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDetails>();

  const getProducts = async () => {
    setProduct(await LoadData(`/products/${id}`));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledDetailsPage>
      {product && <ProductDetails product={product} />}
    </StyledDetailsPage>
  );
};
export default DetailsPage;

const StyledDetailsPage = styled.div`
  padding: 2rem;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh; /* Full height */
  width: 100%; /* Ensures the container uses full width */
  box-sizing: border-box;
`;
