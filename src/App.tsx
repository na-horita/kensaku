import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import Top from "./pages/Top";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Scrape from "./pages/Scrape";
import Explain from "./pages/Explain";
import Sus from "./pages/Sus";
import Navb from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <RecoilRoot>
          <div className="app_wrap">
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/explain" element={<Explain />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/sus" element={<Sus />} />
              <Route path="/scrape" element={<Scrape />} />
            </Routes>
          </div>
        </RecoilRoot>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
