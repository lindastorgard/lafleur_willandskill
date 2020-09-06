export default {
  colors: {
    text: "#111111",
    background: "#fff",
    white: "#fff",
    primary: "#F1F1EF",
    highlight: "#111111",
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: [14, 16, 18, 24, 36, 48, 64],
  fontWeights: {
    body: 200,
    light: 200,
    bold: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  useBodyStyles: "true",
  useBorderBox: "true",
  
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      m: 0,
    },
  },
};
