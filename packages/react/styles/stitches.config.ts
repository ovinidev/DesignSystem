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

import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
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
  media: {
    bp1: "(min-width: 480px)",
  },
});
