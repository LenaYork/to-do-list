import React from 'react';
import './ToDo.css';
import { Radio } from 'antd';
import { Button } from 'antd';
export function ToDo(props) {
    
    return(
        <div className="todo">
            <Radio /> 
            {props.text} 
            <Button className="delete-todo-button" type="danger" size="small" shape="round" color="purple-7"  onClick={() => {}}>
                x
            </Button>
        </div>
    )
}