import styled from "styled-components";

const SignUpStyle = styled.div`
  background-color: #dddddd;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    padding: 24px;
    width: 500px;
    height: 205px;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    span {
      font-size: 16px;
      margin-bottom: 8px;
    }
    input {
      margin-bottom: 16px;
      height: 32px;
      width: 100%;
      border-radius: 8px;
      outline: none;
      border: 1px solid black;
      ::placeholder {
        color: #cccccc;
      }
    }
    > div {
      display: flex;
      justify-content: end;
    }
    button {
      background-color: #7695ec;
      border-radius: 8px;
      outline: none;
      border: none;
      width: 111px;
      height: 32px;
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

export default SignUpStyle;
