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
  return (
    <React.Fragment>

      <Headers/>

      
        <TodoCounter complete={15} total={20}/>
        <TodoSearch />

        <TodoList>
          {/* Se recorre el array y se crea uno nuevo para que inserto todos los todo item pasandole los propiedades */}
          {defaultTodo.map(todo => 
            todo=[<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>]
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
