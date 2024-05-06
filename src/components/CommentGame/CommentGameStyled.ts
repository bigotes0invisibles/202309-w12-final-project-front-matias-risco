import { styled } from "styled-components";

const CommentGameStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 17.5px;
  gap: 15px;
  align-items: start;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 25px;
  min-width: 305px;
  width: 85vw;
  max-width: 600px;

  .comment {
    &__user {
      text-align: start;
      font-size: ${({ theme }) => theme.typography.mainFontFamily};
      border-bottom: 1px solid ${({ theme }) => theme.color.mainFont};
      width: 100%;
    }

    &__text {
      min-width: 280px;
      width: 78vw;
      max-width: 551px;
      object-fit: cover;
    }
  }
`;

export default CommentGameStyled;
