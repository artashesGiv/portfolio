import React from 'react'
import s from '../Header.module.scss'

export const Nav = () => {
   return (
      <div className={s.nav}>
         <a href={"#skills"}>Скиллы</a>
         <a href={'#projects'}>Проекты</a>
         <a href={'#contacts'}>Контакты</a>
      </div>
   )
}
