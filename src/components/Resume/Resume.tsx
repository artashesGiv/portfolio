import React from 'react'
import s from './Resume.module.scss'
import {initialStateResumeType} from '../../store/resumeReducer/types'
import {AppStateType} from '../../store/redux/store'
import {useSelector} from 'react-redux'
import {Skills} from './Skills/Skills'
import {Timeline} from './Timeline/Timeline'

export const Resume = () => {
   const resume = useSelector<AppStateType, initialStateResumeType>(state => state.resume)

   return (
      <section id={'resume'} className={s.resume}>
         <div className={s.container}>
            <Timeline resume={resume}/>
            <Skills skills={resume.skills}/>
         </div>
      </section>
   )
}

