import React from 'react';
import { Radio, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './ToDo.css';

export function ToDo(props) {
    return(
        <div className="todo">
            <Radio className="radioBox"/> 
            <div class="todo-text"> {props.text} </div>
            <Button 
                className="delete-todo-button" 
                type="danger" 
                size="small" 
                shape="round" 
                color="purple-7"  
                onClick={() => {}}
            >
                <CloseOutlined className="cross"/>
            </Button>
        </div>
    )
}