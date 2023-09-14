import './TodoList.css'

function TodoList({children, totalTask}) {
    return (
        <div className="taskList">
{/*             <ul className="taskList">
            {children}
        </ul> */}
        <ul >
            {children}
            {console.log('t',totalTask )}
            {console.log('c',(totalTask == 0) ? 'h3Full' : 'h3')}
            <h3 className={`${(totalTask === 0) ? 'h3' : 'h3Full'}`}>You Don't have task add, please add once 👇</h3>
        </ul>
        </div>

    );
}

export {TodoList}