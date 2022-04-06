import React from 'react'
import s from './Footer.module.scss'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../store/redux/store'
import {ProfileType} from '../../store/mainReducer/types'

export const Footer = () => {

   return (
      <section id={'contacts'} className={s.footer}>
         <div className={s.container}>
            <h2>Get in touch</h2>
            <div className={s.contacts}>
               <div className={s.contactsList}>
                  <ContactsTable/>
               </div>
               <div className={s.contactsForm}>
                  <span>Or just write me a letter here_</span>
                  <ContactForm/>
               </div>
            </div>
            <span className={s.footerRights}>© 2022 Artashes Dzhivanian All Rights Reserved</span>
         </div>
      </section>
   )
}

const ContactsTable = () => {

   const profile = useSelector<AppStateType, ProfileType>(state => state.main.profile)

   return (
      <table className={'table'}>
         <tbody>
         <tr>
            <td>email:</td>
            <td><a href={`mailto:${profile.email}`}>{profile.email}</a></td>
         </tr>
         <tr>
            <td>phone:</td>
            <td><a href={`tel:${profile.phone}`}>{profile.phone}</a></td>
         </tr>
         </tbody>
      </table>
   )
}

const ContactForm = () => {
   return (
      <form action="">
         <input type="text" placeholder={'Your name'}/>
         <input type="text" placeholder={'Your e-mail'}/>
         <textarea placeholder={'Your message'}/>
         <button>send</button>
      </form>
   )
}