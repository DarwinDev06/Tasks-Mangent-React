import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm () {

    const {
        addTask,
        setOpenModal} = React.useContext(TodoContext)

    const [newTaskValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        addTask(newTaskValue)
        setOpenModal(false)
        event.preventDefault();

    }

    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new task</label>
            <textarea 
                placeholder="Learn Python"
                value={newTaskValue}
                onChange={onChange}>
            </textarea>
            <div className='formContainerButton'>
                <button 
                    type="button"
                    className="btnForm btnCancelar"
                    onClick={onCancel}
                    >Cancelar
                </button>
                <button 
                    className="btnForm btnGuardar"
                    type="submit"
                    >Guardar
                </button>
            </div>
            <span 
                className="closeModal"
                onClick={onCancel}
                >X
            </span>
        </form>
    );
}   

export {TodoForm}