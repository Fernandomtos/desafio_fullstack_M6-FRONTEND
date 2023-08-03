import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animations";

export const StyledRecoverModalBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  div {
    animation: ${AnimationFadeIn} 0.5s;
    width: 100%;
    max-width: 500px;
    background: var(--grey-2);

    header {
      display: flex;
      justify-content: space-between;
      background: var(--grey-3);
      padding: 12px 20px;

      button {
        background: transparent;
        color: white;
        opacity: 0.5;
        transition: 0.4s;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`;
