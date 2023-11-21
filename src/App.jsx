import "./App.css";
import { Route, Routes } from "react-router-dom";
//? Pages ////////////////////////////////////////////
import Main from "./components/Main/Main";
import Layanan from "./components/Layanan/Layanan";
import Home from "./pages/Home/Home";
import CTA from "./components/CTA/CTA";
import KomitmenKami from "./components/KomitmenKami/KomitmenKami";
import KlienKami from "./components/KlienKami/KlienKami";
import TanyaJawab from "./components/TanyaJawab/TanyaJawab";
import HubungiKami from "./components/HubungiKami/HubungiKami";
import Footer from "./components/Footer/Footer";
//? //////////////////////////////////////////////////
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/komitmenkami" element={<KomitmenKami />} />
        <Route path="/klienkami" element={<KlienKami />} />
        <Route path="/tanyajawab" element={<TanyaJawab />} />
        <Route path="/hubungikami" element={<HubungiKami />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
