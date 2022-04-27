import React, {useEffect} from 'react'
import s from '../Menu.module.scss'

export const Nav = ({className = s.nav}: { className?: string }) => {

   useEffect(() => {

      const scrollTo = (element: any) => {
         window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
         })
      }

      document.querySelectorAll('.anchor').forEach(link => {
         link.addEventListener('click', e => {
            e.preventDefault()

            const href = link.getAttribute('href')?.substring(1)
            const scrollTarget = document.getElementById(href || '')
            scrollTo(scrollTarget)
         })
      })
   })

   return (
      <div className={className}>
         <ul>
            <li><a className={'anchor'} href={'#hello'}>Hello</a></li>
            <li><a className={'anchor'} href={'#resume'}>Skills</a></li>
            <li><a className={'anchor'} href={'#portfolio'}>Portfolio</a></li>
            <li><a className={'anchor'} href={'#contact'}>Contact</a></li>
         </ul>
      </div>
   )
}

