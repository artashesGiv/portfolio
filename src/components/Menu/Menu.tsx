import React, {useEffect, useState} from 'react'
import {Modal} from '../common/Modal/Modal'
import s from './Menu.module.scss'
import {Nav} from './Nav/Nav'
import {useMediaQuery} from 'react-responsive'

export const Menu = () => {

   const [scroll, setScroll] = useState<boolean>(false)
   const scrollPos = window.scrollY

   useEffect(() => {
      const scrollListener = () => {
         const currentScrollPos = window.scrollY
         setScroll(scrollPos < currentScrollPos)
      }
      window.addEventListener('scroll', scrollListener)
      return () => window.removeEventListener('scroll', scrollListener)
   })

   const menuClass = !scroll ? s.menu : `${s.menu} ${s.menuScroll}`

   return (
      <div className={menuClass}>
         <div className={s.container}>
            <AdaptiveMenu scroll={scroll}/>
         </div>
      </div>
   )
}

const AdaptiveMenu = ({scroll}: { scroll: boolean }) => {

   const is1000screen = useMediaQuery({query: '(max-width: 1000px)'})

   const [modalActive, setModalActive] = useState(false)
   const changeModalActive = () => {
      setModalActive(!modalActive)
   }

   const btnClass = !scroll ? s.menuBtn : `${s.menuBtn} ${s.menuBtnScroll}`

   return (
      <>
         {
            is1000screen ?
               <>
                  <button onClick={changeModalActive} className={btnClass}>MENU</button>
                  <Modal active={modalActive} setActive={changeModalActive} scroll={true} >
                     <Nav className={s.navSmall}/>
                  </Modal>
               </> :
               <Nav/>
         }
      </>
   )
}