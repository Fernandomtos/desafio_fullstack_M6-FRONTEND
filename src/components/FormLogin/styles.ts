import styled from "styled-components";

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
  position: relative;

  form {
    width: 100%;
    height: auto;

    button {
      margin-top: 40px;
    }
  }

  h2 {
    font-size: var(--title1);
    color: var(--grey-0);
    font-weight: 700;
    margin-bottom: 17.65px;
  }

  .inputPassword {
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 14px;
      height: 22px;
      position: absolute;
      top: 50px;
      right: 18px;
    }
  }

  span {
    color: var(--grey-1);
    font-size: var(--headlineBold);
    display: flex;
    justify-content: center;
    margin-top: 27.27px;
    margin-bottom: 17.65px;
  }

  @media (min-width: 769px) {
    .inputPassword {
      img {
        top: 60px;
      }
    }
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

export const StyledBtnPassword = styled.button`
  background-color: transparent;
  color: var(--grey-1);
  font-size: var(--headlineBold);
  position: absolute;
  top: 265px;
  right: 18px;
`;
