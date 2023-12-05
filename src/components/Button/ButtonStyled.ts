import { styled } from "styled-components";

const ButtonStyled = styled.button`
  &.button {
    color: inherit;
    &--icon {
      width: 84px;
      height: 77px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      text-decoration: none;
      font-size: ${({ theme }) => theme.typography.propetySize};
      font-weight: inherit;
    }

    &--text {
      width: 280px;
      height: 48px;
      border-radius: 45px;
      background-color: ${({ theme }) => theme.color.buttonText};
      font-weight: inherit;
      padding: 5px;
    }
  }
`;

export default ButtonStyled;