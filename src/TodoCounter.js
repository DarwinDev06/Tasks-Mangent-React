
import './TodoCounter.css'

function TodoCounter({complete, total}) {
    return (
        <h1 className='counter'>
            You have completed {complete} of {total} Tasks
        </h1>
    );
}

export {TodoCounter};