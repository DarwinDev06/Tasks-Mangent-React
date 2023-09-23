import './TodoItem.css'
import iconComplete from '../assets/completar.png'
import iconCancel from '../assets/cancelar.png'
import React from 'react';

function TodoItem(props){
    return(
        <li>
            <img 
                src={iconComplete} 
                alt='Complet' 
                className={`btnComplet ${props.completed && 'btnCompleted'}`}
                onClick={props.onCompleted}
                
            />
            
            <p className={`taskDescription ${props.completed && 'taskCompleted'}`}>{props.text}</p>
            
            <img 
                src={iconCancel} 
                alt='Cancel' 
                className='btnCancel'
                onClick={props.onDelete}/>
        </li>
    );
}

export {TodoItem}
