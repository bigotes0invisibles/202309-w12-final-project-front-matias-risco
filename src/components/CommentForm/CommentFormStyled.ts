import { styled } from "styled-components";

const CommentFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 17.5px;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 25px;
  gap: 15px;
  min-width: 305px;
  width: 85vw;
  max-width: 600px;

  .comment {
    &--message {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.propertySize};
      border-radius: 10px;
      height: calc(5.1 * ${({ theme }) => theme.typography.propertySize});
    }
  }
`;

export default CommentFormStyled;
