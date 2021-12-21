import React from 'react'
import s from './Portfolio.module.scss'

export const Portfolio = () => {
   return (
      <div id={'projects'} className={s.portfolioBlock}>
         <div className={s.container}>
            <div className={s.blockName}>
               <h2>Мои работы</h2>
            </div>
            <div className={s.items}>
               <div className={s.item}>
                  <img
                     src="https://dummyimage.com/300x300&text=project"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo id itaque necessitatibus nemo, voluptas.</p>
               </div>
               <div className={s.item}>
                  <img
                     src="https://dummyimage.com/300x300&text=project"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo id itaque necessitatibus nemo, voluptas.</p>
               </div>
               <div className={s.item}>
                  <img
                     src="https://dummyimage.com/300x300&text=project"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo id itaque necessitatibus nemo, voluptas.</p>
               </div>
            </div>
         </div>
      </div>
   )
}
