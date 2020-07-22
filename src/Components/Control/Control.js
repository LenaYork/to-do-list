import React from 'react';
import {Button} from 'antd';
import './Control.css';



export function Control() {
    return (
        <div className="control">
            Here will lay the buttons
            <Button type="primary" size="small" shape="round" onClick={() => {}}>
                button
            </Button>
        </div>
    )
}
