import logo from './platzi.webp';
import React from 'react';
import { Headers } from './Headers';
import { TodoPanel } from './TodoPanel';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoBtn';
import './App.css';

const defaultTodo = [
  {text: 'Practice English', completed: true},
  {text: 'Learn React.js', completed: false},
  {text: 'be fullstack developer', completed:false}
]

function App() {

  //states
  const [searchValue,setSearchValue] = React.useState('');

  const [typeSearch, setTypeSearch] = React.useState('All')
  
  const [task, setTask] = React.useState(defaultTodo);
    
  console.log(searchValue)
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
      case 'Complete': 
          return task.completed === true;
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
    setTask(newTask);
  };

  const deleteTask = (text) => {
    const newTask = [...task]

    const taskIndex = newTask.findIndex(
      (task) => task.text === text);
    newTask.splice(taskIndex,1);
    setTask(newTask);
  };

  
  //componentes
  return (
    <React.Fragment>

      <Headers/>
      <TodoCounter complete={taskCompleted} total={totalTask}/>
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        typeSearch = {typeSearch}
        setTypeSearch = {setTypeSearch}
      />

      <TodoList 
       task = {task} 
       setTask ={setTask}
       totalTask = {totalTask}
       searchedTask={searchedTask}
       >
        
        {/* Se recorre el array y se crea uno nuevo para que inserto todos los todo item pasandole los propiedades */}
        {searchedTask.map(todo => 
          todo = [
            <TodoItem
              key = {todo.text} 
              text = {todo.text} 
              completed={todo.completed}
              onCompleted = {() => {completeTask(todo[0].props.text)}}//forma como deberia ir ()=> completeTask(todo.text)
              onDelete = { () => deleteTask(todo[0].props.text) }
              
            />
          ]
        )}
      </TodoList>

      <CreateTodoButton/>

      {/* <TodoPanel/> */}
      

    </React.Fragment>
  );
}

//componente React

/* function todoCount() {
  return(
    <h1>
      Haz Completado 3 de 5 Todos
    </h1>
  );
} */


export default App;
