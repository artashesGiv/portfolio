import React from 'react'
import s from './Main.module.scss'

export const Main = () => {
   return (
      <div id={'main'} className={s.mainBlock}>
         <div className={s.container}>
            <div className={s.text}>
               <span>Привет, меня зовут</span>
               <h1>Арташес Дживанян</h1>
               <p>я начинающий frontend разработчик</p>
            </div>
            <div className={s.photo}>
               <img src="https://dummyimage.com/200x300" alt={'img'}/>
            </div>
         </div>
      </div>
   )
}

