import { styled } from "styled-components";

const UserRegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 17.5px;
  align-items: start;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 25px;
  min-width: 305px;
  width: 85vw;
  max-width: 600px;
  justify-content: start;

  h2 {
    text-align: center;
    width: 100%;
    font-size: ${({ theme }) => theme.typography.titleSize};
  }

  .button {
    margin: auto;
  }

  .user-form {
    &__input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  .input {
    &-text {
      width: 100%;
      padding: 9px 5px;
      border-radius: 15px;
      color: ${({ theme }) => theme.color.navigationFont};
    }
  }
`;

export default UserRegisterStyled;
