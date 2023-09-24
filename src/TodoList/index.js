import './TodoList.css'

function TodoList({children, totalTask}) {
    return (
        <div className="taskList">
            <ul >
                {children}
            </ul>
        </div>

    );
}

export {TodoList}