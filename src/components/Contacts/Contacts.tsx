import React from 'react'
import s from './Contacts.module.scss'

export const Contacts = () => {
   return (
      <div id={'contacts'} className={s.contactsBlock}>
         <div className={s.container}>
            <form>
               <input type="text" placeholder={'Ваше имя'}/>
               <input type="text" placeholder={'Ваша почта'}/>
               <textarea cols={30} rows={10} placeholder={'Ваше сообщение'}/>
               <button>Отправить</button>
            </form>
         </div>
      </div>
   )
}
