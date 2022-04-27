import React from 'react'
import s from '../Menu.module.scss'

export const Nav = ({className = s.nav}:{className?: string}) => {
   return (
      <div className={className}>
         <ul>
            <li><a href={'#hello'}>Hello</a></li>
            <li><a href={'#resume'}>Skills</a></li>
            <li><a href={'#portfolio'}>Portfolio</a></li>
            <li><a href={'#contact'}>Contact</a></li>
         </ul>
      </div>
   )
}

