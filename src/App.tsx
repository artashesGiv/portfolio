import React from 'react'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Skills} from './components/Skills/Skills'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Contacts} from './components/Contacts/Contacts'
import {Footer} from './components/Footer/Footer'

export const App = () => (
   <>
      <Header/>
      <Main/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
   </>
)

