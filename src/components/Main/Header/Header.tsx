import React from 'react'
import s from '../Main.module.scss'
import {Menu} from '../../Menu/Menu'
import {ProfileType} from '../../../store/mainReducer/types'
import moment from 'moment'

type HeaderPropsType = {
   profile: ProfileType
}

export const Header = ({profile}: HeaderPropsType) => {



   return (
      <header id={'header'} className={s.header}>
         <Menu/>
         <div className={s.headerContainer}>
            <div className={s.photo}>
               <img src={profile.photo} alt={'img'} height={380}/>
            </div>
            <div className={s.text}>
               <h1>{profile.name}</h1>
               <p>{profile.tags}</p>
               <MainInfoTable profile={profile}/>
            </div>
         </div>
      </header>
   )
}


const MainInfoTable = ({profile}: { profile: ProfileType }) => {

   const age = moment().diff(profile.age, 'year')

   return (
      <table className={'table'}>
         <tbody>
         <tr>
            <td>age:</td>
            <td>{age}</td>
         </tr>
         <tr>
            <td>email:</td>
            <td><a href={`mailto:${profile.email}`}>{profile.email}</a></td>
         </tr>
         <tr>
            <td>phone:</td>
            <td><a href={`tel:${profile.phone}`}>{profile.phone}</a></td>
         </tr>
         <tr>
            <td>address:</td>
            <td>{profile.address}</td>
         </tr>
         </tbody>
      </table>
   )
}