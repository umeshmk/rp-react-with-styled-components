import { ThemeProvider } from "styled-components";
import { Pages } from "./pages";
import { GlobalStyles, theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pages />
      </ThemeProvider>
    </>
  );
}

export default App;
