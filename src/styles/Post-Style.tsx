import styled from "styled-components";

const PostStyle = styled.div`
  margin: 24px;
  height: 316px;
  border-radius: 16px;
  border: 1px solid #999999;
  h3 {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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
    span:first-child {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (max-width: 444px) {
        width: 95px;
      }
    }
  }
  > div:last-child {
    margin: 0 24px;
    text-align: justify;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
`;

export default PostStyle;
