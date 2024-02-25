import { createGlobalStyle } from "styled-components";

const GlobalsStyled = createGlobalStyle`
*,
::after,
::before{
  box-sizing: border-box;
}

h1,
h2,
h3,
p,
body{
  padding:0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
}

button{
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  box-shadow: none;
  font-size: inherit;
  font-family: inherit;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

input,
select{
 color: ${({ theme }) => theme.color.navigationFont};
  font-family: inherit;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.inputSize};
}

body{
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  color: ${({ theme }) => theme.color.mainFont};
  background-color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.typography.propertySize};
  font-weight: 600;
}

a{
  color: inherit;
  font-family: inherit;

}
`;

export default GlobalsStyled;
