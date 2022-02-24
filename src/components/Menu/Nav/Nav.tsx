import React from 'react'
import s from '../Menu.module.scss'

export const Nav = () => {
   return (
      <div className={s.nav}>
         <ul>
            <li><a href={'#hello'}>Привет</a></li>
            <li><a href={'#resume'}>Скиллы</a></li>
            <li><a href={'#projects'}>Проекты</a></li>
            <li><a href={'#contacts'}>Контакты</a></li>
         </ul>
      </div>
   )
}

