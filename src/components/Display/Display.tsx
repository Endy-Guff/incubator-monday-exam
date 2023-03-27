import React from "react";
import s from './Display.module.css'

type PropsType = {
    value: number
}

export const Display: React.FC<PropsType> = (
    {
        value
    }) => {
    return (
        <div className={s.display}>
            <div className={value === 5 ? s.red : ''}>{value}</div>
        </div>
    )
}