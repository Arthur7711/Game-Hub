import React from 'react'
import img from '../../img/logo.jpg'
import s from './OneGames.module.css'

export default function OneGame() {
    return (
        <div className={s.forOneGame}>
            <div className={s.forImg}>
                <img alt='gameName' src={img}  />
            </div>
            <div className={s.textPart}>
                <h2>Title</h2>
                <p>Description Description Description Description</p>
            </div>
        </div>
    )
}
