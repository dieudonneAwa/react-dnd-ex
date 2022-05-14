import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  "main-bg": "#0E1012",

  "white-text": "#E8E8EA",
  "subtle-text": "#9B9B9B",

  "column-bg": "#16181D",
  "column-header-bg": "#1A1D23",

  "card-bg": "#242731",
  "card-border": "#2D313E"
};

const fonts = {
  heading: "Poppins",
  body: "Poppins",
};

export default extendTheme({
  ...theme,
  colors,
  fonts,
});
