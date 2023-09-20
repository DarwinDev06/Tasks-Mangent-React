
import './TodoCounter.css'

function TodoCounter({complete, total}) {
    return (
        <h1 className='counter'>
            {(complete == total) ? 
                ((total !==0) ? 'You had completed all tasks 🥳' 
                :'You Dont have task add')
            : `You have completed ${complete} of ${total} Tasks`}
            {/* You have completed {complete} of {total} Tasks */}
        </h1>
    );
}

export {TodoCounter};