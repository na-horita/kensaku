import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import './App.css'
import Top from './pages/Top';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">

        <BrowserRouter>
          <header>
            {/* メニュー */}
            <nav>
              <ul>
                <li>
                  {/* Topページへのリンク */}
                  <Link to="/">Top</Link>
                </li>
                <li>
                  {/* Contactページへのリンク */}
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* ルーティング */}
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
