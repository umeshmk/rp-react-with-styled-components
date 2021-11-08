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
    xs: "@media all and (min-width: 0px)", // only min-width, since it must scale upwards to all higher widths
    md: "@media all and (min-width: 900px)", // we must ensure the order in css as (xs -> md -> lg) and not reversed
    lg: "@media all and (min-width: 1536px)",
  },
};
