import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  //componentes
  return (
    <TodoProvider>
         <AppUI />
    </TodoProvider>

  );
}

export default App;
