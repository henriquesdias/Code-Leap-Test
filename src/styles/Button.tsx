import styled from "styled-components";

interface IButtonProps {
  backgroundColor: string;
  color: string;
  border: boolean;
  isDisabled?: boolean;
}

const ButtonStyle = styled.button<IButtonProps>`
  width: 100px;
  height: 32px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  outline: none;
  color: ${({ color }) => color};
  border: ${({ border }) => (border ? "1px solid #999999" : "none")};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 16px;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.4" : "1")};
  cursor: pointer;
  &:hover {
    opacity: ${({ isDisabled }) => (isDisabled ? "0.4" : "0.5")};
  }
  transition: opacity ease-in-out 100ms;
`;

export default ButtonStyle;
