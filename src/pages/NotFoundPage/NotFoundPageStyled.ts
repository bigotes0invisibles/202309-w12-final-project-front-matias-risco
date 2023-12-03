import { styled } from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 0 122px;

  h1 {
    width: 150px;
    height: 50px;
    background-color: ${({ theme }) => theme.color.containerBackground};
    color: ${({ theme }) => theme.color.secondaryFont};
    text-align: center;
    align-self: center;
    padding: 6px 0;
    font-size: ${({ theme }) => theme.typography.titleSize};
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    height: 291px;
    width: 310px;
    border-radius: 45px;
    border: 10px solid ${({ theme }) => theme.color.backgroundHeader};
    font-size: ${({ theme }) => theme.typography.titleSize};
    background-color: ${({ theme }) => theme.color.containerBackground};
    text-align: center;
  }
`;

export default NotFoundPageStyled;
