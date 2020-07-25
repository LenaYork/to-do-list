import React from 'react';
import {Button} from 'antd';
import {InputNumber} from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { purple } from '@ant-design/colors';
import './Control.css';

export function Control() {
    return (
        <div className="control-container">
            {/* Here will lay the buttons */}
            <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                 <PlusCircleOutlined />
            </Button>

            <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                 <MinusCircleOutlined />
            </Button>

            <InputNumber className="user-quantity" defaultValue={5} disabled='true' id="user-quantity" />

            <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                DONE
            </Button>
            <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                PENDING
            </Button>
            <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                ALL
            </Button>
            <Button className="control-button" type="danger" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                DEL
            </Button>
        </div>
    )
}
