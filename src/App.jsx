import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Top from "./pages/Top";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        {/* ルーティング */}
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
