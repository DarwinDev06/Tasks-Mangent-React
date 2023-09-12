import './TodoList.css'

function TodoList({children}) {
    return (
        <div className="taskList">
{/*             <ul className="taskList">
            {children}
        </ul> */}
        <ul >
            {children}
        </ul>
        </div>

    );
}

export {TodoList}