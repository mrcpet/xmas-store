import axios from "axios";

type RemoveButtonProps = {
  id: number;
};

const RemoveButton = ({ id }: RemoveButtonProps) => {
  const handleRemoveItem = async (): Promise<void> => {
    await axios.delete(`http://localhost:5001/api/cart/${id}`);
    console.log("REMOVED FROM CART:", id);
  };
  return <button onClick={handleRemoveItem}>Remove from cart</button>;
};
export default RemoveButton;
