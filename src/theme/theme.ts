import { DefaultTheme } from "styled-components";
import { grey, lightBlue } from "./materialColors";

export const theme: DefaultTheme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    grey: grey,
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
    },
  },
  // Breakpoints - from mui
  maxWidth: {
    xs: "900px",
    md: "1536px",
    lg: "100%",
  },
  media: {
    xs: "@media screen and (min-width: 0px)", // only min-width, since it must scale upwards to all higher widths
    md: "@media screen and (min-width: 900px)", // we must ensure the order in css as (xs -> md -> lg) and not reversed
    lg: "@media screen and (min-width: 1536px)",
  },
};
