import React from 'react'
import s from './../Main.module.scss'
import {WelcomeType} from '../../../store/mainReducer/types'

type HelloPropsType = {
   welcome: WelcomeType
}

export const Hello = ({welcome}: HelloPropsType) => {
   return (
      <section id={'hello'} className={s.hello}>
         <div className={s.helloContainer}>
            <h2>Hi</h2>
            <p>{welcome.welcome}</p>
            <div className={s.btn}>
               <a href={welcome.cv} target={'_blank'} rel="noreferrer">Download CV</a>
            </div>
         </div>
      </section>
   )
}
