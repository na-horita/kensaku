import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Top from "./pages/Top";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Navb from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <div className="app_wrap">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
