export interface Theme {
  colors: {
    primary: {
      main: string;
      light: string;
      dark: string;
      mainTitle: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    other: { main: string; dark: string };
    background: { white: string; default: string; paper: string };
    foodAttributes: {
      bestSeller: string;
      mustTry: string;
      guitenFree: string;
      default: string;
    };
  };
  spacings: {
    margin: {
      left: string;
    };
  };
}
