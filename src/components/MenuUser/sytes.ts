import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: auto;
  gap: 20px;

  form,
  input {
    height: 30px;
    width: 260px;
    font-size: var(--title2);
    border: none;
    background-color: white;
    padding-left: 5px;
    position: relative;
    border-radius: var(--radius-default);

    > button {
      margin: 0;
      height: 30px;
      position: absolute;
      top: 0;
      right: 10px;
      background-color: transparent;
    }
  }

  button {
    background-color: var(--grey-3);
    margin-top: 10px;
  }

  > span {
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    font-size: var(--headline);
    color: var(--grey-1);
  }
`;
