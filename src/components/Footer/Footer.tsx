import React from 'react'
import s from './Footer.module.scss'

export const Footer = () => {
   return (
      <div className={s.footerBlock}>
         <div className={s.container}>
            <a href="https://vk.com">ВКонтакте</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://telegram.com">Telegram</a>
            <a href="https://linkedin.com">LinkedIN</a>
         </div>
      </div>
   )
}
