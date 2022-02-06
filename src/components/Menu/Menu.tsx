import React from 'react'
import s from './Menu.module.scss'
import {Nav} from './Nav/Nav'

export const Menu = () => {
   return (
      <div className={s.menu}>
         <div className={s.container}>
            <Nav/>
         </div>
      </div>
   )
}

