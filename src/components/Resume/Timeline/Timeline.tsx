import {InitialStateResumeType, TimelineItemType} from '../../../store/resumeReducer/types'
import s from '../Resume.module.scss'
import React from 'react'

type ResumePropsType = {
   resume: InitialStateResumeType
}
export const Timeline = ({resume}: ResumePropsType) => {
   return (
      <div>
         <h2>Resume</h2>
         <div>
            <p>{resume.mainDescription}</p>
         </div>
         <div className={s.resume_list}>
            <h3>education</h3>
            <div className={s.resume_list_items}>
               {
                  resume.education.map(i => <TimelineItem key={i.title} item={i}/>)
               }
            </div>

            <h3 className={s.resume_list_title}>employment</h3>
            <div className={s.resume_list_items}>
               {
                  resume.employment.map(i => <TimelineItem key={i.title} item={i}/>)
               }
            </div>
         </div>
      </div>
   )
}

type ItemPropsType = {
   item: TimelineItemType
}
const TimelineItem = ({item}: ItemPropsType) => {
   return (
      <div className={s.resume_list_items__block}>
         <p className={s.resume_list_items__blockTitle}>{item.title}</p>
         <p className={s.resume_list_items__blockDate}>{item.date}</p>
         <p>{item.description}</p>
      </div>
   )
}
