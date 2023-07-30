import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-left: 3.85%;
  padding-right: 3.85%;
  background-color: var(--grey-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;

  span {
    font-size: var(--headline);
    color: var(--grey-1);
  }
`;
