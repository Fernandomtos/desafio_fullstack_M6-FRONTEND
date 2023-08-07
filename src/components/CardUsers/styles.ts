import styled from "styled-components";

export const SyledCard = styled.div`
  width: 350px;
  height: 350px;
  background-color: var(--grey-1);
  border: 2px groove var(--grey-4);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: var(--title2);
  justify-content: center;
  align-items: left;
  padding: 10px 10px 0px 10px;
  margin-bottom: 20px;

  > img {
    width: 45px;
    height: 40px;
    margin: 0 auto;
  }

  .btnContact {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    > button {
      width: 30%;
      background-color: transparent;
    }
  }
`;
