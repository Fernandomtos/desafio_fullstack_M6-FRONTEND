import styled from "styled-components";

export const StyledHeader = styled.header`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  > img {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 769px) {
    margin-top: 50px;
  }
`;

export const StyledMainContainer = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 19.39px 12px 50px 12px;
  gap: 19.39px;

  @media (min-width: 769px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
