import "./App.css";
import Section from "./components/Section";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Section></Section>
    </ChakraProvider>
  );
}

export default App;
