import React from "react"
import './TodosEmpty.css'
import { TodoContext } from "../TodoContext"

function TodosEmpty () {
    const {searchValue} = React.useContext(TodoContext)
    console.log(searchValue,'<searrrrrr')
    return (
        (searchValue !== '') 
            ?  <h3>not find Task with '{searchValue}'</h3> 
            :  <h3>You Don't have task add, please add once </h3> 
    )
}

export {TodosEmpty}