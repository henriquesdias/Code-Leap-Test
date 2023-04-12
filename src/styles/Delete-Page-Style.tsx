import styled from "styled-components";

const DeletePageStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    position: relative;
    z-index: 3;
    max-width: 660px;
    height: 146px;
    width: 90%;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 24px;
    > div {
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;
    }
    > span {
      font-size: 22px;
      font-weight: bold;
    }
  }
`;

export default DeletePageStyle;
