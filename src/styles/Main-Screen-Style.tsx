import styled from "styled-components";

const MainScreenStyle = styled.div`
  background-color: #dddddd;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  main {
    max-width: 800px;
    width: 95%;
    background-color: #ffffff;
    min-height: 50vh;
    > h2 {
      height: 80px;
      width: 100%;
      background-color: #7695ec;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding-left: 37px;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;

export default MainScreenStyle;
