import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import './Modal.css'


function Modal ({children}) {

    const {openModal, setOpenModal} = React.useContext(TodoContext)

    return ReactDOM.createPortal (
        <div className="modal">
            {children}
            {/* <button className="btnCerrarModal" 
                onClick={() => {
                    console.log('cick ceerar')
                    openModal === true ? setOpenModal(false) : alert('Error, no se puede ejecutar esta accion')
                }}
            >cerrar</button> */}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}