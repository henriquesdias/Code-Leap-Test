import styled from "styled-components";

interface SignUpProps {
  isDisabled: boolean;
}

const PrincipalButtonStyle = styled.button`
  background-color: #7695ec;
  border-radius: 8px;
  outline: none;
  border: none;
  width: 111px;
  height: 32px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  opacity: ${({ isDisabled }: SignUpProps) => (isDisabled ? "0.3" : "1")};
`;

export default PrincipalButtonStyle;
