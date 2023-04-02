import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
