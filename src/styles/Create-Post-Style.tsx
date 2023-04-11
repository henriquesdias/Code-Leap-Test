import styled from "styled-components";

const CreatePostStyle = styled.form`
  border: 1px solid #999999;
  border-radius: 16px;
  height: 334px;
  width: 95%;
  margin: 24px auto 24px auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  > h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  > span {
    margin-bottom: 8px;
  }
  input:nth-child(3) {
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
  input:nth-child(5) {
    margin-bottom: 16px;
    height: 74px;
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
    justify-content: flex-end;
  }
`;

export default CreatePostStyle;
