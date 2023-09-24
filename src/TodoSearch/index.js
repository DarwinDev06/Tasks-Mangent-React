import './TodoSearch.css'
import iconBuscar from '../assets/buscar.png'
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch () {

    const {
        searchValue,
        setSearchValue,
        typeSearch,
        setTypeSearch
    } = React.useContext(TodoContext)

    return (
        <div className='todoSearch'>
            <div className='search'>
                <input 
                    placeholder="Search: Learn React js"
                    value={searchValue} 
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                        /* setTypeSearch('All') */;

                    }}
                />
                <img src={iconBuscar} className='iconBuscar'/>
            </div>

            <div className='btnFilter'>
                <button 
                    className={`btnFilterTask ${typeSearch == 'All' ? 'active' : ''}`}
                    onClick={()=>{
                        setTypeSearch('All')
                   } }
                    >All
                </button>
                <button 
                    className={`btnFilterTask ${typeSearch == 'Pending' ? 'active':''}`}
                    
                    onClick={()=>{
                        setTypeSearch('Pending')
                    }}
                    >Pending
                </button>
                <button 
                    className={`btnFilterTask ${typeSearch == 'Completed' ? 'active' : ''}`}
                    onClick={()=>{
                        setTypeSearch('Completed')
                   } }
                    >Completed
                </button>
            </div>
        </div>
    );
}

export {TodoSearch};