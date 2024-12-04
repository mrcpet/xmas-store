import styled from "styled-components";
import { useState, useEffect } from "react";
import { IProduct } from "../Models/IProduct";
import ProductList from "../Components/ProductList/ProductList";
import { LoadData } from "../Utilities/LoadData";
import Heading from "../Components/UI/Heading/Heading";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const getProducts = async () => {
    setProducts(await LoadData("/products"));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledProductsPage>
      <Heading text="Products" />
      {products && <ProductList products={products} cartItem={false} />}
    </StyledProductsPage>
  );
};
export default ProductsPage;

const StyledProductsPage = styled.div`
  padding: 2rem;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh; /* Full height */
  width: 100%; /* Ensures the container uses full width */
  box-sizing: border-box;
`;