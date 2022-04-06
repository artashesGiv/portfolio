import React from 'react'
import s from '../Menu.module.scss'

export const Nav = () => {
   return (
      <div className={s.nav}>
         <ul>
            <li><a href={'#hello'}>Hello</a></li>
            <li><a href={'#resume'}>Skills</a></li>
            <li><a href={'#portfolio'}>Portfolio</a></li>
            <li><a href={'#contacts'}>Contacts</a></li>
         </ul>
      </div>
   )
}

