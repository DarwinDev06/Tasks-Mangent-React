import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  //componentes
  return (
    <TodoProvider>
         <AppUI
/*       loading={loading}
      error={error}
      taskCompleted={taskCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      typeSearch={ typeSearch}
      setTypeSearch={setTypeSearch}
      totalTask={totalTask}
      searchedTask={searchedTask}
      completeTask={completeTask}
      deleteTask={deleteTask} */
   />
    </TodoProvider>

  );
}

export default App;
