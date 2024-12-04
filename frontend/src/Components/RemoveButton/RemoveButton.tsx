import styled from "styled-components";

type RemoveButtonProps = {
  id: number;
  handleRemoveItem: (id: number) => void;
};

const RemoveButton = ({ handleRemoveItem, id }: RemoveButtonProps) => {
  return <StyledRemoveButton onClick={() => handleRemoveItem(id)}>Remove from cart</StyledRemoveButton>;
};
export default RemoveButton;

const StyledRemoveButton = styled.button`
  background-color: #b22222; /* Deep red for a "remove" action */
  color: #fff; /* Snowy white */
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #8b1a1a; /* Darker red for hover */
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;