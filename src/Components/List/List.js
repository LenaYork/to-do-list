import React from 'react';
import './List.css';
import {ToDo} from './ToDo';

export function List(props) {
    const renderToDoElement = props.elements.map(elem => <ToDo text={elem} /> )
    return(
        <div className="list">
           {renderToDoElement}
        </div>
    )
}