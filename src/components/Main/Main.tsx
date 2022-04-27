import React from 'react'
import s from './Main.module.scss'
import {Header} from './Header/Header'
import {Hello} from './Hello/Hello'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../store/redux/store'
import {InitialStateMainType} from '../../store/mainReducer/types'

export const Main = () => {

   const main = useSelector<AppStateType, InitialStateMainType>(state => state.main)

   return (
      <div className={s.main}>
         <Header profile={main.profile}/>
         <Hello welcome={main.welcome}/>
         <hr/>
      </div>
   )
}

