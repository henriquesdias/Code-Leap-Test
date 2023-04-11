import styled from "styled-components";

const SignUpStyle = styled.div`
  background-color: #dddddd;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    padding: 24px;
    max-width: 500px;
    width: 90%;
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
  }
`;

export default SignUpStyle;
