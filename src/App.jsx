import { useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Title />
        <Form />
    </div>
  )
}

export default App
