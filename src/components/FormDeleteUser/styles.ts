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

  h2 {
    font-size: var(--title1);
    color: var(--grey-0);
    font-weight: 700;
    margin-bottom: 17.65px;
  }

  p {
    color: red;
    margin-top: 5px;
    //color: var(--grey-0);
    font-size: var(--title0);
    font-weight: 400;
  }

  button {
    margin-top: 30px;
  }
`;

export const StyledDivMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledBtnDelete = styled.button`
  width: 100%;
  height: 38.5px;
  background-color: var(--color-primary);
  color: var(--grey-0);
  font-size: var(--title2);
  font-weight: 500;
  margin-top: 17.65px;
`;

export const StyledBtnCancelar = styled.button`
  width: 100%;
  height: 38.5px;
  background-color: var(--grey-1);
  color: var(--grey-0);
  font-size: var(--title2);
  font-weight: 500;
  margin-top: 17.65px;
`;
