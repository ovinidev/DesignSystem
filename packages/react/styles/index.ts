import { extendTheme } from "@chakra-ui/react";
import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

export const theme = extendTheme({
  theme: {
    colors: colors,
    breakpoints: breakpoints,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    radii: radii,
    lineHeights: lineHeights,
    space: space,
  },

  styles: {
    global: {
      body: {},
    },
  },
});
