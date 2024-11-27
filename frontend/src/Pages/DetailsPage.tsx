import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import { IProductDetails } from "../Models/IProductDetails";
import { LoadData } from "../Utilities/LoadData";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDetails>();

  const getProducts = async () => {
    setProduct(await LoadData(`/products/${id}`));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <>{product && <ProductDetails product={product} />}</>;
};
export default DetailsPage;
