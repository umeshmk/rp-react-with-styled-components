import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";

function App() {
  const Foo = styled.h1`
    color: ${({ theme }) => theme.colors.main};
  `;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Foo>This is styled components.</Foo>
      </ThemeProvider>
    </>
  );
}

export default App;
