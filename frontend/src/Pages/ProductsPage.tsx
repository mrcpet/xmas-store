import styled from "styled-components";
import { useState, useEffect } from "react";
import { IProduct } from "../Models/IProduct";
import ProductList from "../Components/ProductList/ProductList";
import { LoadData } from "../Utilities/LoadData";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  const getProducts = async () => {
    setProducts(await LoadData("/products"));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <StyledProductsPage>{products && <ProductList products={products} cartItem={false} />}</StyledProductsPage>;
};
export default ProductsPage;

const StyledProductsPage = styled.div`
  padding: 2rem;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh; /* Full height */
  width: 100%; /* Ensures the container uses full width */
  box-sizing: border-box;
`;