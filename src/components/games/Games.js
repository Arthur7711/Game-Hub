import React from 'react'
import OneGame from '../oneGame/OneGame'
import s from './Games.module.css'

export default function Games() {

    return (
        <div className={s.games}>
            <OneGame />
            {/* <OneGame />
            <OneGame />
            <OneGame />
            <OneGame /> */}
        </div>
    )
}
