type ProductInfoProps = {
  title: string;
  price: number;
};

const ProductInfo = ({ title, price }: ProductInfoProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </>
  );
};
export default ProductInfo;
