type RemoveButtonProps = {
  id: number;
  handleRemoveItem: (id: number) => void;
};

const RemoveButton = ({ handleRemoveItem, id }: RemoveButtonProps) => {
  return <button onClick={() => handleRemoveItem(id)}>Remove from cart</button>;
};
export default RemoveButton;
