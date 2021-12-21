import React from 'react'
import s from './Skills.module.scss'

export const Skills = () => {
   return (
      <div id={'skills'} className={s.skillsBlock}>
         <div className={s.container}>
            <div className={s.blockName}>
               <h2>Мои навыки</h2>
            </div>
            <div className={s.items}>
               <div className={s.item}>
                  <img
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi et eveniet harum libero.
                     Alias, quia similique? Ad facere facilis, laborum molestiae mollitia natus nesciunt omnis porro
                     soluta. Adipisci, numquam.</p>
               </div>
               <div className={s.item}>
                  <img
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus facilis minima quidem
                     reprehenderit? Aliquam blanditiis cum, dolorem earum natus optio voluptate? Et laboriosam neque
                     nulla similique tempore unde voluptatum.</p>
               </div>
               <div className={s.item}>
                  <img
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"
                     alt="skill"/>
                  <h3>Skill</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, ea earum harum illo itaque
                     perferendis quasi. Cupiditate delectus dolores esse hic libero mollitia nihil possimus saepe ut
                     vero? Quaerat.</p>
               </div>
            </div>
         </div>
      </div>
   )
}
