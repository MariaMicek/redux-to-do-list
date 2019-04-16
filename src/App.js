import React from 'react'
import Counter from './Counter'
import ToDo from './ToDo'

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Counter />
        <ToDo />
      </div>
    )
  }
}

export default App