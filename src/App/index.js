import logo from '../assets/platzi.webp';
import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

import { AppUI } from './AppUI';
import './App.css';

/* const defaultTodo = [
  {text: 'Practice English', completed: true},
  {text: 'Learn React.js', completed: false},
  {text: 'be fullstack developer', completed:false},
  {text: 'Get work in technology industry', completed:false}
]
localStorage.setItem('TASKS_V1', defaultTodo) 
localStorage.removeItem('TASK_V1)
 */

//CUSTOM HOOKS



function App() {

  //states
  const {
    item: task,
    saveItem:saveTasks, 
    loading, 
    error
    } = useLocalStorage('TASKS_V1',[])

  const [searchValue,setSearchValue] = React.useState('');

  const [typeSearch, setTypeSearch] = React.useState('All')

  console.log(searchValue)

  //derivate states

  const taskCompleted = task.filter(task => !!task.completed).length

  const totalTask = task.length;

 console.log('log 1')
 /* React.useEffect(()=>{
    console.log('log 2')
  }) */
  console.log('log 3')
  React.useEffect(()=>{
    console.log('log 444444444444')
  },[totalTask])

  console.log('log 5')

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

  
  //componentes
  return (
   <AppUI
      loading={loading}
      error={error}
      taskCompleted={taskCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      typeSearch={ typeSearch}
      setTypeSearch={setTypeSearch}
      totalTask={totalTask}
      searchedTask={searchedTask}
      completeTask={completeTask}
      deleteTask={deleteTask}
   />
  );
}



export default App;
