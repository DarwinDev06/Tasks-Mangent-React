import React from "react";
import {App} from ".";
import { Headers } from '../Headers';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoBtn';
import { TodosLoading } from "../TodosLoading";
import { TodosEmpty } from "../TodosEmpty";
import { TodosError } from "../TodosError";
import { Modal } from "../Modal";
import {TodoForm} from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUI () {

    const {
      loading,
      error,
      totalTask,
      searchedTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal} = React.useContext(TodoContext)
      
  return (



    <React.Fragment>

      <Headers/>
      <TodoCounter />
      <TodoSearch/>

      <TodoList 
            totalTask = {totalTask}
            searchedTask={searchedTask}>

              {loading && (
                <>
                  <TodosLoading/>
                  <TodosLoading/>
                  <TodosLoading/>
                </>
              )}
              {error && <TodosError/>}

              {(!loading && searchedTask.length == 0) && <TodosEmpty/>}
              
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

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
        )}

    </React.Fragment>
  )}

export {AppUI}
