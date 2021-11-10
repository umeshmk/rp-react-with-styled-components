import { createGlobalStyle } from "styled-components";

// can be used for global styling.
// We have used modern-normalize.css Cdn in .html

export const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior:smooth;
}

body{      
  font-family: "Roboto";
  color:${(p) => p.theme.colors.grey[900]}; 
  background-color: ${(p) => p.theme.colors.white};
  cursor: default;
}
`;
