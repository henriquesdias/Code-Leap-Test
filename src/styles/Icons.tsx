import styled from "styled-components";

import { IoTrashBin, IoCreateOutline } from "react-icons/io5";

export const IconDelete = styled(IoTrashBin)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  transition: opacity ease-in-out 150ms;
`;

export const IconUpdate = styled(IoCreateOutline)`
  margin-left: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  transition: opacity ease-in-out 150ms;
`;
