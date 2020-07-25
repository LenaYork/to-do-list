import React from 'react';
import './ToDo.css';
import { Radio } from 'antd';
export function ToDo(props) {
    
    return(
        <div className="todo">
            <Radio /> {props.text}
        </div>
    )
}