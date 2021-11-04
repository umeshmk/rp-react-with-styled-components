import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    media: {
      xs: string;
      md: string;
      lg: string;
    };
  }
}
