import {combineReducers, createStore} from 'redux'
import {mainReducer} from '../mainReducer/mainReducer'
import {resumeReducer} from '../resumeReducer/resumeReducer'

export const rootReducer = combineReducers({
   main: mainReducer,
   resume: resumeReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)