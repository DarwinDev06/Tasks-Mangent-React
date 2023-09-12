import './TodoSearch.css'
import iconBuscar from './assets/buscar.png'

function TodoSearch () {
    return (
        <div className='todoSearch'>
            <div className='search'>
                <input 
                    placeholder="Search: Learn React js"
                    onChange={(event) => {
                        console.log('Haz escrito algo en el buscador')
                        console.log(event)
                        console.log(event.target)
                        console.log(event.target.value)
                    }}
                />
                <img src={iconBuscar} className='iconBuscar'/>
            </div>
            <div className='btnFilter'>
                <button className='btnAll'>All</button>
                <button>Pending</button>
                <button>Completed</button>
            </div>
        
        </div>
        
        
    );
}

export {TodoSearch};