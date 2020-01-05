import { Flex } from "theme-ui";

export const theme = {
  initialColorMode: "default",
  space: [0, 4, 8, 16, 32, 48, 64],
  fonts: {
    body:
      "Inter, -apply-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36, 48, 80],
  lineHeights: {
    body: 1.45,
    heading: 1
  },
  colors: {
    background: "#FAEEE7",
    gray: ["#efefef", "#ddd", "#333", "#111"],
    primary: "#FF8BA7",
    text: "#33272A"
  },
  sizes: {
    default: "90vw",
    max: "1364px"
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 3,
      lineHeight: "body"
    },
    Header: {
      backgroundColor: "background",
      color: "text",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      py: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    Main: {
      margin: "0 auto",
      py: 4,
      maxWidth: "max",
      width: "default"
    },
    Container: {
      padding: 3
    },
    h1: {
      color: "text",
      fontSize: 7,
      fontWeight: "900",
      lineHeight: "heading",
      margin: 0,
      marginTop: 3
    },
    h2: {
      fontSize: 6,
      fontWeight: "900",
      lineHeight: "heading",
      marginTop: 6
    },
    ul: {
      margin: "0",
      listStyle: "none"
    },
    p: {
      color: "text.1"
    }
  }
};
