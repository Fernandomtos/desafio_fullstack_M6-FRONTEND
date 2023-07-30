import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animations";

export const StyledContactModalBox = styled.div`
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

export const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  max-width: 369px;
  display: flex;
  align-items: center;
  padding: 34px 18px 34px 18px;
  flex-direction: column;
  background-color: var(--grey-3);
  border-radius: 4px;

  form {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: var(--title1);
    color: var(--grey-0);
    font-weight: 700;
    margin-bottom: 17.65px;
  }

  button {
    margin-top: 30px;
  }
`;

export const StyledDivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 16.21px;
    margin-bottom: 14px;
  }

  p {
    margin-top: 5px;
    color: var(--grey-0);
  }

  input {
    width: 100%;
    min-height: 38.5px;
    border-radius: 3.21px;
    background-color: var(--grey-2);
    padding-left: 16.24px;
    color: var(--grey-0);
    font-size: var(--headline);
    border: none;

    :focus {
      border: 0.98px solid var(--grey-0);
    }
  }

  @media (min-width: 769px) {
    input {
      min-height: 48px;
    }
  }
`;
