import {createStore, combineReducers} from 'redux'
import counterReducer from './state/counter'

const rootReducer = combineReducers(
    {
        counterReducer
    }
)

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)