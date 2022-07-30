import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import {
  brand,
  brand100,
  brand200,
  brand300,
  brand400,
  brand50,
  brand500,
  brand600,
  brand700,
  brand800,
  brandDarker,
  coinsplan100,
  coinsplan200,
  coinsplan300,
  coinsplan400,
  coinsplan500,
  coinsplan600,
  coinsplan700,
  coinsplan800,
  coinsplan900,
} from "./color";
import { mode } from "@chakra-ui/theme-tools";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("background.white", "background.dark")(props),
    },
  }),
};

const colors = {
  coinsplan: {
    fix: {
      100: coinsplan500,
      200: coinsplan500,
      300: coinsplan500,
      400: coinsplan500,
      500: coinsplan500,
      600: coinsplan500,
      700: coinsplan500,
      800: coinsplan500,
      900: coinsplan500,
    },
    100: coinsplan100,
    200: coinsplan200,
    300: coinsplan300,
    400: coinsplan400,
    500: coinsplan500,
    600: coinsplan600,
    700: coinsplan700,
    800: coinsplan800,
    900: coinsplan900,
  },

  button: {
    blackAndWhite: {
      100: "white",
      200: "white",
      300: "white",
      400: "white",
      500: "black",
      600: "black",
      700: "black",
      800: "black",
      900: "black",
    },
  },
  background: {
    light: "white",
    dark: "#0a0b0d",
  },
  layer: {
    light: "#00000012",
    dark: "#ffffff12",
    colorScheme: {
      100: "layer.light",
      200: "layer.light",
      300: "layer.light",
      400: "layer.light",
      500: "layer.dark",
      600: "layer.dark",
      700: "layer.dark",
      800: "layer.dark",
      900: "layer.dark",
    }
  },
};

const components = {
  Button: {
    baseStyle: {
      border: "none",
      _focus: {
        boxShadow: "none",
      },
      borderRadius: 8,
    },
    sizes: {
      sm: {
        fontSize: "14px",
        fontWeight: 500,
      },
      md: {
        fontSize: "14px",
        fontWeight: 600,
      },
      lg: {
        fontSize: "1rem",
        fontWeight: 600,
      },
      xl: {
        fontSize: "1rem",
        fontWeight: 600,
        height: "62px",
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 600,
    },
    variants: {
      head1: {
        fontWeight: 500,
        fontSize: 28
      }
    }
  },
  Link: {
    baseStyle: {
      color: "coinsplan.500",
    },
  },
  Input: {
    baseStyle: {
      field: {},
    },
    variants: {
      scheduler: {
        field: {
          fontWeight: 500,
        },
      },
    },
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const fonts = {
  body: `Poppins, Helvetica, sans-serif`,
  heading: `Poppins, Helvetica, sans-serif`,
};

const overrides = {
  config,
  colors,
  components,
  fonts,
  styles,
  breakpoints,
};

const theme = extendTheme(overrides);
export default theme;
