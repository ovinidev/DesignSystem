var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../tokens/dist/index.js
var require_dist = __commonJS({
  "../tokens/dist/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      breakpoints: () => breakpoints2,
      colors: () => colors2,
      fontSizes: () => fontSizes2,
      fontWeights: () => fontWeights2,
      fonts: () => fonts2,
      lineHeights: () => lineHeights2,
      radii: () => radii2,
      space: () => space2
    });
    module.exports = __toCommonJS(src_exports);
    var colors2 = {
      white: "#FFF",
      black: "#000",
      gray100: "#E1E1E6",
      gray200: "#A9A9B2",
      gray400: "#7C7C8A",
      gray500: "#505059",
      gray600: "#323238",
      gray700: "#29292E",
      gray800: "#202024",
      gray900: "#121214",
      ignite300: "#00B37E",
      ignite500: "#00875F",
      ignite700: "#015F43",
      ignite900: "#00291D"
    };
    var space2 = {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem"
    };
    var radii2 = {
      px: "1px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "16px",
      full: "99999px"
    };
    var fonts2 = {
      default: "Roboto, sans-serif",
      code: "monospace"
    };
    var fontSizes2 = {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem"
    };
    var fontWeights2 = {
      regular: "400",
      medium: "500",
      bold: "700"
    };
    var lineHeights2 = {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%"
    };
    var breakpoints2 = {
      sm: "18.75rem",
      md: "25rem",
      lg: "31.25rem",
      xl: "37.5rem",
      "2xl": "43.75rem",
      "3xl": "50rem"
    };
  }
});

// styles/stitches.config.ts
var import_tokens = __toESM(require_dist());
import { createStitches } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: import_tokens.colors,
    breakpoints: import_tokens.breakpoints,
    fonts: import_tokens.fonts,
    fontSizes: import_tokens.fontSizes,
    fontWeights: import_tokens.fontWeights,
    radii: import_tokens.radii,
    lineHeights: import_tokens.lineHeights,
    space: import_tokens.space
  },
  media: {
    bp1: "(min-width: 480px)"
  }
});

// src/index.tsx
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$sm",
  border: 0,
  padding: "$2 $4",
  fontWeight: "bold",
  color: "$white",
  variants: {
    size: {
      small: {
        fontSize: "12px"
      },
      big: {
        fontSize: "16px"
      }
    }
  },
  defaultVariants: {
    size: "big"
  }
});
export {
  Button
};
