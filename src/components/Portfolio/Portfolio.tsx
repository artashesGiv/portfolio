import React from 'react'
import s from './Portfolio.module.scss'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../store/redux/store'
import {PortfolioItemType} from '../../store/portfolioReducer/types'
import {PortfolioItem} from './PortfolioItem/PortfolioItem'

export const Portfolio = () => {

   const portfolioItems = useSelector<AppStateType, PortfolioItemType[]>(state => state.portfolio.portfolioItems)

   return (
      <section id={'portfolio'} className={s.portfolio}>
         <div className={s.container}>
            <h2>Mi projects</h2>
            {portfolioItems.map(item => <PortfolioItem key={item.name} item={item}/>)}
         </div>
      </section>
   )
}


