import React from 'react';
import s from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import {StateType} from "../../App";

type PropsType ={
    inc: StateType
    incAdd: () => void
    incReset: () => void
    message: string
}

export const Counter:React.FC<PropsType> = (
    {
        inc,
        incAdd,
        incReset,
        message
    }
) => {
    return (
        <div className={s.wrapper}>
            <Display value={inc.inc} maxInc={inc.max} message={message}/>
            <div className={s.buttonBox}>
                <Button
                    name='inc'
                    callback={incAdd}
                    disabled={message!=''||inc.inc >= inc.max}/>
                <Button
                    name='reset'
                    callback={incReset}
                    disabled={message!=''||inc.inc === inc.min}/>
            </div>
        </div>
    );
};

