import './Control.css';

import React from 'react';
import {Button, InputNumber, Tooltip} from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { purple } from '@ant-design/colors';


const addTip = <span>add your new item</span>;
const deleteTip = <span>delete your new item</span>;
const totalTip = <span>total in chosen category</span>;
const doneTip = <span>show only implemented items</span>;
const pendingTip = <span>show only pending items</span>;
const allTip = <span>show all items</span>;
const clearTip = <span>delete all items</span>;


export function Control() {
    return (
        <div className="control-container">
            {/* Here will lay the buttons */}
            <Tooltip placement="top" title={addTip}>
                <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    <PlusCircleOutlined className="plus-button"style={{ fontSize: '16px', color: '#08c' }}/>
                </Button>
            </Tooltip>

            <Tooltip placement="top" title={deleteTip}>
                <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    <MinusCircleOutlined className="minus-button"/>
                </Button>
            </Tooltip>

            <Tooltip placement="top" title={totalTip}>    
                <InputNumber className="user-quantity" defaultValue={5} disabled='true' id="user-quantity" />
            </Tooltip>

            <Tooltip placement="top" title={doneTip}>
                <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    DONE
                </Button>
            </Tooltip>

            <Tooltip placement="top" title={pendingTip}>
                <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    PENDING
                </Button>
            </Tooltip>

            <Tooltip placement="top" title={allTip}>
                <Button className="control-button" type="ghost" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    ALL
                </Button>
            </Tooltip>
            
            <Tooltip placement="top" title={clearTip}>
                <Button className="control-button" type="danger" size="middle" color="purple-7" shape="round" onClick={() => {}}>
                    DEL
                </Button>
            </Tooltip>
        </div>
    )
}
