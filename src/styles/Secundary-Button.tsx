import styled from "styled-components";

interface ISecundaryButton {
  isDelete: boolean;
}

const SecundaryButton = styled.button`
  width: 120px;
  height: 32px;
  outline: none;
  border: ${({ isDelete }: ISecundaryButton) =>
    isDelete ? "none" : "1px solid #999999"};
  border-radius: 8px;
  background-color: ${({ isDelete }: ISecundaryButton) =>
    isDelete ? "#FF5151" : "#ffffff"};
  color: ${({ isDelete }: ISecundaryButton) =>
    isDelete ? "#ffffff" : "#000000"};
  font-weight: bold;
  font-size: 16px;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  transition: opacity ease-in-out 100ms;
`;

export default SecundaryButton;
