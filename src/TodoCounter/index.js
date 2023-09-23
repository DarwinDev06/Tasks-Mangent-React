import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const {taskCompleted,totalTask} = React.useContext(TodoContext)
    return (
        <h1 className='counter'>
            {(taskCompleted == totalTask) ? 
                ((totalTask !==0) ? 'You had completed all tasks 🥳' 
                :'You Dont have task add')
            : `You have completed ${taskCompleted} of ${totalTask} Tasks`}
            {/* You have completed {complete} of {total} Tasks */}
        </h1>
    );
}

export {TodoCounter};