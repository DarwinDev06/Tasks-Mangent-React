
import React from "react";
import { useLocalStorage } from "./UseLocalStorage";
const TodoContext = React.createContext()

function TodoProvider ({ children }) {
    
  //states
  const {
    item: task,
    saveItem:saveTasks, 
    loading, 
    error
    } = useLocalStorage('TASKS_V1',[])

  const [searchValue,setSearchValue] = React.useState('');

  const [typeSearch, setTypeSearch] = React.useState('All')

  const [openModal, setOpenModal] = React.useState(false)

  //derivate states

  const taskCompleted = task.filter(task => !!task.completed).length

  const totalTask = task.length;


  const searchedTask = task.filter((task) => {
    switch (typeSearch) {
      case 'All': 
          const taskText = task.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return taskText.includes(searchText)
        break;
      case 'Completed': 
          
          const taskTextCompleted = task.text.toLowerCase();
          const searchTextCompleted = searchValue.toLowerCase();
          return task.completed === true && taskTextCompleted.includes(searchTextCompleted)
                
        break;
      case 'Pending': 
        const taskTextPending = task.text.toLowerCase();
        const searchTextPending = searchValue.toLowerCase();
        return task.completed === false && taskTextPending.includes(searchTextPending)
      default:
        break;
    }
  })

  const addTask = (text) => {
    const newTask = [...task]
    newTask.push({
      text,
      completed:false
    })
    saveTasks(newTask)
  }

  const completeTask = (text) => {

    const newTask = [...task]
    const taskIndex = newTask.findIndex(
      (task) => task.text === text);
    newTask[taskIndex].completed = true;
    saveTasks(newTask);
  };

  const deleteTask = (text) => {
    const newTask = [...task]

    const taskIndex = newTask.findIndex(
      (task) => task.text === text);
    newTask.splice(taskIndex,1);
    saveTasks(newTask);
  };

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                taskCompleted,
                searchValue,
                setSearchValue,
                typeSearch,
                setTypeSearch,
                totalTask,
                searchedTask,
                completeTask,
                deleteTask,
                openModal,
                setOpenModal,
                addTask
            }
        }>
            { children }
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}