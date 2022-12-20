import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = () => {
  return (
    <ChakraButton
      background="pink"
      border={0}
      borderRadius="sm"
      p="2 4"
      fontFamily="default"
      color="white"
      fontWeight="bold"
    >
      Button
    </ChakraButton>
  );
};
