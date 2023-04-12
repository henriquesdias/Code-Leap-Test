import styled from "styled-components";

import {
  IoTrashBin,
  IoCreateOutline,
  IoArrowUpOutline,
  IoArrowDownOutline,
} from "react-icons/io5";

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

export const IconUp = styled(IoArrowUpOutline)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.3);

  border-radius: 50%;
  font-size: 30px;
  transition: opacity ease-in-out 150ms;
`;

export const IconDown = styled(IoArrowDownOutline)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  font-size: 30px;
  transition: opacity ease-in-out 150ms;
`;
