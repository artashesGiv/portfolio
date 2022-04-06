import React, {useState} from 'react'
import s from './PortfolioItem.module.scss'
import {Modal} from '../../common/Modal/Modal'
import {PortfolioItemType} from '../../../store/portfolioReducer/types'

type PortfolioItemPropsType = {
   item: PortfolioItemType
}

export const PortfolioItem = ({item}: PortfolioItemPropsType) => {

   const [modalActive, setModalActive] = useState(false)
   const changeModalActive = () => {
      setModalActive(!modalActive)
   }

   return (
      <>
         <div className={s.item} onClick={changeModalActive}>
            <div className={s.img}>
               <img src={item.image} alt="img" height={'100%'}
                    width={'100%'}/>
            </div>
            <div className={s.description}>
               <h3>{item.name}</h3>
               <p className={s.description__text}>
                  {item.description}
               </p>
               <div className={s.description__stack}>
                  <p>used stack:</p>
                  <div className={s.description__stackItem}>
                     {item.stack.map(s => <TagItem key={s} title={s}/>)}
                  </div>
               </div>
               <a href="https://github.com/" target="_blank" onClick={(e => e.stopPropagation())}
                  rel="noreferrer">{item.link}</a>
            </div>
         </div>
         <Modal active={modalActive} setActive={changeModalActive}>
            <div className={s.modal}>
               <div className={s.img}>
                  <img src={item.image} alt="img" height={'100%'}
                       width={'100%'}/>
               </div>
               <div className={s.description}>
                  <h3>{item.name}</h3>
                  <p className={s.description__text}>
                     {item.description}
                  </p>
                  <div className={s.description__stack}>
                     <p>used stack:</p>
                     <div className={s.description__stackItem}>
                        {item.stack.map(s => <TagItem key={s} title={s}/>)}
                     </div>
                  </div>
                  <a href="https://github.com/" target="_blank" onClick={(e => e.stopPropagation())}
                     rel="noreferrer">{item.link}</a>
               </div>
            </div>
         </Modal>
      </>
   )
}

const tagStyle = {
   fontSize: '14px',
   lineHeight: '20px',
   backgroundColor: '#fff',
   boxShadow: '0 1px 4px rgb(0 0 0 / 14%)',
   padding: '5px 10px',
   marginRight: '10px',
   borderRadius: '3px',
}
const TagItem = ({title}: { title: string }) => (
   <div style={tagStyle}>
      {title}
   </div>
)
