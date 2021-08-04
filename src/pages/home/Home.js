import React from 'react'
import s from './Home.module.css'
import Games from '../../components/games/Games'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'

export default function Home() {
    return (
        <div className={s.home}>
            <Header />
            {/* <Slider /> */}
            <Games />
        </div>
    )
}
