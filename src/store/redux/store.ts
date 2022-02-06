import {combineReducers, createStore} from 'redux'
import {mainReducer} from '../mainReduser/mainReduser'

export const rootReducer = combineReducers({
   main: mainReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)