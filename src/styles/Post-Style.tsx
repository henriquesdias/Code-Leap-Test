import styled from "styled-components";

const PostStyle = styled.div`
  margin: 24px;
  height: 316px;
  border-radius: 16px;
  border: 1px solid #999999;
  div:first-child {
    background-color: #7695ec;
    height: 70px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    border-radius: 16px 16px 0 0;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    @media (max-width: 570px) {
      font-size: 18px;
    }
    @media (max-width: 470px) {
      font-size: 15px;
    }
  }
  > div:nth-child(2) {
    color: #777777;
    display: flex;
    justify-content: space-between;
    margin: 25px 24px 16px 24px;
  }
  > div:last-child {
    margin: 0 24px;
    text-align: justify;
  }
`;

export default PostStyle;
