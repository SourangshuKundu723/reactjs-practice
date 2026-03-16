import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="card">
        <h1>Learning React</h1>
        <h2>Counter: {count}</h2>
        <button onClick={addValue}>Add value {count}</button>
        <br />
        <button onClick={removeValue}>Remove value {count}</button>
        <h2>Footer: {count}</h2>
      </div>
    </>
  )
}

export default App
