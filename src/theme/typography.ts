import { DefaultTheme } from "styled-components";

// From Material UI
export const typography: DefaultTheme["typography"] = {
  htmlFontSize: 16,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 300,
    // fontSize: "6rem",
    fontSize: "clamp(3rem,10vw,6rem)",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
  },
  h2: {
    fontWeight: 300,
    // fontSize: "3.75rem",
    fontSize: "clamp(2.5rem,10vw,3.75rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontWeight: 400,
    // fontSize: "3rem",
    fontSize: "clamp(2rem,10vw,3rem)",
    lineHeight: 1.167,
    letterSpacing: "0em",
  },
  h4: {
    fontWeight: 400,
    // fontSize: "2.125rem",
    fontSize: "clamp(1.5rem,10vw,2.125rem)",
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  h5: {
    fontWeight: 400,
    // fontSize: "1.5rem",
    fontSize: "clamp(1.2rem,10vw,1.5rem)",
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  body: {
    fontWeight: 400,
    // fontSize: "1rem",
    fontSize: "clamp(1rem,10vw,1.1rem)",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  button: {
    fontWeight: 500,
    // fontSize: "0.875rem",
    fontSize: "clamp(0.75rem,6vw,0.875rem)",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
  },
};
