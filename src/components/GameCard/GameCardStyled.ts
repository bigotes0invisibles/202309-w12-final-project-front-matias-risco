import { styled } from "styled-components";

const GameCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 45px;
  width: 310px;

  .game-card {
    &__description-container {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 15px;
    }

    &__description {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      align-items: start;
      font-size: ${({ theme }) => theme.typography.propetySize};
    }
  }
`;

export default GameCardStyled;