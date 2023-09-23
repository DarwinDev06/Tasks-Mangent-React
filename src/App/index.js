
import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from '../TodoContext';

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
