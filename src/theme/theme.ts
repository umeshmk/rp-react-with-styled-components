import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "red",
    secondary: "green",
  },

  // Breakpoints - from mui
  maxWidth: {
    xs: "900px",
    md: "1536px",
    lg: "100%",
  },
  media: {
    xs: "@media all and (min-width: 0px)",
    md: "@media all and (min-width: 900px)",
    lg: "@media all and (min-width: 1536px)",
  },
};
