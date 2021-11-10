import "styled-components";

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
