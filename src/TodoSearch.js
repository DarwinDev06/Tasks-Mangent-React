import './TodoSearch.css'
import iconBuscar from './assets/buscar.png'
import React from 'react';

function TodoSearch ({searchValue, setSearchValue, typeSearch, setTypeSearch}) {
    return (
        <div className='todoSearch'>
            <div className='search'>
                <input 
                    placeholder="Search: Learn React js"
                    value={searchValue} 
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                        setTypeSearch('All');

                    }}
                />
                <img src={iconBuscar} className='iconBuscar'/>
            </div>

            <div className='btnFilter'>
                <button 
                    className='btnAll'
                    onClick={()=>setTypeSearch('All')}
                    >All</button>
                <button onClick={()=>setTypeSearch('Pending')}>Pending</button>
                <button onClick={()=>setTypeSearch('Complete')}>Completed</button>
            </div>
        
        </div>
    );
}

export {TodoSearch};