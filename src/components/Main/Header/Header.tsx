import React from 'react'
import s from '../Main.module.scss'
import {Menu} from '../../Menu/Menu'
import {useMediaQuery} from 'react-responsive'
import {profileType} from '../../../store/mainReducer/types'
import moment from 'moment'

type HeaderPropsType = {
   profile: profileType
}

export const Header = ({profile}: HeaderPropsType) => {

   const is1000Screen = useMediaQuery({query: '(max-width: 1000px)'})
   const birthdayYear = moment().diff(profile.age, 'year')

   return (
      <header id={'header'} className={s.header}>
         {!is1000Screen && <Menu/>}
         <div className={s.headerContainer}>
            <div className={s.photo}>
               <img src={profile.photo} alt={'img'} height={380}/>
            </div>
            <div className={s.text}>
               <h1>{profile.name}</h1>
               <p>{profile.tags}</p>
               <div className={s.profile}>
                  <div className={s.profileHeaders}>
                     <div><span>Возраст:</span></div>
                     <div><span>Телефон:</span></div>
                     <div><span>Email:</span></div>
                     <div><span>Адрес:</span></div>
                  </div>
                  <div className={s.profileItems}>
                     <div>{birthdayYear}</div>
                     <div>{profile.phone}</div>
                     <div>{profile.email}</div>
                     <div>{profile.address}</div>
                  </div>

               </div>
            </div>
         </div>
      </header>
   )
}
