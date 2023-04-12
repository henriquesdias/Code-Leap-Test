import styled from "styled-components";

const LogoPageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: logoAnimation 1.5s ease-in-out forwards;
  @media (max-width: 684px) {
    img {
      width: 90%;
    }
  }
  @keyframes logoAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;

export default LogoPageStyle;
