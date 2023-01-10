import { styled } from "../styles/stitches.config";
import { VariantProps } from "@stitches/react";

export const Button = styled("button", {
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
        fontSize: "12px",
      },
      big: {
        fontSize: "16px",
      },
    },
  },

  defaultVariants: {
    size: "big",
  },
});

export interface ButtonProps extends VariantProps<typeof Button> {}
