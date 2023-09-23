
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

  console.log(searchValue)

  //derivate states

  const taskCompleted = task.filter(task => !!task.completed).length

  const totalTask = task.length;

/*  console.log('log 1') */
 /* React.useEffect(()=>{
    console.log('log 2')
  }) */
/*   console.log('log 3')
  React.useEffect(()=>{
    console.log('log 444444444444')
  },[totalTask])

  console.log('log 5') */

  const searchedTask = task.filter((task) => {
    switch (typeSearch) {
      case 'All': 
          const taskText = task.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return taskText.includes(searchText)
        break;
      case 'Complete': 
          return task.completed === true
        break;
      case 'Pending': 
        return task.completed === false
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