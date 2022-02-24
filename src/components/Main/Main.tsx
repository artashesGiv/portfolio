import React from 'react'
import s from './Main.module.scss'
import {Header} from './Header/Header'
import {Hello} from './Hello/Hello'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../store/redux/store'
import {initialStateMainType} from '../../store/mainReducer/types'

export const Main = () => {

   const main = useSelector<AppStateType, initialStateMainType>(state => state.main)

   return (
      <div className={s.main}>
         <Header profile={main.profile}/>
         <Hello welcome={main.welcome}/>
      </div>
   )
}

