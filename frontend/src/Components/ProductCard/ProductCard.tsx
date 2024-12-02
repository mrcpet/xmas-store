import { IProduct } from "../../Models/IProduct";
import ProductInfo from "../ProductInfo/ProductInfo";
import ImageLink from "../ImageLink/ImageLink";

type ProductCardProps = {
  product: IProduct;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <ImageLink id={product.id} src={product.image} alt={product.title} />
      <ProductInfo title={product.title} price={product.price} />
    </>
  );
};
export default ProductCard;
