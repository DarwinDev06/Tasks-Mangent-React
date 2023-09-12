
import './CreateTodoBtn.css'
import btnAdd from './assets/agregar.png'

function CreateTodoButton() {
    return(
        <div className='addTask'>
            <button className='btnAddTask' 
                onClick={(event) => {
                    console.log('Haz hecho click')
                    console.log(event)
                    console.log(event.target)
                }}
                >Add Task 
            </button>
            <img src={btnAdd} alt='iconAddTask' className='iconAddTask'/>
        </div>
    );
}

export {CreateTodoButton}