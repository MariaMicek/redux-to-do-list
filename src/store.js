import {createStore, combineReducers} from 'redux'
import counterReducer from './state/counter'
import toDoReducer from './state/toDo'

const rootReducer = combineReducers(
    {
        counterReducer,
        toDoReducer
    }
)

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
