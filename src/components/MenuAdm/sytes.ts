import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: auto;
  gap: 20px;

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
