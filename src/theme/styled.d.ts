import "styled-components";

type Headings = {
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      grey: { [key: string]: string };
      primary: {
        light: string;
        main: string;
        dark: string;
      };
    };
    typography: {
      htmlFontSize: number;
      fontFamily: string;
      fontSize: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      h1: Headings;
      h2: Headings;
      h3: Headings;
      h4: Headings;
      h5: Headings;
      body: Headings;
      button: Headings;
    };
    media: {
      xs: string;
      md: string;
      lg: string;
    };
    maxWidth: {
      xs: string;
      md: string;
      lg: string;
    };
  }
}
