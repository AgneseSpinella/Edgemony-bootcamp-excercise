import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#white",
    fontColor: "#000",
  };
  
  export const darkTheme = {
    body: "black",
    fontColor: "#fff",
  };

  export const GlobalStyles = createGlobalStyle `
     body {
         background-color: ${props => props.theme.body}
     }
`