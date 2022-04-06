import React from 'react'
import s from './../Resume.module.scss'
import {SkillsItemType} from '../../../store/resumeReducer/types'

type SkillsPropsType = {
   skills: SkillsItemType[]
}

export const Skills = ({skills}: SkillsPropsType) => {
   return (
      <section className={s.skills}>
         <h3>general skills</h3>
         <div className={s.skills_items}>
            {
               skills.map(i => <SkillsItem key={i.title} item={i}/>)
            }
         </div>
      </section>
   )
}

type ItemPropsType = {
   item: SkillsItemType
}

export const SkillsItem = ({item}: ItemPropsType) => {
   return (
      <div className={s.skills_item}>
         <p className={s.skills_item__title}>
            <span>{item.title}</span>
            <span>{item.percent}%</span>
         </p>
         <div className={s.progress}>
            <div className={s.progressBar} role={'progressbar'} aria-valuenow={item.percent} aria-valuemin={0}
                 aria-valuemax={100} style={{width: `${item.percent}%`}}/>
         </div>
      </div>
   )
}
