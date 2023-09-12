import './TodoItem.css'
import iconComplete from './assets/completar.png'
import iconCancel from './assets/cancelar.png'

function TodoItem(props){
    return(
        <li>
        <img src={iconComplete} alt='Complet' className={`btnComplet ${props.completed && 'btnCompleted'}`}/>
        <p className={`taskDescription ${props.completed && 'taskCompleted'}`} >{props.text}</p>
        
        <img src={iconCancel} alt='Cancel' className='btnCancel'/>
        </li>
    );
}

export {TodoItem}