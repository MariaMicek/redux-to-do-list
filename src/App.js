import React from 'react'
import { incActionCreator, decActionCreator } from './state/counter'
import { store } from './store'

class App extends React.Component {
  decOnClick = () => {
    store.dispatch(decActionCreator())
  }

  incOnClick = () => {
    store.dispatch(incActionCreator())
  }

  render() {
    return (
      <div>
        <button
          onClick={this.decOnClick}
        >
          -
        </button>
        <button
          onClick={this.incOnClick}
        >
          +
        </button>
      </div>
    )
  }
}

export default App