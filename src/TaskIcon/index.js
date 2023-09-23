import { ReactComponent as Add } from "./add-icon.svg"
/* import { ReactComponent as traslate } from "./icon_traslate.svg" */
import React from "react"
import './TaskIcon.css'


const iconType = {
    "add": <Add className={`iconAddTaskPrueba`}/>,
    /* delete : <delete/> */
}

function TaskIcon ({type}) {
/*     return (
        <span className={`iconAddTask`}>
            {iconType[type]}
        </span>
    ) */
}

export {TaskIcon}