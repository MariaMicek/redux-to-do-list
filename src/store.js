import {createStore, combineReducers} from 'redux'
import counterReducer, {incActionCreator, decActionCreator} from './state/counter'

const rootReducer = combineReducers(
    {
        counterReducer
    }
)

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(incActionCreator())
window.dec = () => store.dispatch(decActionCreator())

