// src/index.tsx
import { Button as ChakraButton } from "@chakra-ui/react";
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx(
    ChakraButton,
    {
      background: "pink",
      border: 0,
      borderRadius: "sm",
      p: "2 4",
      fontFamily: "default",
      color: "white",
      fontWeight: "bold",
      children: "Button"
    }
  );
};
export {
  Button
};
