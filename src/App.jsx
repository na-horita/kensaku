import { useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import './App.css'

function App() {
  const [word, setWord] = useState('')

  return (
    <div className="App">
        <Title />
        <Form setWord={setWord} />
        検索文字:{word}
    </div>
  )
}

export default App
