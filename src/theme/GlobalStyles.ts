import { createGlobalStyle } from "styled-components";

// can be used for global styling.
// We have used sanitize.css Cdn in .html

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: 0;
}
html{
  scroll-behavior:smooth;
  font-size: ${(p) => p.theme.typography.htmlFontSize};  
}

body{      
  font-family: ${(p) => p.theme.typography.fontFamily};
  font-size: ${(p) => p.theme.typography.fontSize};
  font-weight: ${(p) => p.theme.typography.fontWeightRegular};
  color:${(p) => p.theme.colors.grey[900]}; 
  background-color: ${(p) => p.theme.colors.white};
  cursor: default;
}
`;
