import styled from "styled-components";
import { IconUp, IconDown } from "../styles/Icons";

const ScrollAutomaticStyle = styled.div`
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export default function ScrollAutomatic() {
  return (
    <ScrollAutomaticStyle>
      <IconUp onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })} />
      <IconDown
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top: document.body.scrollHeight,
          })
        }
      />
    </ScrollAutomaticStyle>
  );
}
