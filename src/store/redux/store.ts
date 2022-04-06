import {combineReducers, createStore} from 'redux'
import {mainReducer} from '../mainReducer/mainReducer'
import {resumeReducer} from '../resumeReducer/resumeReducer'
import {portfolioReducer} from '../portfolioReducer/portfolioReducer'

export const rootReducer = combineReducers({
   main: mainReducer,
   resume: resumeReducer,
   portfolio: portfolioReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)