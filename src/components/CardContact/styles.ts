import styled from "styled-components";

export const SyledCard = styled.div`
  width: 280px;
  height: 200px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  font-size: var(--title2);
  justify-content: center;
  align-items: left;
  padding: 10px;
  margin-bottom: 20px;

  > img {
    width: 45px;
    height: 40px;
    margin: 0 auto;
  }
`;
