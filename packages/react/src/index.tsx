import { ChakraProvider, Heading } from "@chakra-ui/react";
import { theme } from "../styles";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading color="ignite300" margin="1">
        Hello word
      </Heading>
    </ChakraProvider>
  );
}
