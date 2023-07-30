import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-left: 3.85%;
  padding-right: 3.85%;
  background-color: var(--grey-3);
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  /* box-shadow: 2px 10px 5px 0px rgba(52, 59, 65, 0.75); */
  box-shadow: 2px 10px 5px 0px rgba(33, 37, 41, 0.75);

  button {
    width: 100px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;
