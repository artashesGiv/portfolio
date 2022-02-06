import React from 'react'
import s from './../Main.module.scss'
import {welcomeType} from '../../../store/mainReduser/types'

type HelloPropsType = {
   welcome: welcomeType
}

export const Hello = ({welcome}: HelloPropsType) => {
   return (
      <section id={'hello'} className={s.hello}>
         <div className={s.helloContainer}>
            <h2>Hi</h2>
            <p>{welcome.welcome}</p>
            <button className={s.btn}>Download CV</button>
         </div>
      </section>
   )
}
