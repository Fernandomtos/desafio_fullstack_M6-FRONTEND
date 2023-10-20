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

  .btnRole {
    display: flex;
    justify-content: space-around;
  }

  .buttonRadio{
    width: auto;
  }

  .buttonRadio label,
  .buttonRadio input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38.5px;
    width: 160px;
    position: relative;
  }

  .buttonRadio input[type="radio"] {
    opacity: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
  }

  .buttonRadio input[type="radio"]:checked + label {
    color: #FDFDFD;
    background-color: #4529E6;
    border-radius: 2px;
    border: none;
  }

  .buttonRadio label {
    cursor: pointer;
    color: #212529;
    border: 2px solid #868E96;
    border-radius: 2px;
  }

  span {
    display: flex;
    margin-top: 16.21px;
    margin-bottom: 14px;
    color: var(--grey-0);
    font-size: var(--headline);
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
    border: 2px groove var(--grey-2);
    padding-left: 16.24px;
    color: var(--grey-0);
    font-size: var(--headline);

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