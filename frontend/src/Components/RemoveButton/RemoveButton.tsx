import { removeFromCart } from "../../Utilities/CartUtilities";

type RemoveButtonProps = {
  id: number;
};

const RemoveButton = ({ id }: RemoveButtonProps) => {
  const handleRemoveItem = async (): Promise<void> => {
    await removeFromCart(id)
    console.log("REMOVED FROM CART:", id);
  };
  return <button onClick={handleRemoveItem}>Remove from cart</button>;
};
export default RemoveButton;
