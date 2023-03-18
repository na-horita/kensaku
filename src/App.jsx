import { useState } from 'react'
import Title from './components/Title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Title />
    </div>
  )
}

export default App
