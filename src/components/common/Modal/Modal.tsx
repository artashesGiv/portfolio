import s from './Modal.module.scss'
import React, {useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'
import './ModalTransition.scss'

type ModalPropsType = {
   active: boolean
   setActive: () => void
   children: any
   scroll?: boolean
}

export const Modal = ({active, setActive, children, scroll}: ModalPropsType) => {

   const onKeyPress = (e: KeyboardEvent) => {
      active && e.key === 'Escape' && setActive()
   }

   useEffect(() => {
      if (!scroll) {
         active
            ? document.body.classList.add('modal-open')
            : document.body.classList.remove('modal-open')
      }
      document.addEventListener('keydown', onKeyPress)
      return () => document.removeEventListener('keydown', onKeyPress)
   })

   return (
      <>
         <CSSTransition in={active} timeout={300} unmountOnExit classNames={'modal-transition'}>
            <div className={s.modal} onClick={setActive}>
               <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
                  <div className={s.close}>
                     <button onClick={() => setActive()}>X</button>
                  </div>
                  <div className={s.modal__content_body}>
                     {children}
                  </div>
               </div>
            </div>
         </CSSTransition>
      </>
   )
}