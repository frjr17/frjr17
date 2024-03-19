import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import { Fira_Code } from "next/font/google";

const mainTheme: Partial<ChakraTheme> = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "var(--fira-code)",
    body: "var(--fira-code)",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "medium",
      },
      variants: {
        title: {
          fontSize: "4rem",
        },
        subtitle: {
          fontSize: "2rem",
        },
      },
      defaultProps: {
        variant: "title",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        body: {
          fontSize: "1.25rem",
        },
        label: {
          fontSize: "1rem",
        },
        snippet: {
          fontSize: "0.875rem",
        },
      },
      defaultProps: {
        variant: "body",
      },
    },
    Container: {
      baseStyle: {
        maxWidth: "1550px",
      },
      variants: {
        base: {
          padding: 0,
        },
      },
      defaultProps: {
        variant: "base",
      },
    },
  },
} as Partial<ChakraTheme>);

export default mainTheme;
