import styled from "styled-components";

export const StyledContainer = styled.main`
  padding-left: 3.85%;
  padding-right: 3.85%;

  > h2 {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    gap: 5%;

    aside {
      width: 25%;
      margin-bottom: 80px;
    }

    section {
      width: 70%;
      margin-bottom: 80px;
    }
  }
`;

export const StyledCardsUl = styled.ul`
  display: flex;
  justify-content: left;
  gap: 20px;
  flex-wrap: wrap;
`;
