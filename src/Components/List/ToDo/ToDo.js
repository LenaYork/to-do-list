import React from 'react';
import './ToDo.css';

export function ToDo(props) {
    
    return(
        <div className="todo">
            {props.text}
        </div>
    )
}